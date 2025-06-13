import { createAxiosInstance } from '@workspace/services/axios/instance'

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!
const axiosInstance = createAxiosInstance(baseURL)

export default axiosInstance
