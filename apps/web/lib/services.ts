import axiosInstance from '@/lib/axios';
import { CartApi } from '@repo/shared/apis/CartApi';

export const cartApi = new CartApi(axiosInstance);
