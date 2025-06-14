'use client';

import { Button } from '@workspace/ui/components/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@workspace/ui/components/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@workspace/ui/components/select';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { useTest, useUserData } from '@repo/shared/hooks/useTest';
import { useRouter } from 'next/navigation';
import { cartApi } from '@/lib/services';
import { OrderType } from '@repo/shared/types/orderTypes';
import { useUserStore } from '@repo/shared/stores/userStore';

export default function Page() {
  const { push } = useRouter();
  const { theme, setTheme } = useTheme();
  const [value, setValue] = useState('');

  const selectValueChange = (value: string) => {
    if (value === 'light') {
      setValue('light');
    } else {
      alert('error');
      setValue('light');
    }
  };

  const orderType = (): OrderType => {
    return 'buy';
  };
  useTest(orderType());

  const { data } = useUserData(cartApi);
  const username = useUserStore.getState().username;

  console.log(data?.data);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World, {username}</h1>
        <span>{process.env.NEXT_PUBLIC_PROJECT_NAME!}</span>
        <div className="flex gap-2">
          <Button onClick={() => setTheme('light')}>Light</Button>
          <Button onClick={() => setTheme('dark')}>Dark</Button>
          <Button onClick={() => setTheme('system')}>System</Button>
        </div>
        <Button size="sm" onClick={() => alert('버튼!')}>
          Button
        </Button>
        <Button size={'sm'} type={'button'} onClick={() => push('/query')}>
          queryPagelink
        </Button>
        <Select value={value} onValueChange={selectValueChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
