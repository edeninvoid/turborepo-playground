'use client';

import { initializeApp } from '@/lib/initializer';
import CacheProvider from '@repo/shared/providers/CacheProvider';
import { NextThemeProvider } from '@repo/ui/lib/utils';
import '@repo/ui/styles/animations.css';
import { ReactNode, unstable_ViewTransition as ViewTransition } from 'react';

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
      <CacheProvider>
        <ViewTransition default={'slow-fade'}>{children}</ViewTransition>
      </CacheProvider>
    </NextThemeProvider>
  );
}
