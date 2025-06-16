import { AxiosInstance } from 'axios';
import { CartCountResponse } from '@repo/shared/apis/checkout/CartApiType';

export const createCartApi = (axios: AxiosInstance) => ({
  getCartCount(): Promise<CartCountResponse> {
    return axios.get('/api/carts/getCartCount');
  },
});
