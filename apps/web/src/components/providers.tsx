'use client';

import { initializeApp } from '@/lib/initializer';
import CacheProvider from '@repo/shared/providers/CacheProvider';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

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
