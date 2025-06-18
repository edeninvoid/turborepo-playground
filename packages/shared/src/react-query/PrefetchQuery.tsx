import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { ReactNode } from 'react';

interface PrefetchQueryProps<TData> {
  queryKey: unknown[];
  queryFn: () => Promise<TData>;
  children: ReactNode;
}

export async function PrefetchQuery<TData>({
  queryKey,
  queryFn,
  children,
}: PrefetchQueryProps<TData>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
