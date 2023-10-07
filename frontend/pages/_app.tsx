import { ThemeProvider } from '@/src/material';
import type { AppProps } from 'next/app';
import './globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
