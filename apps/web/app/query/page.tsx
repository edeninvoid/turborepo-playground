'use client';

import { useCartCount } from '@repo/shared/hooks/useTest';
import { useUserStore } from '@repo/shared/stores/userStore';
import { useEffect } from 'react';

export default function QueryPage() {
  const { data } = useCartCount();
  const username = useUserStore(state => state.username);
  const setUsername = useUserStore(state => state.setUsername);

  useEffect(() => {
    setUsername('test name!');
  }, []);
  console.log(data);
  return <>Cart Count Query Test: {data}</>;
}
