//dataDragon에서 리소스를 받아오기 위한 유틸함수들입니다.

const LATEST_VER = "13.11.1";

export const SPELL_OBJ = {
  21: "SummonerBarrier",
  1: "SummonerBoost",
  14: "SummonerDot",
  3: "SummonerExhaust",
  4: "SummonerFlash",
  6: "SummonerHaste",
  7: "SummonerHeal",
  13: "SummonerMana",
  30: "SummonerPoroRecall",
  31: "ummonerPoroThrow",
  11: "SummonerSmite",
  39: "SummonerSnowURFSnowball_Mark",
  32: "SummonerSnowball",
  12: "SummonerTeleport",
};

/**
 * 사용자 아이콘 받아오기
 * @icon 사용자 아이콘 번호
 */
export const getIcon = (icon: number): string => {
  const iconRes = `http://ddragon.leagueoflegends.com/cdn/${LATEST_VER}/img/profileicon/${icon}.png`;
  return iconRes;
};

/**
 * 챔피언 초상화 받아오기
 * @name 챔피언 영문 이름
 */
export const getPortrait = (name: string): string => {
  const portRes = `https://ddragon.leagueoflegends.com/cdn/${LATEST_VER}/img/champion/${name}.png`;
  return portRes;
};

/**
 * 스펠 받아오기
 * @name 스펠 영문 이름
 */
export const getSpell = (num: keyof typeof SPELL_OBJ): string => {
  const spellRes = `https://ddragon.leagueoflegends.com/cdn/${LATEST_VER}/img/spell/${
    SPELL_OBJ[`${num}`]
  }.png`;
  return spellRes;
};

/**
 * 아이템 아이콘 받아오기
 * @icon 아이템 아이콘 번호
 */
export const getItem = (icon: number): string | null => {
  const itemRes = `https://ddragon.leagueoflegends.com/cdn/${LATEST_VER}/img/item/${icon}.png`;
  return icon === 0 ? null : itemRes;
};

/**
 * 챔피언 일러스트 받아오기
 * @name 챔피언 영문 이름
 */
export const getIllust = (name: string): string => {
  const illustRes = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`;
  return illustRes;
};

export const Tier = {
  IRON: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/01_iron/images/iron_base.png",
  BRONZE:
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/02_bronze/images/bronze_base.png",
  SILVER:
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/03_silver/images/silver_base.png",
  GOLD: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/04_gold/images/gold_base.png",
  PLATINUM:
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/05_platinum/images/platinum_base.png",
  DIAMOND:
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/06_diamond/images/diamond_base.png",
  MASTER:
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/07_master/images/master_base.png",
  GRANDMASTER:
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/08_grandmaster/images/grandmaster_base.png",
  CHALLENGER:
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/09_challenger/images/challenger_base.png",
};

/** 티어 테두리 이미지 받아오기 */
export const getTier = (tier: keyof typeof Tier): string => {
  return Tier[tier];
};
