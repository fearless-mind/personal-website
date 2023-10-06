'use client';

import { Navbar } from '@/src/components/navBar';
import { Topbar } from '@/src/components/topBar';
import type { FunctionComponent, PropsWithChildren } from 'react';

type PageLayoutProps = PropsWithChildren<{
  title?: string;
}>;

export const PageLayout: FunctionComponent<PageLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <div className="md:flex h-full">
      <Navbar title={title} />
      <div className="basis-11/12">
        <div className="hidden md:block">
          <Topbar title={title} />
        </div>
        {children}
      </div>
    </div>
  );
};
