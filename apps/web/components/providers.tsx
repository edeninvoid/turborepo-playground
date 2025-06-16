'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';
import CacheProvider from '@repo/shared/providers/CacheProvider';
import { initializeApp } from '@/lib/axios';

initializeApp();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <CacheProvider>{children}</CacheProvider>
    </NextThemesProvider>
  );
}
