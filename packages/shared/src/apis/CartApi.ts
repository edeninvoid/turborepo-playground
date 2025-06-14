import { AxiosInstance } from 'axios';

export class CartApi {
  constructor(private axios: AxiosInstance) {}

  getUsers() {
    return this.axios.get('/users');
  }

  getCartCount() {
    return this.axios.get('/api/carts/getCartCount');
  }
}
