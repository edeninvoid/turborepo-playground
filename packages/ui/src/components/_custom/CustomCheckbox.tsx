'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '@repo/ui/lib/utils';
import { CheckIcon } from 'lucide-react';
import * as React from 'react';

export default function CustomCheckbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'border-input dark:bg-input/30 data-[state=checked]:bg-primary dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs data-[state=checked]:text-primary-foreground peer size-[22px] shrink-0 rounded-[4px] border text-gray-200 outline-none transition-shadow focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center font-semibold text-current transition-none">
        <CheckIcon className="size-3.5" strokeWidth={3} />
      </div>
    </CheckboxPrimitive.Root>
  );
}
