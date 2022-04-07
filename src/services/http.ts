import axios from 'axios';
import { TGenerateOptions, IFormatResponse } from '../types';

const instance = axios.create();
instance.defaults.baseURL = 'https://www.sicher-im-netz.de/siba-app/siba';
instance.defaults.timeout = 180000;

export const httpPost = (url: string, data?: any) =>
  sendRequest({ method: 'POST', url, data });
export const httpGet = (url: string, params?: any) =>
  sendRequest({ method: 'GET', url, params });
export const httpPatch = (url: string, data?: any) =>
  sendRequest({ method: 'PATCH', url, data });
export const httpDelete = (url: string, data?: any) =>
  sendRequest({ method: 'DELETE', url, data });

const formatResponse: (response?: any) => IFormatResponse<any> = (
  response = {},
) => ({
  headers: response.headers || {},
  data: response.data || {},
  status: response.status || 418,
  statusText: response.statusText || '',
});

const sendRequest = async ({
  method,
  url,
  data = undefined,
  params = undefined,
}: TGenerateOptions) => {
  const OPTIONS = generateOptions({ method, url, data, params });
  try {
    const response = await instance(OPTIONS);
    return formatResponse(response);
  } catch (error: any) {
    if (error.response?.status === 408 || error.code === 'ECONNABORTED') {
      throw formatResponse({
        status: 408,
        statusText: 'Request timeout!!',
      });
    }
    const response = formatResponse(error.response);
    return response;
  }
};

const generateOptions = ({ method, url, data, params }: TGenerateOptions) => {
  const defaultHeaders = {
    // Accept: '*/*',
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',

    // 'Cache-Control': 'no-cache',
    // 'Accept-Encoding': 'gzip, deflate, br',

    // Accept: 'application/json',
    // mode: 'cors',
    // 'Accept-Language': 'ru',
    // 'Access-Control-Allow-Origin': 'http://localhost:3000',
    // 'Access-Control-Allow-Credentials': true,
  };

  return {
    method,
    url,
    data,
    params,
    // headers: {
    //   ...defaultHeaders,
    // },
  };
};
