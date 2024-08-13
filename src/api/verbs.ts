import {AxiosResponse} from 'axios';
import {Client} from './instance';

export async function getRequest(URL: string, params?: Record<string, any>) {
  const response = await Client.get(URL, {params});
  return response;
}

export async function updateRequest(URL: string, params: Record<string, any>) {
  const response = await Client.put(URL, params);
  return response;
}

export async function postRequest(URL: string, params: Record<string, any>) {
  const response = await Client.post(URL, params);
  return response;
}



