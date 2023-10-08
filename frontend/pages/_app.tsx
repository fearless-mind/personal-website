import { ThemeProvider } from '@/src/material';
import type { AppProps } from 'next/app';
import './globals.css';
import { FunctionComponent, PropsWithChildren } from 'react';
import { PageLayout } from '@/src/layouts/pageLayout';
import { Navbar } from '@/src/components/navBar';
import { Topbar } from '@/src/components/topBar';

export const items = [
  {
    label: 'Home',
    icon: 'home',
    href: '/',
  },
  {
    label: 'Skills',
    icon: 'build',
    href: '/skills',
  },
  {
    label: 'Experience',
    icon: 'work_outline',
    href: '/experience',
  },
  {
    label: 'Projects',
    icon: 'lightbulb',
    href: '/projects',
  },
  {
    label: 'Contact',
    icon: 'contacts',
    href: '/contact',
  },
];

type RootLayoutProps = PropsWithChildren<{
  title: string;
}>;

const RootLayout: FunctionComponent<RootLayoutProps> = ({
  title,
  children,
}) => (
  <PageLayout
    title={title}
    navBar={<Navbar title={title} items={items} />}
    topBar={<Topbar title={title} />}
  >
    {children}
  </PageLayout>
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <RootLayout title={pageProps.title}>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}
