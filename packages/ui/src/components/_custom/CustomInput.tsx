import { Input } from '@repo/ui/components/_base/input';
import { Label } from '@repo/ui/components/_base/label';
import { cn } from '@repo/ui/lib/utils';
import * as React from 'react';

export default function CustomInput({
  className,
  type,
  label,
  required,
  ...props
}: React.ComponentProps<'input'> & { label?: string; required?: boolean }) {
  return (
    <Label className="flex flex-col items-start">
      {label && (
        <div className="flex space-x-0.5">
          <span className="text-base font-semibold">{label}</span>
          {required && <span className="mt-1">*</span>}
        </div>
      )}
      <Input
        type={type}
        className={cn(
          'h-11 min-w-[260px] rounded-[0] border-none bg-gray-100 text-red-500 placeholder:text-base',
          className,
        )}
        {...props}
      />
    </Label>
  );
}
