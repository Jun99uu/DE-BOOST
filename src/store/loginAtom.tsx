import { atom } from "recoil";

interface Logined {
  isLogined: boolean;
  name: string;
  img: string;
}

const defaultValue: Logined = {
  isLogined: false,
  name: "",
  img: "",
};

export const loginState = atom<Logined>({
  key: "logined",
  default: defaultValue,
});
