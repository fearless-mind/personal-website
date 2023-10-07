'use client';

import { Navbar } from '@/src/components/navBar';
import { Topbar } from '@/src/components/topBar';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { Fira_Sans as Font } from 'next/font/google';
import Head from 'next/head';

const inter = Font({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

type PageLayoutProps = PropsWithChildren<{
  title?: string;
}>;

export const PageLayout: FunctionComponent<PageLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <main className={`${inter.className} md:flex h-full`}>
      <Head>
        <title>{['Francisco Goinhas', title].join(' - ')}</title>
        <meta
          property="og:title"
          content="Francisco Goinhas - {title}"
          key="title"
        />
      </Head>
      <Navbar title={title} />
      <div className="basis-11/12">
        <div className="hidden md:block">
          <Topbar title={title} />
        </div>
        {children}
      </div>
    </main>
  );
};
