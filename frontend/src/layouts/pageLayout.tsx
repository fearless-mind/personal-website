'use client';

import { Fira_Sans as Font } from 'next/font/google';
import Head from 'next/head';
import type { FunctionComponent, PropsWithChildren, ReactNode } from 'react';

const inter = Font({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

type PageLayoutProps = PropsWithChildren<{
  title?: string;
  navBar: ReactNode;
  topBar: ReactNode;
}>;

export const PageLayout: FunctionComponent<PageLayoutProps> = ({
  title,
  navBar,
  topBar,
  children,
}) => {
  return (
    <main
      className={`${inter.className} flex flex-col md:flex-row h-full  bg-surface dark:bg-black dark:text-white`}
    >
      <Head>
        <title>{['Francisco Goinhas', title].join(' - ')}</title>
        <meta
          property="og:title"
          content="Francisco Goinhas - {title}"
          key="title"
        />
      </Head>

      <div className="basis-1/12">{navBar}</div>

      <div className="flex flex-col w-full basis-11/12">
        <div className="hidden md:block">{topBar}</div>
        <div className="h-full">{children}</div>
      </div>
    </main>
  );
};
