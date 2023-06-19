import { SPELL_OBJ, Tier } from "@/libs/getRes";

/**
 * 플레이어 검색 결과 정보 인터페이스
 */
export interface SearchResult {
  /**검색된 플에이어에 대한 정보 */
  summonerInfo: SummonerInfo;
  /**플레이어가 참여한 게임들의 정보 (10개씩, 무한 스크롤) */
  gameInfos: Array<GameInfo>;
  /**최신 업데이트 상태인지? */
  updated: boolean;
  /**이전에 업데이트를 한 적 있는지 -> 없으면 최신화 필요함 */
  searchedBefore: boolean;
}

interface SummonerInfo {
  summonerName: string;
  summonerLevel: number;
  summonerIconId: number;
  tier: keyof typeof Tier | string;
  rank: number;
}

export interface GameInfo {
  gameId: string;
  participantInfos: {
    team1: TeamParticipant[];
    team2: TeamParticipant[];
  };
  info: GameInfoData;
}

export interface TeamParticipant {
  teamId: number;
  summonerName: string;
  championId: number;
  championName: string;
}

interface GameInfoData {
  gameEndTimestamp: number;
  gameStartTimestamp: number;
  gameData: GameData;
}

export interface GameData {
  championId: number;
  championName: string;
  summonerName: string;
  champLevel: number;
  summoner1Id: keyof typeof SPELL_OBJ | number; //스펠
  summoner2Id: keyof typeof SPELL_OBJ | number; //스펠
  kills: number;
  deaths: number;
  assists: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  totalMinionsKilled: number;
  goldEarned: number;
  dragonKills: number;
  baronKills: number;
  win: boolean;
}

/**
 * 하나의 매치 분석했을 때 사용하는 인터페이스
 */
interface MatchInfo {
  gameDuration: number;
  gameStartTimestamp: number;
}

export interface ManufactureInfo {
  dtm: number;
  dpm: number;
  kap: number;
  vs: number;
  dbgpm: number;
  csm: number;
  gpm: number;
  dmgp: number;
  vspm: number;
  avgwpm: number;
  avgwcpm: number;
  avgvwpm: number;
}

export interface MatchData {
  gameId: string;
  gameInfo: MatchInfo;
  team1: GameData[];
  team2: GameData[];
  manufactureInfo: ManufactureInfo;
}

export interface AnalysisResult {
  manufactureInfo: ManufactureInfo;
  predictionList: Array<number>;
  modelPrediction: number;
}
