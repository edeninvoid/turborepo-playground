'use client';

import { useCartCount } from '@repo/shared/hooks/useTest';
import { useCounterStore, useUserStore } from '@repo/shared/stores/userStore';
import { Button } from '@repo/ui/components/_base/button';
import { FormTest } from '@repo/ui/components/common/FormTest';
import { Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function QueryPage() {
  const { push } = useRouter();
  const { data } = useCartCount();
  const { username, setUsername } = useUserStore();
  const { count, increment, decrement } = useCounterStore();
  // const { cartCount, fetchCartCount } = useCartCountStore();

  useEffect(() => {
    setUsername('😎');
    // fetchCartCount();
  }, []);
  console.log(data);
  return (
    <div className="justify-baseline flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">
        Zustand store: {username} {count}
      </h1>
      <span>Cart Count Query Test: {data}</span>
      {/*<span>Cart Count Zustand fetch Test: {cartCount}</span>*/}
      <Button size={'sm'} type={'button'} onClick={() => push('/')}>
        <Home />
        home
      </Button>
      <Button onClick={increment}>count +1</Button>
      <Button onClick={decrement}>count -1</Button>
      <FormTest />
    </div>
  );
}
