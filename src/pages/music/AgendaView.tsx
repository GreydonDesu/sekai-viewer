import { Typography, Grid, Chip } from "@mui/material";
import { Skeleton } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouteMatch } from "react-router-dom";
import {
  IMusicDifficultyInfo,
  IMusicInfo,
  IMusicVocalInfo,
  IOutCharaProfile,
} from "../../types.d";
import { getRemoteAssetURL, useCachedData } from "../../utils";
import { useAssetI18n } from "../../utils/i18n";
import { ContentTrans } from "../../components/helpers/ContentTrans";
import SpoilerTag from "../../components/widgets/SpoilerTag";
import Image from "mui-image";
import { charaIcons } from "../../utils/resources";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../../stores/root";
import AgendaBox from "../../components/styled/AgendaBox";
import AgendaPaper from "../../components/styled/AgendaPaper";
import ChipDifficulty from "../../components/styled/ChipDifficulty";
import SpoilerCard from "../../components/helpers/SpoilerCard";

const AgendaView: React.FC<{ data?: IMusicInfo }> = observer(({ data }) => {
  const { path } = useRouteMatch();
  const { t } = useTranslation();
  const { getTranslated } = useAssetI18n();
  const { region } = useRootStore();

  const [musicDiffis] =
    useCachedData<IMusicDifficultyInfo>("musicDifficulties");
  const [musicVocals] = useCachedData<IMusicVocalInfo>("musicVocals");
  const [outCharas] = useCachedData<IOutCharaProfile>("outsideCharacters");

  const [jacket, setJacket] = useState<string>("");
  const [diffis, setDiffis] = useState<IMusicDifficultyInfo[]>([]);
  const [musicVocal, setMusicVocal] = useState<IMusicVocalInfo[]>([]);

  useEffect(() => {
    if (data)
      getRemoteAssetURL(
        `music/jacket/${data.assetbundleName}_rip/${data.assetbundleName}.webp`,
        setJacket,
        "minio",
        region
      );
  }, [data, region]);

  useEffect(() => {
    if (data && musicDiffis && musicDiffis.length) {
      setDiffis(musicDiffis.filter((elem) => elem.musicId === data.id));
    }
  }, [musicDiffis, data]);

  useEffect(() => {
    if (data && musicVocals && musicVocals.length) {
      setMusicVocal(
        musicVocals.filter((elem) => elem.musicId === Number(data.id))
      );
    }
  }, [musicVocals, data]);

  const getVocalCharaIcons: (index: number) => JSX.Element = useCallback(
    (index: number) => {
      return (
        <Grid container alignItems="center">
          {musicVocal[index].characters.map((chara) =>
            chara.characterType === "game_character" ? (
              <Grid
                item
                key={`chara-${chara.characterId}`}
                style={{ marginLeft: "0.1em", marginRight: "0.1em" }}
              >
                <img
                  key={chara.characterId}
                  height="36"
                  src={charaIcons[`CharaIcon${chara.characterId}`]}
                  alt={`character ${chara.characterId}`}
                ></img>
              </Grid>
            ) : (
              <Grid
                item
                key={`outchara-${chara.characterId}`}
                style={{ marginLeft: "0.1em", marginRight: "0.1em" }}
              >
                <Typography>
                  {outCharas && outCharas.length
                    ? outCharas.find((elem) => elem.id === chara.characterId)!
                        .name
                    : `Outside Character ${chara.characterId}`}
                </Typography>
              </Grid>
            )
          )}
        </Grid>
      );
    },
    [musicVocal, outCharas]
  );

  if (!data) {
    // loading
    return (
      <AgendaBox>
        <AgendaPaper>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={3} sm={2} md={1}>
              <Skeleton
                variant="rectangular"
                width="96px"
                height="96px"
              ></Skeleton>
            </Grid>
            <Grid item xs={3} sm={2}>
              <Typography variant="body1">
                <Skeleton variant="text" width="60%"></Skeleton>
              </Typography>
            </Grid>
            <Grid item xs={4} sm={3}>
              <Typography variant="body1">
                <Skeleton variant="text" width="60%"></Skeleton>
              </Typography>
            </Grid>
            <Grid item xs={3} sm={2}>
              <Typography variant="body1">
                <Skeleton variant="text" width="60%"></Skeleton>
              </Typography>
            </Grid>
          </Grid>
        </AgendaPaper>
      </AgendaBox>
    );
  }
  return (
    <SpoilerCard
      releaseTime={new Date(data.publishedAt)}
      toPath={path + "/" + data.id}
      component={AgendaBox}
    >
      <AgendaPaper>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={3} sm={2} md={1}>
            <Image
              src={jacket}
              alt={getTranslated(`music_titles:${data.id}`, data.title)}
              // aspectRatio={1}
              bgColor=""
            ></Image>
          </Grid>
          <Grid item xs={9} sm={2}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <SpoilerTag releaseTime={new Date(data.publishedAt)} />
              </Grid>
              <Grid item>
                <ContentTrans
                  contentKey={`music_titles:${data.id}`}
                  original={data.title}
                  originalProps={{
                    variant: "subtitle1",
                  }}
                  translatedProps={{
                    variant: "subtitle1",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3} md={4}>
            <Grid item>
              <Grid container direction="row" spacing={1}>
                {diffis.map((elem) => (
                  <Grid item xs={2} key={`diff-${elem.id}`}>
                    <ChipDifficulty
                      difficulty={elem.musicDifficulty}
                      value={String(elem.playLevel)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
            {data.categories.map((cat) => (
              <Chip
                label={t(
                  `music:categoryType.${
                    typeof cat === "string" ? cat : cat.musicCategoryName
                  }`
                )}
                key={typeof cat === "string" ? cat : cat.musicCategoryName}
              ></Chip>
            ))}
          </Grid>
          {musicVocal && (
            <Grid item xs={12} sm={3} md={3}>
              <Grid container spacing={2} alignItems="center">
                {musicVocal.map((_, idx) => (
                  <Grid item key={idx}>
                    {getVocalCharaIcons(idx)}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}
        </Grid>
      </AgendaPaper>
    </SpoilerCard>
  );
});

export default AgendaView;
