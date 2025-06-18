import { getCartApi } from '@repo/shared/apis/checkout/CartApi';
import { QUERY_KEYS } from '@repo/shared/constants/queryKey';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useTest = (prop?: string) => {
  useEffect(() => {
    console.log('use Test prop ==> ', prop);
  }, [prop]);
};

export const useCartCount = () => {
  const cartApi = getCartApi();
  return useQuery({
    queryKey: QUERY_KEYS.CART_COUNT,
    queryFn: () => cartApi.getCartCount(),
    select: data => data?.count ?? 0,
  });
};
