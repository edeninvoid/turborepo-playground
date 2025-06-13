import { AxiosInstance } from 'axios'

export class CartApi {
  constructor(private axios: AxiosInstance) {}

  getCartCount() {
    return this.axios.get('/api/carts/getCartCount')
  }
}
