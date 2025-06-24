'use client';

import { useCartCount, useTest } from '@repo/shared/hooks/useTest';
import { useCartCountStore, useUserStore } from '@repo/shared/stores/userStore';
import { Button } from '@repo/ui/components/_base/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@repo/ui/components/_base/dialog';
import { Input } from '@repo/ui/components/_base/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/_base/select';
import { AlertDialogDemo } from '@repo/ui/components/_custom/AlertDialog';
import CustomCheckbox from '@repo/ui/components/_custom/CustomCheckbox';
import CustomInput from '@repo/ui/components/_custom/CustomInput';
import CustomSelect from '@repo/ui/components/_custom/CustomSelect';
import { SonnerDemo } from '@repo/ui/components/_custom/SonnerDemo';
import CustomerInfo from '@repo/ui/components/checkout/CustomerInfo';
import FormContainer from '@repo/ui/components/common/FormContainer';
import { useNextTheme } from '@repo/ui/lib/utils';
import { Link } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type IFormType = {
  username: string;
  username1: string;
  checkbox1: boolean;
};

export default function Page() {
  const { push } = useRouter();
  const { setTheme } = useNextTheme();
  const [value, setValue] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [submitValue, setSubmitValue] = useState<string>('');

  const { data } = useCartCount();
  const { username } = useUserStore();
  const { cartCount } = useCartCountStore();
  useTest('test!');

  function selectValueChange(value: string) {
    setTheme(value);
    setValue(value);
  }

  function onSubmit(data: IFormType) {
    setSubmitValue(data.username);
    console.log(data);
  }

  console.log(isChecked);
  console.log(data);
  return (
    <FormContainer handleSubmit={onSubmit}>
      <div className="flex min-h-svh items-baseline justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold">
            Hello World, {username} {cartCount} {submitValue}
          </h1>
          <CustomCheckbox checked={isChecked} onCheckedChange={() => setIsChecked(!isChecked)} />
          <CustomSelect
            className="w-[180px]"
            placeholder="Select Theme"
            value={value}
            onValueChange={selectValueChange}
            selectItems={{
              Theme: [
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'system', label: 'System' },
              ],
            }}
          />
          <Select value={value} onValueChange={selectValueChange}>
            <SelectTrigger className="h-4 w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <CustomerInfo />
          {/*<div className="flex gap-2">*/}
          {/*  <Checkbox id={'cb1'} onCheckedChange={checked => alert(checked)} />*/}
          {/*  <Label htmlFor={'cb1'}>라라벨벨</Label>*/}
          {/*</div>*/}
          {/*<div className="flex gap-2">*/}
          {/*  <CustomCheckbox id={'cb1'} onCheckedChange={checked => console.log(checked)} />*/}
          {/*  <Label htmlFor={'cb1'}>커스텀체크박스</Label>*/}
          {/*</div>*/}
          <div className="grid gap-3">
            <CustomInput label="받으시는 분" placeholder="받는 분 이름을 입력해 주세요." required />
            <Input />
            <SonnerDemo />
          </div>
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
          <div className="flex gap-2">
            <Button size={'sm'} type={'button'} onClick={() => push('/query')}>
              <Link />
              query
            </Button>
            <Button size={'sm'} type={'button'} onClick={() => push('/hydrate')}>
              <Link />
              hydrate
            </Button>
            <Button size={'sm'} type={'button'} onClick={() => push('/cookie')}>
              <Link />
              cookie
            </Button>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </div>
    </FormContainer>
  );
}
