import { ISekaiCardState, ISekaiUserProfileHonor } from "./stores/sekai";

export type ContentTransModeType = "original" | "translated" | "both";
export type DisplayModeType = "dark" | "light" | "auto";
export type ServerRegion = "jp" | "tw" | "en" | "kr" | "cn";
export type AssetDomainKey = "minio";
export type ComicLangType =
  | "ja"
  | "fr"
  | "ru"
  | "zhs"
  | "zht"
  | "en"
  | "ua"
  | "kr";

export interface GachaDetail {
  id: number;
  gachaId: number;
  cardId: number;
  weight: number;
  isWish: boolean;
}

export interface GachaBehavior {
  id: number;
  gachaId: number;
  groupId: number;
  priority: number;
  gachaBehaviorType: string;
  gachaSpinnableType: string;
  costResourceType?: string;
  costResourceQuantity?: number;
  costResourceId?: number;
  resourceCategory: string;
  spinCount: number;
  // spinLimit?: number;
  executeLimit?: number;
}

export interface GachaPickup {
  id?: number;
  gachaId: number;
  cardId: number;
  gachaPickupType?: string;
}

export interface GachaInformation {
  gachaId: number;
  summary: string;
  description: string;
}

export interface GachaCardRarityRate {
  id?: number;
  groupId?: number;
  cardRarityType: string;
  rate: number;
  lotteryType: string;
}

export interface IGachaInfo {
  id: number;
  gachaType: string;
  name: string;
  seq: number;
  assetbundleName: string;
  // rarity1Rate?: number;
  // rarity2Rate?: number;
  // rarity3Rate?: number;
  // rarity4Rate?: number;
  startAt: number;
  endAt: number;
  drawableGachaHour?: number;
  gachaCeilItemId?: number;
  gachaCardRarityRateGroupId: number;
  gachaCardRarityRates: GachaCardRarityRate[];
  gachaDetails: GachaDetail[];
  gachaBehaviors: GachaBehavior[];
  gachaPickups: GachaPickup[];
  gachaPickupCostumes: never[];
  gachaInformation: GachaInformation;
  isShowPeriod: boolean;
  wishFixedSelectCount: number;
  wishLimitedSelectCount: number;
  wishSelectCount: number;
}

export interface Cost {
  resourceId: number;
  resourceType: string;
  resourceLevel?: number;
  quantity: number;
}

export interface CardParameter {
  id: number;
  cardId: number;
  cardLevel: number;
  cardParameterType: string;
  power: number;
}

export interface CardParameter2 {
  param1: number[];
  param2: number[];
  param3: number[];
}

export interface IGachaTicket {
  id: number;
  name: string;
  assetbundleName: string;
  gachaDisplayType: string;
}

export interface SpecialTrainingCost {
  cardId: number;
  seq: number;
  cost: Cost;
}

export interface MasterLessonAchieveResource {
  releaseConditionId: number;
  cardId: number;
  masterRank: number;
  resources: any[];
}
export interface ICardInfo {
  id: number;
  seq: number;
  characterId: number;
  cardRarityType: string;
  specialTrainingPower1BonusFixed: number;
  specialTrainingPower2BonusFixed: number;
  specialTrainingPower3BonusFixed: number;
  attr: string;
  supportUnit: string;
  skillId: number;
  cardSkillName: string;
  specialTrainingSkillId?: number;
  specialTrainingSkillName?: string;
  prefix: string;
  assetbundleName: string;
  gachaPhrase: string;
  flavorText: string;
  releaseAt: number;
  archiveDisplayType?: string;
  archivePublishedAt: number;
  cardSupplyId: number;
  cardParameters: CardParameter[];
  specialTrainingCosts: SpecialTrainingCost[];
  masterLessonAchieveResources: MasterLessonAchieveResource[];
}

export interface IGameChara {
  id: number;
  seq: number;
  resourceId: number;
  firstName: string;
  givenName: string;
  firstNameRuby: string;
  givenNameRuby: string;
  gender: string;
  height: number;
  live2dHeightAdjustment: number;
  figure: string;
  breastSize: string;
  modelName: string;
  unit: string;
  supportUnitType: string;
}

export interface GachaStatistic {
  spinCount: number;
  cost: {
    ticket: number;
    jewel: number;
  };
  counts: number[];
}

export interface IMusicInfo {
  id: number;
  seq: number;
  releaseConditionId: number;
  categories: (
    | string
    | {
        musicCategoryName: string;
        startAt: number;
      }
  )[];
  title: string;
  pronunciation: string;
  creatorArtistId: number;
  lyricist: string;
  composer: string;
  arranger: string;
  dancerCount: number;
  selfDancerPosition: number;
  assetbundleName: string;
  liveTalkBackgroundAssetbundleName?: string;
  publishedAt: number;
  releasedAt?: number;
  liveStageId?: number;
  fillerSec: number;
  isNewlyWrittenMusic?: boolean;
  isFullLength?: boolean;
  musicCollaborationId?: number;
  creator?: string;
  infos?: any[];
}

export interface IMusicAchievement {
  id: number;
  musicAchievementType: string;
  musicAchievementTypeValue: string;
  resourceBoxId: number;
  musicDifficultyType: string;
}

export interface SkillEffectDetail {
  id: number;
  level: number;
  activateEffectDuration: number;
  activateEffectValueType: string;
  activateEffectValue: number;
}

export interface SkillEnhanceCondition {
  id: number;
  seq: number;
  unit: string;
}

export interface SkillEnhance {
  id: number;
  skillEnhanceType: string;
  activateEffectValueType: string;
  activateEffectValue: number;
  skillEnhanceCondition: SkillEnhanceCondition;
}

export interface SkillEffect {
  id: number;
  skillEffectType: string;
  activateNotesJudgmentType: string;
  skillEffectDetails: SkillEffectDetail[];
  skillEnhance: SkillEnhance;
}

export interface ISkillInfo {
  id: number;
  shortDescription: string;
  description: string;
  descriptionSpriteName: string;
  skillEffects: SkillEffect[];
}

export interface ICardRarity {
  // rarity?: number;
  maxLevel: number;
  maxSkillLevel: number;
  trainingMaxLevel?: number;
  cardRarityType: string;
  seq: number;
}

export interface CharacterRankAchieveResource {
  releaseConditionId: number;
  characterId: number;
  characterRank: number;
  resources: any[];
}

export interface ICharacterRank {
  id: number;
  characterId: number;
  characterRank: number;
  power1BonusRate: number;
  power2BonusRate: number;
  power3BonusRate: number;
  rewardResourceBoxIds: number[];
  characterRankAchieveResources: CharacterRankAchieveResource[];
}

export interface Character {
  id: number;
  musicId: number;
  musicVocalId: number;
  characterType: string;
  characterId: number;
  seq: number;
}

export interface IMusicVocalInfo {
  id: number;
  musicId: number;
  musicVocalType: string;
  seq: number;
  releaseConditionId: number;
  caption: string;
  characters: Character[];
  assetbundleName: string;
  archiveDisplayType?: string;
  archivePublishedAt: number;
}

export interface IOutCharaProfile {
  id: number;
  seq: number;
  name: string;
}

export interface IUserInformationInfo {
  id: number;
  seq: number;
  informationType: string;
  informationTag: string;
  browseType: string;
  platform: string;
  title: string;
  path: string;
  startAt: number;
  endAt: number;
}

export interface IMusicDifficultyInfo {
  id: number;
  musicId: number;
  musicDifficulty: string;
  playLevel: number;
  releaseConditionId: number;
  noteCount?: number;
  totalNoteCount?: number;
}

export interface IMusicTagInfo {
  id: number;
  musicId: number;
  musicTag: string;
  seq: number;
}

export interface IReleaseCondition {
  id: number;
  sentence: string;
  releaseConditionType: string;
  releaseConditionTypeId?: number;
  releaseConditionTypeLevel?: number;
  releaseConditionTypeQuantity?: number;
}

export interface IMusicDanceMembers {
  id: number;
  musicId: number;
  defaultMusicType: string;
  characterId1: number;
  unit1: string;
  characterId2?: number;
  unit2: string;
  characterId3?: number;
  unit3: string;
  characterId4?: number;
  unit4: string;
  characterId5?: number;
  unit5: string;
}

export interface EventRankingReward {
  id: number;
  eventRankingRewardRangeId: number;
  resourceBoxId: number;
}

export interface EventRankingRewardRange {
  id: number;
  eventId: number;
  fromRank: number;
  toRank: number;
  eventRankingRewards: EventRankingReward[];
}

export type EventType =
  | "marathon"
  | "cheerful_carnival"
  | "challenge_live"
  | "world_bloom";

export interface IEventInfo {
  id: number;
  eventType: EventType;
  name: string;
  assetbundleName: string;
  bgmAssetbundleName: string;
  eventOnlyComponentDisplayStartAt: number;
  startAt: number;
  aggregateAt: number;
  rankingAnnounceAt: number;
  distributionStartAt: number;
  eventOnlyComponentDisplayEndAt: number;
  closedAt: number;
  distributionEndAt: number;
  virtualLiveId?: number;
  unit: string;
  eventRankingRewardRanges: EventRankingRewardRange[];
  eventPointAssetbundleName?: string;
}

export interface IEventDeckBonus {
  id: number;
  eventId: number;
  gameCharacterUnitId: number;
  cardAttr: string;
  bonusRate: number;
}

export interface IGameCharaUnit {
  id: number;
  gameCharacterId: number;
  unit: string;
  colorCode: string;
  skinColorCode: string;
  skinShadowColorCode1: string;
  skinShadowColorCode2: string;
}

export interface UserCardRanking {
  cardId: number;
  level: number;
  masterRank: number;
  specialTrainingStatus: string;
  defaultImage: string;
}

export interface UserProfileRanking {
  userId: string | number;
  word: string;
  honorId1?: number;
  honorLevel1?: number;
  honorId2?: number;
  honorLevel2?: number;
  honorId3?: number;
  honorLevel3?: number;
  twitterId: string;
  profileImageType: string;
  userVirtualLiveTop10Rankings?: any[];
}

export interface UserRanking {
  userId: string | number;
  score: number;
  rank: number;
  isOwn: boolean;
  name: string;
  userCard: UserCardRanking;
  userProfile: UserProfileRanking;
  userCheerfulCarnival: UserCheerfulCarnival;
  userProfileHonors?: ISekaiUserProfileHonor[];
}

export interface ResourceBoxDetail {
  resourceBoxPurpose: string;
  resourceBoxId: number;
  seq: number;
  resourceType: string;
  resourceQuantity: number;
  resourceId?: number;
  resourceLevel?: number;
}

export interface IResourceBoxInfo {
  resourceBoxPurpose: string;
  id: number;
  resourceBoxType: string;
  details: ResourceBoxDetail[];
  description?: string;
  name?: string;
  assetbundleName?: string;
}

export interface HonorLevel {
  honorId?: number;
  level: number;
  bonus: number;
  description: string;
  startAt?: number;
  assetbundleName?: string;
  honorRarity?: string;
}

export interface IHonorInfo {
  id: number;
  seq: number;
  groupId: number;
  honorRarity?: string;
  name: string;
  assetbundleName?: string;
  startAt?: number;
  levels: HonorLevel[];
  honorTypeId?: number;
  honorMissionType?: string;
}

export interface ICardEpisode {
  id: number;
  seq: number;
  cardId: number;
  title: string;
  scenarioId: string;
  assetbundleName: string;
  releaseConditionId: number;
  power1BonusFixed: number;
  power2BonusFixed: number;
  power3BonusFixed: number;
  rewardResourceBoxIds: number[];
  costs: Cost[];
  cardEpisodePartType: string;
}

export interface IStampInfo {
  id: number;
  stampType: string;
  seq: number;
  name: string;
  assetbundleName: string;
  balloonAssetbundleName: string;
  characterId1: number;
  characterId2?: number;
  archivePublishedAt?: number;
  description?: string;
}

export interface ITipInfoComic {
  id: number;
  title: string;
  fromUserRank: number;
  toUserRank: number;
  assetbundleName: string;
}

export interface ITipInfoText {
  id: number;
  title: string;
  fromUserRank: number;
  toUserRank: number;
  description: string;
}

export type ITipInfo = ITipInfoText | ITipInfoComic;

export interface ICharaUnitInfo {
  id: number;
  gameCharacterId: number;
  unit: string;
  colorCode: string;
  skinColorCode: string;
  skinShadowColorCode1: string;
  skinShadowColorCode2: string;
}

export interface ICharaProfile {
  characterId: number;
  characterVoice: string;
  birthday: string;
  height: string;
  school: string;
  schoolYear: string;
  hobby: string;
  specialSkill: string;
  favoriteFood: string;
  hatedFood: string;
  weak: string;
  introduction: string;
  scenarioId: string;
}

export interface IUnitProfile {
  unit: string;
  unitName: string;
  seq: number;
  profileSentence: string;
  colorCode: string;
}

export interface ITeamCardState {
  cardId: number;
  level: number;
  skillLevel: number;
  trained: boolean;
  trainable: boolean;
  // power: number;
  masterRank: number;
  story1Unlock: boolean;
  story2Unlock: boolean;
}

export interface ITeamBuild {
  id?: number;
  teamCards: number[];
  teamCardsStates: ISekaiCardState[];
  teamTotalPower: number;
}

export interface IMusicMeta {
  music_id: number;
  difficulty: string;
  level: number;
  combo: number;
  music_time: number;
  event_rate: number;
  base_score: number;
  skill_score_solo: number[];
  skill_score_multi: number[];
  fever_score: number;
}

export interface IMusicRecommendResult {
  id: number;
  mid: number;
  name: string;
  difficulty: string;
  level: number;
  combo: number;
  result: number | number[];
  link: string;
}

export interface IEventCalcAllSongsResult {
  id: number;
  mid: number;
  name: string;
  difficulty: string;
  level: number;
  result: number;
  resultPerHour: number;
}

export interface IUnitStoryEpisode {
  id: number;
  unit: string;
  chapterNo: number;
  episodeNo: number;
  unitEpisodeCategory: string;
  episodeNoLabel: string;
  title: string;
  assetbundleName: string;
  scenarioId: string;
  releaseConditionId: number;
  rewardResourceBoxIds: number[];
  andReleaseConditionId?: number;
}

export interface IUnitStoryChapter {
  id: number;
  unit: string;
  chapterNo: number;
  title: string;
  assetbundleName: string;
  episodes: IUnitStoryEpisode[];
}

export interface IUnitStory {
  unit: string;
  seq: number;
  assetbundleName: string;
  chapters: IUnitStoryChapter[];
}

export interface AppearCharacter {
  Character2dId: number;
  CostumeType: string;
}

export enum SnippetAction {
  None = 0,
  Talk = 1,
  CharacerLayout = 2,
  InputName = 3,
  CharacterMotion = 4,
  Selectable = 5,
  SpecialEffect = 6,
  Sound = 7,
}

export enum SnippetProgressBehavior {
  Now = 0,
  WaitUnitilFinished = 1,
}

export interface Snippet {
  Action: SnippetAction;
  ProgressBehavior: SnippetProgressBehavior;
  ReferenceIndex: number;
  Delay: number;
}

export interface TalkCharacter {
  Character2dId: number;
}

export interface Motion {
  Character2dId: number;
  MotionName: string;
  FacialName: string;
  TimingSyncValue: number;
}

export interface Voice {
  Character2dId: number;
  VoiceId: string;
  Volume: number;
}

export interface TalkData {
  TalkCharacters: TalkCharacter[];
  WindowDisplayName: string;
  Body: string;
  TalkTention: number;
  LipSync: number;
  MotionChangeFrom: number;
  Motions: Motion[];
  Voices: Voice[];
  Speed: number;
  FontSize: number;
  WhenFinishCloseWindow: number;
  RequirePlayEffect: number;
  EffectReferenceIdx: number;
  RequirePlaySound: number;
  SoundReferenceIdx: number;
}

export interface LayoutData {
  Type: number;
  SideFrom: number;
  SideFromOffsetX: number;
  SideTo: number;
  SideToOffsetX: number;
  DepthType: number;
  Character2dId: number;
  CostumeType: string;
  MotionName: string;
  FacialName: string;
  MoveSpeedType: number;
}

export enum SpecialEffectType {
  None = 0,
  BlackIn = 1,
  BlackOut = 2,
  WhiteIn = 3,
  WhiteOut = 4,
  ShakeScreen = 5,
  ShakeWindow = 6,
  ChangeBackground = 7,
  Telop = 8,
  FlashbackIn = 9,
  FlashbackOut = 10,
  ChangeCardStill = 11,
  AmbientColorNormal = 12,
  AmbientColorEvening = 13,
  AmbientColorNight = 14,
  PlayScenarioEffect = 15,
  StopScenarioEffect = 16,
  ChangeBackgroundStill = 17,
  PlaceInfo = 18,
  Movie = 19,
  SekaiIn = 20,
  SekaiOut = 21,
  AttachCharacterShader = 22,
  SimpleSelectable = 23,
  FullScreenText = 24,
  StopShakeScreen = 25,
  StopShakeWindow = 26,
}

export interface SpecialEffectData {
  EffectType: SpecialEffectType;
  StringVal: string;
  StringValSub: string;
  Duration: number;
  IntVal: number;
}

export enum SoundPlayMode {
  CrossFade = 0,
  Stack = 1,
  SpecialSePlay = 2,
  Stop = 3,
}

export interface SoundData {
  PlayMode: SoundPlayMode;
  Bgm: string;
  Se: string;
  Volume: number;
  SeBundleName: string;
  Duration: number;
}

export interface IScenarioData {
  ScenarioId: string;
  AppearCharacters: AppearCharacter[];
  FirstLayout: any[];
  FirstBgm: string;
  FirstBackground: string;
  Snippets: Snippet[];
  TalkData: TalkData[];
  LayoutData: LayoutData[];
  SpecialEffectData: SpecialEffectData[];
  SoundData: SoundData[];
  NeedBundleNames: string[];
  IncludeSoundDataBundleNames: any[];
}

export interface IEpisodeCharacter {
  id: number;
  seq: number;
  character2dId: number;
  storyType: string;
  episodeId: number;
}

export interface ICharacter2D {
  id: number;
  characterType: "game_character" | "mob";
  characterId: number;
  unit: string;
  assetName: string;
}

export interface IMobCharacter {
  id: number;
  seq: number;
  name: string;
  gender: string;
}

export interface EventStoryEpisodeReward {
  storyType?: string;
  resourceBoxId: number;
}

export interface EventStoryEpisode {
  id: number;
  eventStoryId: number;
  episodeNo: number;
  title: string;
  assetbundleName: string;
  scenarioId: string;
  releaseConditionId: number;
  episodeRewards: EventStoryEpisodeReward[];
}

export interface IEventStory {
  id: number;
  eventId: number;
  outline?: string;
  bannerGameCharacterUnitId?: number;
  assetbundleName: string;
  eventStoryEpisodes: EventStoryEpisode[];
}

export interface MissionReward {
  id: number;
  missionType: string;
  missionId: number;
  seq: number;
  resourceBoxId: number;
}

export interface IHonorMission {
  id: number;
  seq: number;
  honorMissionType: string;
  requirement: number;
  sentence: string;
  rewards: MissionReward[];
}

export interface INormalMission {
  id: number;
  seq: number;
  normalMissionType: string;
  requirement: number;
  sentence: string;
  rewards: MissionReward[];
}

export interface IBeginnerMission {
  id: number;
  seq: number;
  beginnerMissionType: string;
  beginnerMissionCategory: string;
  requirement: number;
  sentence: string;
  rewards: MissionReward[];
}

export interface IHonorGroup {
  id: number;
  name: string;
  honorType: string;
  backgroundAssetbundleName?: string;
  frameName?: string;
}

export enum CharacterMissionType {
  PLAY_LIVE = "play_live",
  // COLLECT_CARD = "collect_card",
  WAITING_ROOM = "waiting_room",
  COLLECT_COSTUME_3D = "collect_costume_3d",
  // LIVE_CLEAR = "live_clear",
  COLLECT_STAMP = "collect_stamp",
  READ_AREA_TALK = "read_area_talk",
  // SKILL_EXP = "skill_exp",
  SKILL_LEVEL_UP = "skill_level_up",
  MASTER_RANK = "master_rank",
  // READ_EPISODE = "read_episode",
  READ_CARD_EPISODE_FIRST = "read_card_episode_first",
  READ_CARD_EPISODE_SECOND = "read_card_episode_second",
}

export interface ICharacterMission {
  id: number;
  seq: number;
  characterId: number;
  characterMissionType: CharacterMissionType;
  requirement: number;
  sentence: string;
}

export interface UserGamedata {
  userId: string | number;
  name: string;
  deck: number;
  rank: number;
}

export interface User {
  userGamedata: UserGamedata;
}

export interface UserProfile {
  userId: string | number;
  word: string;
  honorId1?: number;
  honorLevel1?: number;
  honorId2?: number;
  honorLevel2?: number;
  honorId3?: number;
  honorLevel3?: number;
  twitterId: string;
  profileImageType: string;
}

export interface UserDeck {
  leader: number;
  member1: number;
  member2: number;
  member3: number;
  member4: number;
  member5: number;
}

export interface UserCardEpisode {
  cardEpisodeId: number;
  scenarioStatus: string;
  scenarioStatusReasons?: string[];
  isNotSkipped: boolean;
}

export interface UserCard {
  cardId: number;
  level: number;
  masterRank: number;
  specialTrainingStatus: string;
  defaultImage: string;
  episodes?: UserCardEpisode[];
}

export interface UserMusicResult {
  userId?: string | number;
  musicId?: number;
  musicDifficulty: string;
  playType: string;
  playResult: string;
  highScore: number;
  fullComboFlg: boolean;
  fullPerfectFlg: boolean;
  mvpCount: number;
  superStarCount: number;
  createdAt?: number;
  updatedAt?: number;
}

export interface UserMusicDifficultyStatus {
  musicId?: number;
  musicDifficulty: string;
  musicDifficultyStatus: string;
  userMusicResults: UserMusicResult[];
}

export interface UserMusic {
  userId?: string | number;
  musicId: number;
  userMusicDifficultyStatuses: UserMusicDifficultyStatus[];
}

export interface UserCharacter {
  characterId: number;
  characterRank: number;
}

export interface UserChallengeLiveSoloResult {
  characterId: number;
  highScore: number;
}

export interface UserChallengeLiveSoloStage {
  challengeLiveStageType: string;
  characterId: number;
  challengeLiveStageId: number;
  rank: number;
}

export interface UserAreaItem {
  areaItemId: number;
  level: number;
}

export interface UserHonor {
  userId: string | number;
  honorId: number;
  level: number;
  obtainedAt: number;
}

export interface IUserProfile {
  user: User;
  userProfile: UserProfile;
  userDecks: UserDeck[];
  userCards: UserCard[];
  userMusics: UserMusic[];
  userCharacters: UserCharacter[];
  userChallengeLiveSoloResults: UserChallengeLiveSoloResult[];
  userChallengeLiveSoloStages: UserChallengeLiveSoloStage[];
  userAreaItems: UserAreaItem[];
  userHonors: UserHonor[];
}

export type EventGraphRanking =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 20
  | 30
  | 40
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 1000
  | 2000
  | 3000
  | 4000
  | 5000
  | 10000
  | 20000
  | 30000
  | 40000
  | 50000
  | 100000;

export interface UserCheerfulCarnival {
  cheerfulCarnivalTeamId: number;
  eventId: number;
  registerAt: number;
  teamChangeCount: number;
}

export interface EventRankingResponse {
  id: number;
  eventId: number;
  timestamp: string;
  rank: number;
  score: number;
  userId: string;
  userName: string;
  userCard?: UserCard;
  userProfile?: UserProfile;
  userCheerfulCarnival?: UserCheerfulCarnival;
  userProfileHonors?: ISekaiUserProfileHonor[];
}

export interface IEventCard {
  id: number;
  cardId: number;
  eventId: number;
  bonusRate?: number;
}

export interface IGachaCeilItem {
  id: number;
  gachaId: number;
  name: string;
  assetbundleName: string;
  convertStartAt: number;
  convertResourceBoxId: number;
}

export interface VirtualLiveSetlist {
  id: number;
  virtualLiveId?: number;
  seq: number;
  virtualLiveSetlistType: string;
  assetbundleName?: string;
  virtualLiveStageId?: number;
  musicId?: number;
  musicVocalId?: number;
  character3dId1?: number;
  character3dId2?: number;
  character3dId3?: number;
  character3dId4?: number;
  character3dId5?: number;
}

export interface VirtualLiveBeginnerSchedule {
  id: number;
  virtualLiveId: number;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

export interface VirtualLiveSchedule {
  id: number;
  virtualLiveId: number;
  seq: number;
  startAt: any;
  endAt: any;
  noticeGroupId?: string;
}

export interface VirtualLiveCharacter {
  id?: number;
  virtualLiveId?: number;
  gameCharacterUnitId: number;
  seq?: number;
}

export interface VirtualLiveReward {
  id: number;
  virtualLiveType: string;
  virtualLiveId: number;
  resourceBoxId: number;
}

export interface VirtualLiveReward2 {
  id?: number;
  virtualLiveType: string;
  virtualLiveId?: number;
  resourceBoxId: number;
}

export interface VirtualLiveBackgroundMusic {
  backgroundMusicId: number;
  id: number;
  virtualLiveId: number;
}

export interface VirtualLiveWaitingRoom {
  id: number;
  virtualLiveId?: number;
  assetbundleName?: string;
  startAt: any;
  endAt: any;
}

export interface VirtualItem {
  id: number;
  virtualItemCategory: string;
  seq: number;
  priority: number;
  name: string;
  assetbundleName: string;
  costVirtualCoin: number;
  costJewel: number;
  cheerPoint: number;
  effectAssetbundleName: string;
  effectExpressionType: string;
  virtualItemLabelType?: string;
}

export interface VirtualLiveAppeal {
  appealText: string;
  id: number;
  virtualLiveId: number;
  virtualLiveStageStatus: string;
}

export interface VirtualLiveInformation {
  description?: string;
  summary?: string;
  virtualLiveId?: number;
}

export interface IVirtualLiveInfo {
  id: number;
  virtualLiveType: string;
  virtualLivePlatform: string;
  seq: number;
  name: string;
  assetbundleName: string;
  screenMvMusicVocalId: number;
  startAt: any;
  endAt: any;
  rankingAnnounceAt: any;
  virtualLiveSetlists: VirtualLiveSetlist[];
  virtualLiveBeginnerSchedules: VirtualLiveBeginnerSchedule[];
  virtualLiveSchedules: VirtualLiveSchedule[];
  virtualLiveCharacters: VirtualLiveCharacter[];
  virtualLiveReward?: VirtualLiveReward;
  virtualLiveRewards: VirtualLiveReward2[];
  virtualLiveCheerPointRewards?: any[];
  virtualLiveBackgroundMusics: VirtualLiveBackgroundMusic[];
  virtualLiveWaitingRoom: VirtualLiveWaitingRoom;
  virtualItems: VirtualItem[];
  virtualLiveAppeals: VirtualLiveAppeal[];
  virtualLiveInformation: VirtualLiveInformation;
  archiveReleaseConditionId?: number;
  virtualLiveTicketId?: number;
}

export interface MasterOfCermonyBaseEvent {
  Id: int;
  Time: float;
  Duration: float;
  Character3dId: int;
  FaicialKey: string;
  MotionKey: string;
}

export interface CharacterSpawnEvent extends MasterOfCermonyBaseEvent {
  HeadCostume3dId: number;
  BodyCostume3dId: number;
}

export interface CharacterUnspawnEvent extends MasterOfCermonyBaseEvent {}

export interface CharacterTalkEvent extends MasterOfCermonyBaseEvent {
  Serif: string;
  VoiceKey: string;
}

export interface IMasterOfCermonyData {
  Id: string;
  characterSpawnEvents: CharacterSpawnEvent[];
  characterUnspawnEvents: CharacterUnspawnEvent[];
  // characterMoveEvents: CharacterMoveEvent[];
  // characterRotateEvents: CharacterRotateEvent[];
  // characterMotionEvents: CharacterMotionEvent[];
  characterTalkEvents: CharacterTalkEvent[];
  // characterIntaractionEvents: any[];
  // effectMCEvents: any[];
  // lightEvents: LightEvent[];
  soundEvents: SoundEvent[];
  // bgmEvents: any[];
  // audienceEvents: AudienceEvent[];
  // stageObjectSpawnEvents: any[];
  // globalSpotlightEvents: GlobalSpotlightEvent[];
  // aisacEvents: AisacEvent[];
  // screenFadeEvents: any[];
}

export interface ICharacter3D {
  id: number;
  characterType: string;
  characterId: number;
  unit: string;
  name: string;
  headCostume3dId: number;
  bodyCostume3dId: number;
}

export interface ICostume3DModel {
  id: number;
  costume3dId: number;
  unit: string;
  assetbundleName: string;
  thumbnailAssetbundleName: string;
}

export interface ICompactCostume3DModel {
  __ENUM__: ICompactCostume3DModelEnum;
  assetbundleName: (string | undefined)[];
  unit: number[];
  colorAssetbundleName: (string | undefined)[];
  headCostume3dAssetbundleType: (number | undefined)[];
  part: (string | undefined)[];
  id: number[];
  costume3dId: number[];
  thumbnailAssetbundleName: string[];
}

export interface ICompactCostume3DModelEnum {
  unit: string[];
  headCostume3dAssetbundleType: string[];
}

export interface ICompactCostume3D {
  howToObtain: Array<null | string>;
  colorName: string[];
  publishedAt: Array<number | null>;
  archivePublishedAt: Array<number | null>;
  colorId: number[];
  costume3dType: number[];
  designer: string[];
  costume3dGroupId: number[];
  __ENUM__: ICompactCostume3DEnum;
  assetbundleName: string[];
  costume3dRarity: number[];
  name: string[];
  archiveDisplayType: Array<number | null>;
  id: number[];
  characterId: number[];
  partType: number[];
  seq: number[];
}

export interface ICompactCostume3DEnum {
  costume3dRarity: string[];
  archiveDisplayType: string[];
  costume3dType: string[];
  partType: string[];
}

export interface IAreaItemLevel {
  areaItemId: number;
  level: number;
  targetUnit: string;
  targetCardAttr: string;
  targetGameCharacterId: number;
  power1BonusRate: number;
  power1AllMatchBonusRate: number;
  power2BonusRate: number;
  power2AllMatchBonusRate: number;
  power3BonusRate: number;
  power3AllMatchBonusRate: number;
  sentence: string;
}

export interface IAreaItem {
  id: number;
  areaId: number;
  name: string;
  flavorText: string;
  spawnPoint: string;
  assetbundleName: string;
}

export interface EventPrediction {
  status: string;
  message: string;
  data: EventPredictionData;
  rank: EventPredictionRank;
  event: EventPredictionEvent;
}

export interface EventPredictionData {
  "50": number;
  "100": number;
  "500": number;
  "1000": number;
  "5000": number;
  "10000": number;
  "50000": number;
  "100000": number;
  ts: number;
}

export interface EventPredictionRank {
  "50": number;
  "100": number;
  "500": number;
  "1000": number;
  "5000": number;
  "10000": number;
  "50000": number;
  "100000": number;
  ts: number;
}

export interface EventPredictionEvent {
  id: number;
  name: string;
  startAt: number;
  aggregateAt: number;
}

export interface ICheerfulCarnivalSummary {
  id: number;
  eventId: number;
  theme: string;
  midtermAnnounce1At: number;
  midtermAnnounce2At: number;
  assetbundleName: string;
}

export interface ICheerfulCarnivalTeam {
  id: number;
  eventId: number;
  seq: number;
  teamName: string;
  assetbundleName: string;
}

export interface IArea {
  id: number;
  assetbundleName: string;
  areaType: string;
  viewType: string;
  name: string;
  label?: string;
  startAt?: number;
  endAt?: number;
  releaseConditionId: number;
}

export interface IActionSet {
  id: number;
  areaId: number;
  isNextGrade: boolean;
  scriptId: string;
  characterIds: number[];
  archiveDisplayType?: string;
  archivePublishedAt: number;
  releaseConditionId: number;
  scenarioId?: string;
  actionSetType?: string;
  specialSeasonId?: number;
}

export interface IVersionInfo {
  systemProfile: string;
  appVersion: string;
  multiPlayVersion: string;
  dataVersion: string;
  assetVersion: string;
  appHash: string;
  assetHash: string;
  appVersionStatus: string;
}

export interface IListBucketResult {
  Name: string;
  Prefix: string;
  NextContinuationToken?: string;
  CommonPrefixes?: {
    Prefix: string;
  }[];
  Contents?: {
    Key: string;
    LastModified: string;
    Size: number;
  }[];
}

export interface IAssetListElement {
  path: string;
  type: "folder" | "file" | "parent";
}

export interface SpecialStoryEpisode {
  id: number;
  specialStoryId: number;
  episodeNo: number;
  title: string;
  specialStoryEpisodeType: string;
  assetbundleName: string;
  scenarioId: string;
  releaseConditionId: number;
  isAbleSkip: boolean;
  rewardResourceBoxIds: number[];
  specialStoryEpisodeTypeId?: number;
}

export interface ISpecialStory {
  id: number;
  seq: number;
  title: string;
  assetbundleName: string;
  startAt: any;
  endAt: any;
  episodes: SpecialStoryEpisode[];
}

export interface BondsHonorLevel {
  id: number;
  bondsHonorId: number;
  level: number;
  description: string;
}

export interface IBondsHonor {
  id: number;
  seq: number;
  bondsGroupId: number;
  gameCharacterUnitId1: number;
  gameCharacterUnitId2: number;
  honorRarity: string;
  name: string;
  description: string;
  levels: BondsHonorLevel[];
}

export interface IBondsHonorWord {
  id: number;
  seq: number;
  bondsGroupId: number;
  assetbundleName: string;
  name: string;
  description: string;
}

export interface IBond {
  id: number;
  groupId: number;
  characterId1: number;
  characterId2: number;
}

export interface IBondsReward {
  id: number;
  bondsGroupId: number;
  rank: number;
  seq: number;
  bondsRewardType: string;
  resourceBoxId: number;
  description: string;
}

export interface IEventRarityBonusRate {
  id: number;
  cardRarityType: string;
  masterRank: number;
  bonusRate: number;
}

export interface IMasterLessonCost {
  id: number;
  cardRarityType: string;
  masterRank: number;
  seq: number;
  resourceType: string;
  resourceId: number;
  quantity: number;
}

export interface IMasterLesson {
  cardRarityType?: string;
  cardRarity?: number;
  masterRank: number;
  power1BonusFixed: number;
  power2BonusFixed: number;
  power3BonusFixed: number;
  characterRankExp: number;
  costs: Cost[];
  rewards: any[];
}

export interface IMasterLessonReward {
  id: number;
  cardId: number;
  masterRank: number;
  seq: number;
  resourceBoxId: number;
  cardRarity: number;
}

export interface ICostume3D {
  id: number;
  seq: number;
  costume3dGroupId: number;
  costume3dType: string;
  name: string;
  partType: string;
  colorId: number;
  colorName: string;
  characterId: number;
  costume3dRarity: string;
  assetbundleName: string;
  designer: string;
  publishedAt: number;
  archiveDisplayType: string;
  archivePublishedAt: number;
}

export interface IEventMusic {
  eventId: number;
  musicId: number;
  seq: number;
  releaseConditionId: number;
}

export interface ICompactResourceBox {
  __ENUM__: ICompactResourceBoxEnum;
  assetbundleName: (null | string)[];
  resourceBoxPurpose: number[];
  name: (null | string)[];
  id: number[];
  resourceBoxType: number[];
}

export interface ICompactResourceBoxEnum {
  resourceBoxPurpose: string[];
  resourceBoxType: string[];
}

interface ICompactResourceBoxDetail {
  __ENUM__: ICompactResourceBoxDetailENUM;
  resourceBoxId: number[];
  resourceQuantity: number[];
  resourceId: (number | undefined)[];
  resourceBoxPurpose: number[];
  resourceLevel: (number | undefined)[];
  resourceType: number[];
}

interface ICompactResourceBoxDetailENUM {
  resourceBoxPurpose: string[];
  resourceType: string[];
}

export interface IMusicOriginal {
  id: number;
  musicId: number;
  videoLink: string;
}

export interface IIngameCutinCharacters {
  id: number;
  ingameCutinCharacterType: string;
  priority: number;
  gameCharacterUnitId1: number;
  gameCharacterUnitId2: number;
  assetbundleName1: string;
  assetbundleName2: string;
  isLotteryTarget: boolean;
  firstCharacterArchiveVoiceId?: number;
  secondCharacterArchiveVoiceId?: number;
  releaseConditionId?: number;
}

export interface IEventExchangeSummary {
  id: number;
  eventId: number;
  startAt: number;
  endAt: number;
  eventExchanges: EventExchange[];
}

export interface EventExchange {
  id: number;
  eventExchangeSummaryId: number;
  seq: number;
  resourceBoxId: number;
  exchangeLimit?: number;
  eventExchangeCost: EventExchangeCost;
}

export interface EventExchangeCost {
  resourceQuantity: number;
}

export interface ISkillPracticeTicket {
  id: number;
  name: string;
  exp: number;
  flavorText: string;
  characterId?: number;
}

export interface IBoostItem {
  id: number;
  seq: number;
  name: string;
  recoveryValue: number;
  assetBundleName: string;
  flavorText: string;
}
