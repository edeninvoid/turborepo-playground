import { createEventApi } from '@repo/shared/apis/checkout/EventApi';
import { getAxiosServerInstance } from '@repo/shared/lib/axiosinstance';

const baseURL = process.env.API_BASE_URL!;
const axios = getAxiosServerInstance(baseURL);

export const apiFactory = {
  // cart: createCartApi(axios),
  event: createEventApi(axios),
};
