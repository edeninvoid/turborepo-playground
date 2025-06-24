import * as SelectPrimitive from '@radix-ui/react-select';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/_base/select';
import { cn } from '@repo/ui/lib/utils';
import * as React from 'react';

interface CustomSelectItem {
  value: string;
  label: string;
}

interface CustomGroupedSelectItem {
  [groupLabel: string]: CustomSelectItem[];
}

interface CustomSelectProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onValueChange?: (value: string) => void;
  selectItems?: CustomSelectItem[] | CustomGroupedSelectItem;
  disabled?: boolean;
}

function isArrayFrom(
  selectItems?: CustomSelectItem[] | CustomGroupedSelectItem,
): selectItems is CustomSelectItem[] {
  return Array.isArray(selectItems);
}

export default function CustomSelect({
  value,
  defaultValue,
  placeholder = '선택해 주세요.',
  onValueChange,
  selectItems,
  disabled = false,
  className,
  ...props
}: CustomSelectProps & React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  if (!selectItems) return null;

  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger className={cn('min-w-[220px] text-base', className)} size={'lg'} {...props}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {isArrayFrom(selectItems)
          ? selectItems?.map(({ value, label }) => (
              <SelectItem className="text-base" value={value}>
                {label}
              </SelectItem>
            ))
          : Object.entries(selectItems ?? {}).map(([groupLabel, items]) => (
              <SelectGroup key={groupLabel}>
                <SelectLabel className="text-sm">{groupLabel}</SelectLabel>
                {items.map(({ value, label }, idx) => (
                  <SelectItem className="text-base" key={idx} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
      </SelectContent>
    </Select>
  );
}
