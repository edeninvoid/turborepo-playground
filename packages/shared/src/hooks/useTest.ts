import { getAxiosInstance } from '@repo/shared/apis/_axios/instance';
import { createCartApi } from '@repo/shared/apis/checkout/CartApi';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

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
