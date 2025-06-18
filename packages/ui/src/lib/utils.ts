import { clsx, type ClassValue } from 'clsx';
import { ThemeProvider, useTheme } from 'next-themes';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useNextTheme = () => {
  return useTheme();
};

export const NextThemeProvider = ThemeProvider;
