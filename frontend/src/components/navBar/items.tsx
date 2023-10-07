'use client';

import { Item } from '@/src/components/navBar';
import { FunctionComponent } from 'react';

type IconProps = {
  text: string;
};

const Icon: FunctionComponent<IconProps> = ({ text }) => (
  <span className="material-icons-outlined text-secondary dark:text-blue-gray-800">
    {text}
  </span>
);

export const items: Item[] = [
  {
    label: 'Home',
    icon: <Icon text="home" />,
    href: '/',
  },
  {
    label: 'Skills',
    icon: <Icon text="build" />,
    href: '/skills',
  },
  {
    label: 'Experience',
    icon: <Icon text="work_outline" />,
    href: '/experience',
  },
  {
    label: 'Projects',
    icon: <Icon text="lightbulb" />,
    href: '/projects',
  },
  {
    label: 'Contact',
    icon: <Icon text="contacts" />,
    href: '/contact',
  },
];
