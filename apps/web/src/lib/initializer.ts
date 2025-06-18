import { initializeAxiosInstance } from '@repo/shared/lib/axiosinstance';

export function initializeApp() {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;
  initializeAxiosInstance(baseURL);
}
