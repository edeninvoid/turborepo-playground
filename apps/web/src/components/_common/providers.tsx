'use client';

import { initializeApp } from '@/lib/initializer';
import CacheProvider from '@repo/shared/providers/CacheProvider';
import { NextThemeProvider } from '@repo/ui/lib/utils';
import { ReactNode } from 'react';

initializeApp();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <CacheProvider>{children}</CacheProvider>
    </NextThemeProvider>
  );
}
