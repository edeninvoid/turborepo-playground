import { getAxiosInstance } from '@repo/shared/apis/_axios/instance';
import { CartCountResponse } from '@repo/shared/apis/checkout/CartApiType';
import { AxiosInstance } from 'axios';

const createCartApi = (axios: AxiosInstance) => ({
  async getCartCount(): Promise<CartCountResponse> {
    return axios.get('/api/carts/getCartCount');
  },
});

export const getCartApi = () => createCartApi(getAxiosInstance());
