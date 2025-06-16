import axios, { AxiosInstance } from 'axios';

let axiosInstance: AxiosInstance | null = null;

export function initializeAxios(baseURL: string) {
  axiosInstance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.request.use(
    config => {
      const token = '';
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error),
  );

  axiosInstance.interceptors.response.use(
    async response => {
      if (response.data.success === false) {
        return Promise.reject(response.data);
      }

      return await response?.data;
    },
    error => {
      console.error('API Error:', error);
      return Promise.reject(error);
    },
  );

  return axiosInstance;
}

export function getAxiosInstance() {
  if (!axiosInstance) {
    throw new Error('Axios instance 초기화가 필요합니다.');
  }
  return axiosInstance;
}
