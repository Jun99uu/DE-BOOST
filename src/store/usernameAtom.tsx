import { atom } from "recoil";
import { Tier } from "@/libs/getRes";

interface Info {
  name: string;
  tier: keyof typeof Tier;
}

const defaultInfo: Info = {
  name: "노는게제일행보케",
  tier: "GOLD",
};

/**
 * 현재 검색한 유저의 이름
 */
export const userNameState = atom<Info>({
  key: "username",
  default: defaultInfo,
});
