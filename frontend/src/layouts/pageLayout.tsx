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
    <main
      className={`${inter.className} md:flex h-full  bg-surface dark:bg-black dark:text-white`}
    >
      <Head>
        <title>{['Francisco Goinhas', title].join(' - ')}</title>
        <meta
          property="og:title"
          content="Francisco Goinhas - {title}"
          key="title"
        />
      </Head>
      <div className="basis-1/12">
        <Navbar title={title} />
      </div>

      <div className="w-full">
        <div className="hidden md:block">
          <Topbar title={title} />
        </div>
        {children}
      </div>
    </main>
  );
};
