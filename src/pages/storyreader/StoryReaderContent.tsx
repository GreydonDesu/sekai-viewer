import { Chip, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  IUnitStory,
  IEventStory,
  SnippetAction,
  ICharaProfile,
  ICardEpisode,
  IActionSet,
  ISpecialStory,
  ICardInfo,
  ServerRegion,
} from "../../types.d";
import {
  getRemoteAssetURL,
  useAlertSnackbar,
  useCachedData,
  useProcessedScenarioData,
} from "../../utils";
import { charaIcons } from "../../utils/resources";
import { ReleaseCondTrans } from "../../components/helpers/ContentTrans";
import { Sound, SpecialEffect, Talk } from "./StoryReaderSnippet";
import Image from "mui-image";
import { useAssetI18n } from "../../utils/i18n";
import ContainerContent from "../../components/styled/ContainerContent";

const StoryReaderContent: React.FC<{
  storyType: string;
  storyId: string;
  region: ServerRegion;
}> = ({ storyType, storyId, region }) => {
  const { t } = useTranslation();
  const { getTranslated } = useAssetI18n();
  const getProcessedScenarioData = useProcessedScenarioData();
  const { showError } = useAlertSnackbar();

  const [cards] = useCachedData<ICardInfo>("cards");
  const [unitStories] = useCachedData<IUnitStory>("unitStories");
  const [eventStories] = useCachedData<IEventStory>("eventStories");
  const [characterProfiles] = useCachedData<ICharaProfile>("characterProfiles");
  const [cardEpisodes] = useCachedData<ICardEpisode>("cardEpisodes");
  const [actionSets] = useCachedData<IActionSet>("actionSets");
  const [specialStories] = useCachedData<ISpecialStory>("specialStories");

  const [bannerUrl, setBannerUrl] = useState<string>("");
  const [chapterTitle, setChapterTitle] = useState<string>("");
  const [episodeTitle, setEpisodeTitle] = useState<string>("");
  const [scenarioData, setScenarioData] = useState<{
    characters: {
      id: number;
      name: string;
    }[];
    actions: {
      [key: string]: any;
    }[];
  }>({
    actions: [],
    characters: [],
  });
  const [releaseConditionId, setReleaseConditionId] = useState<number>(0);

  useEffect(() => {
    setScenarioData({
      actions: [],
      characters: [],
    });
    try {
      switch (storyType) {
        case "unitStory":
          if (unitStories) {
            const [, , , unitId, chapterNo, episodeNo] = storyId.split("/");

            const chapter = unitStories
              .find((us) => us.unit === unitId)!
              .chapters.find((ch) => ch.chapterNo === Number(chapterNo))!;

            const episode = chapter.episodes.find(
              (ep) => ep.episodeNo === Number(episodeNo)
            )!;

            getRemoteAssetURL(
              `story/episode_image/${chapter.assetbundleName}_rip/${episode.assetbundleName}.webp`,
              setBannerUrl,
              "minio"
            );
            getProcessedScenarioData(
              `scenario/unitstory/${chapter.assetbundleName}_rip/${episode.scenarioId}.asset`,
              false
            ).then((data) => setScenarioData(data));

            setChapterTitle(
              getTranslated(
                `unit_story_chapter_title:${chapter.unit}-${chapter.chapterNo}`,
                chapter.title
              )
            );
            setEpisodeTitle(
              getTranslated(
                `unit_story_episode_title:${episode.unit}-${episode.chapterNo}-${episode.episodeNo}`,
                episode.title
              )
            );
            setReleaseConditionId(episode.releaseConditionId);
          }
          break;
        case "eventStory":
          if (eventStories) {
            const [, , , eventId, episodeNo] = storyId.split("/");

            const chapter = eventStories.find(
              (es) => es.eventId === Number(eventId)
            )!;

            const episode = chapter.eventStoryEpisodes.find(
              (ep) => ep.episodeNo === Number(episodeNo)
            )!;

            getRemoteAssetURL(
              `event_story/${chapter.assetbundleName}/episode_image_rip/${episode.assetbundleName}.webp`,
              setBannerUrl,
              "minio"
            );
            getProcessedScenarioData(
              `event_story/${chapter.assetbundleName}/scenario_rip/${episode.scenarioId}.asset`,
              false
            ).then((data) => setScenarioData(data));

            setChapterTitle("");
            setEpisodeTitle(
              `${episode.episodeNo} - ${getTranslated(
                `event_story_episode_title:${episode.eventStoryId}-${episode.episodeNo}`,
                episode.title
              )}`
            );
            setReleaseConditionId(episode.releaseConditionId);
          }
          break;
        case "charaStory":
          if (characterProfiles) {
            const [, , , charaId] = storyId.split("/");

            const episode = characterProfiles.find(
              (cp) => cp.characterId === Number(charaId)
            )!;

            setBannerUrl(charaIcons[`CharaIcon${charaId}` as "CharaIcon1"]);
            getProcessedScenarioData(
              `scenario/profile_rip/${episode.scenarioId}.asset`,
              false
            ).then((data) => setScenarioData(data));

            setChapterTitle("");
            setEpisodeTitle(t("member:introduction"));
            setReleaseConditionId(0);
          }
          break;
        case "cardStory":
          if (cardEpisodes) {
            const [, , , , , cardEpisodeId] = storyId.split("/");

            const episode = cardEpisodes.find(
              (ce) => ce.id === Number(cardEpisodeId)
            )!;
            let assetbundleName = episode.assetbundleName;
            if (!assetbundleName && !!cards) {
              const card = cards.find((card) => card.id === episode.cardId);
              if (card) {
                assetbundleName = card.assetbundleName;
              }
            }

            if (assetbundleName) {
              // setBannerUrl(charaIcons[`CharaIcon${charaId}` as "CharaIcon1"]);
              getRemoteAssetURL(
                `character/member_small/${assetbundleName}_rip/card_normal.webp`,
                setBannerUrl,
                "minio"
              );
              if (region === "en")
                getProcessedScenarioData(
                  `character/member_scenario/${assetbundleName}_rip/${episode.scenarioId}.asset`,
                  true
                ).then((data) => setScenarioData(data));
              else
                getProcessedScenarioData(
                  `character/member/${assetbundleName}_rip/${episode.scenarioId}.asset`,
                  true
                ).then((data) => setScenarioData(data));

              setChapterTitle("");
              setEpisodeTitle(
                getTranslated(
                  `card_episode_title:${episode.title}`,
                  episode.title
                )
              );
              setReleaseConditionId(episode.releaseConditionId);
            }
          }
          break;
        case "areaTalk":
          if (actionSets) {
            const [, , , , actionSetId] = storyId.split("/");

            const episode = actionSets.find(
              (as) => as.id === Number(actionSetId)
            )!;

            // getRemoteAssetURL(
            //   `character/member_small/${episode.assetbundleName}_rip/card_normal.webp`,
            //   setBannerUrl,
            //   window.isChinaMainland
            // );
            getProcessedScenarioData(
              `scenario/actionset/group${Math.floor(episode.id / 100)}_rip/${
                episode.scenarioId
              }.asset`,
              false,
              true
            ).then((data) => setScenarioData(data));

            setChapterTitle("");
            setEpisodeTitle("");
            // setReleaseConditionId(episode.releaseConditionId);
          }
          break;
        case "specialStory":
          if (specialStories) {
            const [, , , spId, episodeNo] = storyId.split("/");
            const chapter = specialStories.find((sp) => sp.id === Number(spId));
            const episode = chapter?.episodes.find(
              (ep) => ep.episodeNo === Number(episodeNo)
            );

            if (episode?.scenarioId.startsWith("op"))
              getProcessedScenarioData(
                `scenario/special/${chapter?.assetbundleName}_rip/${episode?.scenarioId}.asset`,
                false
              ).then((data) => setScenarioData(data));
            else
              getProcessedScenarioData(
                `scenario/special/${episode?.assetbundleName}_rip/${episode?.scenarioId}.asset`,
                false
              ).then((data) => setScenarioData(data));

            setChapterTitle(chapter?.title || "");
            setEpisodeTitle(episode?.title || "");
          }
          break;
      }
    } catch (error) {
      showError("failed to load episode");
    }
  }, [
    unitStories,
    eventStories,
    storyId,
    storyType,
    getProcessedScenarioData,
    characterProfiles,
    cardEpisodes,
    t,
    getTranslated,
    showError,
    actionSets,
    specialStories,
    cards,
  ]);

  return (
    <ContainerContent>
      {storyType !== "areaTalk" && (
        <Paper sx={(theme) => ({ padding: theme.spacing(1.5, 0) })}>
          <Grid container spacing={1} justifyContent="space-around">
            <Grid
              item
              xs={storyType === "charaStory" ? 6 : 8}
              sm={storyType === "charaStory" ? 3 : 4}
              lg={storyType === "charaStory" ? 2 : 3}
            >
              <Image src={bannerUrl} bgColor="" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
                style={{ height: "100%" }}
              >
                {chapterTitle ? (
                  <Grid item xs={12}>
                    <Typography align="center">{chapterTitle}</Typography>
                  </Grid>
                ) : null}
                <Grid item xs={12}>
                  <Typography align="center">{episodeTitle}</Typography>
                </Grid>
                {releaseConditionId ? (
                  <Grid item xs={12}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="center"
                      spacing={1}
                    >
                      <Grid item>
                        <Chip label={t("common:releaseCondition")} />
                      </Grid>
                      <Grid item>
                        <ReleaseCondTrans
                          releaseCondId={releaseConditionId}
                          originalProps={{ align: "center" }}
                          translatedProps={{ align: "center" }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}
      {!scenarioData.actions.length && (
        <LinearProgress variant="indeterminate" />
      )}
      {scenarioData.actions.map((action, idx) => {
        switch (action.type as SnippetAction) {
          case SnippetAction.Talk:
            return (
              <Talk
                key={`action-${idx}`}
                characterId={action.chara.id as number}
                characterName={action.chara.name as string}
                text={action.body as string}
                voiceUrl={action.voice as string}
              />
            );
          case SnippetAction.SpecialEffect:
            return (
              <SpecialEffect
                key={`action-${idx}`}
                seType={action.seType}
                text={action.body}
                resource={action.resource}
              />
            );
          case SnippetAction.Sound:
            return (
              <Sound
                key={`action-${idx}`}
                hasBgm={action.hasBgm}
                hasSe={action.hasSe}
                voiceUrl={action.hasBgm ? action.bgm : action.se}
              />
            );
          default:
            return null;
        }
      })}
    </ContainerContent>
  );
};

export default StoryReaderContent;
