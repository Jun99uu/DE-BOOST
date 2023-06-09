import { atom } from "recoil";

/**
 * 현재 검색한 유저의 이름
 */
export const userNameState = atom<string>({
  key: "username",
  default: "노는게제일행보케",
});
