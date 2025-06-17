'use client';

import { useCartCount } from '@repo/shared/hooks/useTest';
import { useUserStore } from '@repo/shared/stores/userStore';
import { Button } from '@repo/ui/components/button';
import { Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function QueryPage() {
  const { push } = useRouter();
  const { data } = useCartCount();
  const username = useUserStore(state => state.username);
  const setUsername = useUserStore(state => state.setUsername);

  useEffect(() => {
    setUsername('😎');
  }, []);
  console.log(data);
  return (
    <div className="justify-baseline flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Zustand store: {username}</h1>
      <span>Cart Count Query Test: {data}</span>
      <Button size={'sm'} type={'button'} onClick={() => push('/')}>
        <Home />
        home
      </Button>
    </div>
  );
}
