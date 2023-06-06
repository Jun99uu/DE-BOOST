//dataDragon에서 리소스를 받아오기 위한 유틸함수들입니다.

const LATEST_VER = "13.11.1";

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
export const getSpell = (name: string): string => {
  const spellRes = `https://ddragon.leagueoflegends.com/cdn/${LATEST_VER}/img/spell/${name}.png`;
  return spellRes;
};

/**
 * 아이템 아이콘 받아오기
 * @icon 아이템 아이콘 번호
 */
export const getItem = (icon: number): string => {
  const itemRes = `https://ddragon.leagueoflegends.com/cdn/${LATEST_VER}/img/item/${icon}.png`;
  return itemRes;
};

/**
 * 챔피언 일러스트 받아오기
 * @name 챔피언 영문 이름
 */
export const getIllust = (name: string): string => {
  const illustRes = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`;
  return illustRes;
};
