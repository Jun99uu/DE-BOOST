import { GameData } from "../search/interface";
import { BookmarkInfo } from "./Bookmark/BookmarkContent";

export const dummyBookmarks: Array<BookmarkInfo> = [
  {
    bookmarkId: 1,
    bookmarkGamerName: "중규리",
  },
  {
    bookmarkId: 2,
    bookmarkGamerName: "송규합니다",
  },
  {
    bookmarkId: 3,
    bookmarkGamerName: "중규리",
  },
  {
    bookmarkId: 4,
    bookmarkGamerName: "송규합니다",
  },
  {
    bookmarkId: 5,
    bookmarkGamerName: "중규리",
  },
  {
    bookmarkId: 6,
    bookmarkGamerName: "송규합니다",
  },
  {
    bookmarkId: 7,
    bookmarkGamerName: "중규리",
  },
  {
    bookmarkId: 8,
    bookmarkGamerName: "송규합니다",
  },
];

export const dummyLanding: { endTime: number; info: GameData } = {
  endTime: 1685506975839,
  info: {
    championId: 85,
    championName: "Zoe",
    summonerName: "노는게제일행보케",
    champLevel: 17,
    summoner1Id: 12,
    summoner2Id: 4,
    kills: 2,
    deaths: 8,
    assists: 4,
    item0: 3091,
    item1: 3006,
    item2: 2015,
    item3: 3124,
    item4: 3153,
    item5: 1036,
    item6: 3364,
    totalMinionsKilled: 241,
    goldEarned: 14158,
    dragonKills: 0,
    baronKills: 0,
    win: false,
  },
};
