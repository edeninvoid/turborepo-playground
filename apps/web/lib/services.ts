import { CartApi } from '@workspace/services/apis/CartApi'
import axiosInstance from '@/lib/axios'

export const cartApi = new CartApi(axiosInstance)
