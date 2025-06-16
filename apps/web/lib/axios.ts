import { initializeAxios } from '@repo/shared/apis/_axios/instance';

export function initializeApp() {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;
  initializeAxios(baseURL);
}
