import CustomCheckbox from '@repo/ui/components/_custom/CustomCheckbox';
import CustomInput from '@repo/ui/components/_custom/CustomInput';
import { useFormContext } from 'react-hook-form';

export default function CustomerInfo() {
  const { register } = useFormContext();
  return (
    <>
      <CustomInput {...register('username1')} label="Username" />
      <CustomCheckbox {...register('checkbox1')} />
    </>
  );
}
