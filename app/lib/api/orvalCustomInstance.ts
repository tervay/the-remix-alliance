import Axios, { type AxiosRequestConfig } from "axios";

export const AXIOS_INSTANCE = Axios.create({ baseURL: "" });

export const useCustomInstance = <T>(): ((
  config: AxiosRequestConfig,
) => Promise<T>) => {
  return (config: AxiosRequestConfig) => {
    const promise = AXIOS_INSTANCE({
      ...config,
      headers: {
        ...config.headers,
        "X-TBA-Auth-Key": import.meta.env.VITE_TBA_AUTH_KEY,
      },
    }).then(({ data }) => data);

    return promise;
  };
};

export default useCustomInstance;
