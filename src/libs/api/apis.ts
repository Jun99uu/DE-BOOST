import { AxiosResponse } from "axios";
import customAPI from "./customApi";

const token = localStorage.getItem("at");

/** 검색 결과 받아오기 */
export const getSearchResult = (
  name: string,
  cursor?: number
): Promise<AxiosResponse<any, any>> => {
  const get = customAPI.get(`/riot/gameinfo`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      summonerName: name,
      cursor: cursor ? cursor : "",
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

/** 부마크 받아오기 */
export const getBookmark = (): Promise<AxiosResponse<any, any>> => {
  const get = customAPI.get("/bookmark", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return get;
};

/** 북마크 요청하기 */
export const postBookmark = (
  name: string
): Promise<AxiosResponse<any, any>> => {
  const post = customAPI.post(
    "/bookmark",
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

export const deleteBookmark = (
  id: number
): Promise<AxiosResponse<any, any>> => {
  const remove = customAPI.delete(`/bookmark/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return remove;
};

/** 종합 분석 데이터 받아오기 */
export const getAnalysis = (name: string): Promise<AxiosResponse<any, any>> => {
  const get = customAPI.get("/riot/gameinfo/analysis", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      summonerName: name,
    },
  });
  return get;
};

/** 종합 분석 데이터 신청하기 */
export const postAnalysis = (
  name: string
): Promise<AxiosResponse<any, any>> => {
  const post = customAPI.post(
    "/riot/gameinfo/analysis",
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
