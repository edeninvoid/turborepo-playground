import { CartCountResponse } from '@repo/shared/apis/checkout/CartApiType';
import { getAxiosInstance } from '@repo/shared/lib/axiosinstance';
import { AxiosInstance } from 'axios';

export const createCartApi = (axios: AxiosInstance) => ({
  async getCartCount(): Promise<CartCountResponse> {
    return axios.get('/api/carts/getCartCount');
  },
});

export const getCartApi = () => createCartApi(getAxiosInstance());
