import axios from "axios";
import jwt_decode, { JwtPayload } from "jwt-decode";

const baseUrl = import.meta.env.VITE_BASE_URL;

//MVP에서는 사용하지 않음
const autoApi = axios.create({
  baseURL: baseUrl,
});

autoApi.interceptors.request.use(
  async (config) => {
    let accessToken = localStorage.getItem("at");
    let refreshToken = localStorage.getItem("rt");

    if (accessToken) {
      const currentTime = Date.now() / 1000; // current time in seconds
      const decodedAccessToken: JwtPayload = jwt_decode(accessToken);

      if (decodedAccessToken.exp && decodedAccessToken.exp < currentTime + 10) {
        // 액세스토큰이 만료 되었거나, 10초후에 만료되는 경우
        if (refreshToken) {
          const decodedRefreshToken: JwtPayload = jwt_decode(refreshToken);
          if (
            decodedRefreshToken.exp &&
            decodedRefreshToken.exp > currentTime
          ) {
            //TODO 리프레시토큰이 아직 유효한 경우 갱신 api
            const response = await axios.post(`${baseUrl}/refresh`, {
              token: refreshToken,
            });
            if (response.status === 200) {
              localStorage.setItem("at", response.data.accessToken);
              accessToken = response.data.accessToken;
            }
          } else {
            // 리프레시 토큰이 만료된 경우
            localStorage.removeItem("at");
            localStorage.removeItem("rt");
            accessToken = null;
          }
        }
      }

      if (accessToken) {
        // 액세스토큰이 있다면 헤더에 엑세스토큰 삽입
        config.headers["Authorization"] = "Bearer " + accessToken;
      }
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default autoApi;
