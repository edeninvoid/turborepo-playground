import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';
import { createCartApi } from '@repo/shared/apis/checkout/CartApi';
import { getAxiosInstance } from '@repo/shared/apis/_axios/instance';

export const useTest = (prop?: string) => {
  useEffect(() => {
    console.log('use Test prop ==> ', prop);
  }, [prop]);
};

export const useCartCount = () => {
  const axios = getAxiosInstance();
  const cartApi = createCartApi(axios);

  return useQuery({
    queryKey: ['CART_COUNT'],
    queryFn: () => cartApi.getCartCount(),
    select: data => data?.count ?? 0,
  });
};
