'use client';

import { Button, Collapse, IconButton, Typography } from '@/src/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';

export type Item = {
  icon: string;
  label: string;
  href: string;
};

type ItemProps = {
  item: Item;
};

const NavItem: FunctionComponent<ItemProps> = ({
  item: { icon, label, href },
}) => {
  const router = useRouter();
  const isActive = router.route === href;
  const iconStyle = `${
    isActive ? 'text-blue-gray-800 dark:text-blue-gray-800' : 'text-secondary'
  } material-icons-outlined group-hover:text-blue-gray-800`;
  return (
    <div className="mx-2 my-2 md:my-6">
      <Link href={href}>
        <Button
          fullWidth
          variant="text"
          className={`${
            isActive
              ? 'bg-secondaryFixed border-secondary'
              : 'bg-transparent border-transparent'
          } group flex md:justify-center border-2 md:px-4 md:py-2 rounded-full hover:bg-secondaryFixed hover:border-secondaryFixed`}
        >
          <div className="hidden md:flex justify-center md:my-0">
            <span className={iconStyle}>{icon}</span>
          </div>

          <div className="md:hidden flex items-center">
            <div className="mr-4">
              <span className={iconStyle}>{icon}</span>
            </div>
            <Typography
              className={`${
                isActive
                  ? 'text-blue-gray-800'
                  : 'text-onTertiaryContainer dark:text-white'
              } text-xs group-hover:text-blue-gray-800`}
            >
              {label}
            </Typography>
          </div>
        </Button>
      </Link>

      <div className="hidden md:flex justify-center md:my-2">
        <Typography className="text-xs">{label}</Typography>
      </div>
    </div>
  );
};

type NavbarProps = {
  title?: string;
  items: Item[];
};

export function Navbar({ title, items }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const navlist = items.map((item) => (
    <NavItem key={item.label} item={item}></NavItem>
  ));

  return (
    <nav className="dark:bg-blue-gray-900 bg-blue-50 w-full md:w-full md:h-full shadow-sm">
      <div className="flex justify-center items-center w-full md:h-full">
        <div className="md:hidden flex w-full p-4">
          <Typography className="text-onTertiaryContainer dark:text-white font-normal">
            {title}
          </Typography>
        </div>

        <div className="hidden sm:block justify-center items-center p-4">
          {navlist}
        </div>

        <IconButton
          variant="text"
          className="md:hidden m-4 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
          ripple={false}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 stroke-onSecondaryContainer dark:stroke-white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-onSecondaryContainer dark:stroke-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      <Collapse
        className="md:hidden shadow-sm absolute bg-blue-50 dark:bg-blue-gray-900 z-50"
        open={open}
      >
        {navlist}
      </Collapse>
    </nav>
  );
}
