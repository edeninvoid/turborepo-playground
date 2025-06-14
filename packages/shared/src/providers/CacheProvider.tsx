'use client';

import { ReactNode } from 'react';
import { HydrationBoundary, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from '@repo/shared/lib/queryClient';

interface CacheProviderProps {
  children: ReactNode;
  dehydratedState?: unknown;
}

export default function CacheProvider({ children, dehydratedState }: CacheProviderProps) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
