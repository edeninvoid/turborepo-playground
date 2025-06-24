import { ReactNode } from 'react';
import { FieldValues, FormProvider, useForm, UseFormProps } from 'react-hook-form';

interface FormProviderProps<T extends FieldValues> {
  children: ReactNode;
  handleSubmit: (data: T) => void;
  options?: UseFormProps<T>;
}

export default function FormContainer<T extends FieldValues>({
  children,
  handleSubmit,
  options,
}: FormProviderProps<T>) {
  const methods = useForm<T>(options);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>;
    </FormProvider>
  );
}
