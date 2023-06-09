import { GameData, MatchData } from "@/components/search/interface";

export interface FilteredTeam {
  my: GameData[];
  enemy: GameData[];
  win: boolean;
}

/** 플레이어 닉네임을 입력해서 해당 플레이어가 속한 팀과 승패 여부를 받아올 수 있는 라이브러리 */
export function getTeamAndWinStatus(
  data: MatchData,
  summonerName: string
): FilteredTeam | undefined {
  const team1Map: { [key: string]: GameData } = {};
  const team2Map: { [key: string]: GameData } = {};

  for (const player of data.team1) {
    team1Map[player.summonerName.toLowerCase()] = player;
  }

  for (const player of data.team2) {
    team2Map[player.summonerName.toLowerCase()] = player;
  }

  const lowerCaseSummonerName = summonerName.toLowerCase();

  if (lowerCaseSummonerName in team1Map) {
    return {
      my: data.team1,
      enemy: data.team2,
      win: team1Map[lowerCaseSummonerName].win,
    };
  }

  if (lowerCaseSummonerName in team2Map) {
    return {
      my: data.team2,
      enemy: data.team1,
      win: team2Map[lowerCaseSummonerName].win,
    };
  }

  return undefined;
}

/**특정 플레이어 게임 정보만 가져오기 */
export const getPlayerBySummonerName = (
  data: MatchData,
  summonerName: string
): GameData | null => {
  for (const player of data.team1) {
    if (player.summonerName === summonerName) {
      return player;
    }
  }
  for (const player of data.team2) {
    if (player.summonerName === summonerName) {
      return player;
    }
  }
  return null;
};
