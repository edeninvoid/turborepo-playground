import { Skeleton } from '@repo/ui/components/_base/skeleton';

export default function ResponsiveCheckoutItem() {
  return (
    <div className="flex w-[500px] flex-col gap-5">
      <div className="flex gap-5">
        <Skeleton className="size-[130px]" />
        <Skeleton className="h-[160px] min-h-[130px] grow" />
      </div>
      <div className="flex justify-end">
        <Skeleton className="h-[40px] grow md:ml-[150px]" />
      </div>
    </div>
  );
}
