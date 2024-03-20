import axios, { AxiosResponse } from "axios";

export const getRequest = async (url: string): Promise<AxiosResponse> => {
  const response: Promise<AxiosResponse> = axios.get(url);

  return await response;
};
