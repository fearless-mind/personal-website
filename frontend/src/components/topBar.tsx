'use client';

import { Typography } from '@/src/material';
import { FunctionComponent } from 'react';

type TopbarProps = {
	title?: string;
};

export const Topbar: FunctionComponent<TopbarProps> = ({ title }) => {
	return (
		<div className="bg-blue-50 dark:bg-blue-gray-900 w-full p-4">
			<Typography className="font-medium dark:text-white">
				{title}
			</Typography>
		</div>
	);
};
