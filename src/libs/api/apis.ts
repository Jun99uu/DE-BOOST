import axios, { AxiosResponse } from "axios";
import customAPI from "./customApi";

const token = localStorage.getItem("at");

/** 검색 결과 받아오기 */
export const getSearchResult = (
  name: string,
  cursor: number = 0
): Promise<AxiosResponse<any, any>> => {
  const get = customAPI.get(`/riot/gameinfo`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      summonerName: name,
      //   cursor: cursor,
    },
  });

  return get;
};

/** 검색 결과 요청하기(업데이트) */
export const postSearchResult = (
  name: string
): Promise<AxiosResponse<any, any>> => {
  const post = customAPI.post(
    "/riot/gameinfo",
    {
      summonerName: name,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return post;
};

/** 매치 분석 */
export const getInfoDetails = (
  name: string,
  id: string
): Promise<AxiosResponse<any, any>> => {
  const get = customAPI.get(`/riot/gameinfo/detail`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      summonerName: name,
      gameId: id,
    },
  });

  return get;
};
