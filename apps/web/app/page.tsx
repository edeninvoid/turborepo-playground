'use client';

import { useCartCount, useTest } from '@repo/shared/hooks/useTest';
import { useUserStore } from '@repo/shared/stores/userStore';
import { Button } from '@workspace/ui/components/button';
import { Checkbox } from '@workspace/ui/components/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@workspace/ui/components/dialog';
import { Input } from '@workspace/ui/components/input';
import { Label } from '@workspace/ui/components/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@workspace/ui/components/select';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const { push } = useRouter();
  const { theme, setTheme } = useTheme();
  const [value, setValue] = useState('');
  const { data } = useCartCount();
  const username = useUserStore.getState().username;

  useTest('test!');

  const selectValueChange = (value: string) => {
    if (value === 'light') {
      setValue('light');
    } else {
      alert('error');
      setValue('light');
    }
  };

  console.log(data);
  return (
    <div className="flex min-h-svh items-baseline justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Hello World, {username}</h1>
        <div className="flex gap-2">
          <Button onClick={() => setTheme('light')}>Light</Button>
          <Button onClick={() => setTheme('dark')}>Dark</Button>
          <Button onClick={() => setTheme('system')}>System</Button>
        </div>
        <Button size="sm" onClick={() => alert('버튼!')}>
          Button
        </Button>
        <Button size={'sm'} type={'button'} onClick={() => push('/query')}>
          /query
        </Button>
        <Select value={value} onValueChange={selectValueChange}>
          <SelectTrigger className="h-4 w-[180px] items-baseline">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Dialog>
          <DialogTrigger>
            <Button>Dialog Open</Button>
          </DialogTrigger>
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
        <div className="flex gap-2">
          <Checkbox onCheckedChange={checked => alert(checked)} />
          <Label>라라벨벨</Label>
        </div>
        <Input />
      </div>
    </div>
  );
}
