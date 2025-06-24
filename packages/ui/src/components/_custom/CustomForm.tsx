import { Form } from '@repo/ui/components/_base/form';
import { ReactNode } from 'react';
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form';

interface CustomFormProps<T extends FieldValues> {
  onSubmit: (data: T) => void;
  children: (methods: UseFormReturn<T>) => ReactNode;
}

export default function CustomForm<T extends FieldValues>({
  onSubmit,
  children,
}: CustomFormProps<T>) {
  const form = useForm<T>();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children(form)}</form>
    </Form>
  );
}
