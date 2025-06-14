import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { CartApi } from '../apis/CartApi.js';

const useTest = (prop?: string) => {
  useEffect(() => {
    console.log('use Test prop ==> ', prop);
  }, [prop]);
};

const useUserData = (cartApi: CartApi) => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => cartApi.getUsers(),
    staleTime: 1000 * 60 * 5,
  });
};

const useGetUserCacheData = () => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<any>(['users']) ?? [];
};

export { useTest, useUserData, useGetUserCacheData };
