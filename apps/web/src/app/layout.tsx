import { Geist, Geist_Mono } from 'next/font/google';

import { Providers } from '@/components/_common/providers';
import { Toaster } from '@repo/ui/components/sonner';
import '@repo/ui/styles/globals.css';
import { ReactNode } from 'react';

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
