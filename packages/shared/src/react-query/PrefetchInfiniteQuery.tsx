import {
  dehydrate,
  GetNextPageParamFunction,
  HydrationBoundary,
  QueryClient,
  QueryFunctionContext,
} from '@tanstack/react-query';
import { ReactNode } from 'react';

interface PrefetchInfiniteQueryProps<TData, TQueryKey extends unknown[]> {
  queryKey: TQueryKey;
  queryFn: (ctx: QueryFunctionContext<TQueryKey, number>) => Promise<TData>;
  getNextPageParam: GetNextPageParamFunction<number, TData>;
  children: ReactNode;
}

export async function PrefetchInfiniteQuery<TData, TQueryKey extends unknown[]>({
  queryKey,
  queryFn,
  getNextPageParam,
  children,
}: PrefetchInfiniteQueryProps<TData, TQueryKey>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey,
    queryFn,
    getNextPageParam,
    initialPageParam: 1,
  });

  console.log(queryClient.getQueryData(queryKey));
  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
