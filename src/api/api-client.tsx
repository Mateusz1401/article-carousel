import axios, { AxiosInstance } from 'axios';
import { API_URL } from '../config';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default apiClient;
