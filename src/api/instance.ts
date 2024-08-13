import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {BASE_URL} from './urls';

export const Client: any = axios.create();
Client.defaults.baseURL = BASE_URL;

Client.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);
