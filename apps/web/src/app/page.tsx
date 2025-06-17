'use client';

import { useCartCount, useTest } from '@repo/shared/hooks/useTest';
import { useUserStore } from '@repo/shared/stores/userStore';
import { Button } from '@repo/ui/components/button';
import { Checkbox } from '@repo/ui/components/checkbox';
import { AlertDialogDemo } from '@repo/ui/components/common/AlertDialog';
import CustomForm from '@repo/ui/components/common/CustomForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@repo/ui/components/dialog';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import { Label } from '@repo/ui/components/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/select';
import { Link } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type IFormType = {
  username: string;
};

export default function Page() {
  const { push } = useRouter();
  const { theme, setTheme } = useTheme();
  const [value, setValue] = useState<string>('');
  const [submitValue, setSubmitValue] = useState<string>('');

  const { data } = useCartCount();
  const username = useUserStore.getState().username;
  useTest('test!');

  function selectValueChange(value: string) {
    setTheme(value);
    setValue(value);
  }

  function onSubmit(data: IFormType) {
    setSubmitValue(data.username);
  }

  console.log(data);
  return (
    <div className="flex min-h-svh items-baseline justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">
          Hello World, {username} {submitValue}
        </h1>
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
        <CustomForm<IFormType> onSubmit={onSubmit}>
          {form => (
            <>
              <FormField
                control={form.control}
                name={'username'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...form.register('username')} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </>
          )}
        </CustomForm>
        <div className="flex gap-2">
          <Checkbox id={'cb1'} onCheckedChange={checked => alert(checked)} />
          <Label htmlFor={'cb1'}>라라벨벨</Label>
        </div>
        {/*<div className="flex gap-3">*/}
        {/*  <Input />*/}
        {/*  <Button size="sm">*/}
        {/*    Button <Home />*/}
        {/*    <Cake />*/}
        {/*  </Button>*/}
        {/*</div>*/}
        <Dialog>
          <DialogTrigger>Show Dialog</DialogTrigger>
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
        <AlertDialogDemo />
        <Button size={'sm'} type={'button'} onClick={() => push('/query')}>
          <Link />
          query
        </Button>
      </div>
    </div>
  );
}
