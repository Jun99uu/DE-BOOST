import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(
    axiosParams.method === "GET" || axiosParams.method === "get"
  );
  const [isLogined, setIsLogined] = useState<boolean>(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
      setIsLogined(true);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => {
    fetchData(axiosParams);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("at");
    if (accessToken) {
      axiosParams.headers = {
        ...axiosParams.headers,
        Authorization: `Bearer ${accessToken}`,
      };
      if (axiosParams.method === "GET" || axiosParams.method === "get") {
        fetchData(axiosParams);
      }
    } else {
      setIsLogined(false);
    }
  }, []);

  return { response, error, loading, sendData, isLogined };
};

export default useAxios;
