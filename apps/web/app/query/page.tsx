'use client';

import { useUserData } from '@repo/shared/hooks/useTest';
import { cartApi } from '@/lib/services';
import { useUserStore } from '@repo/shared/stores/userStore';
import { useEffect } from 'react';

export default function QueryPage() {
  const username = useUserStore(state => state.username);
  const setUsername = useUserStore(state => state.setUsername);
  const { data } = useUserData(cartApi);
  // const data = useGetUserCacheData();
  useEffect(() => {
    setUsername('test name!');
  }, []);
  console.log(data?.data);
  return (
    <div>
      <div>stored username: {username}</div>
      {data?.data?.map((user: any) => {
        return <div>{user.name}</div>;
      })}
    </div>
  );
}
