'use client';

import { Avatar, IconButton, Typography } from '@material-tailwind/react';

export default function Home() {
	const avatar = (
		<Avatar
			src="/profile.png"
			className="w-[12rem] h-[12rem] border-onTertiaryContainer shadow-sm"
			withBorder
		></Avatar>
	);
	return (
		<>
			<div className="flex justify-center my-10 mx-8">{avatar}</div>
			<div className="my-1 mx-8 text-center">
				<Typography variant="h2">Welcome to my website!</Typography>
			</div>

			<div className="flex justify-center my-4">
				<a
					href="https://github.com/goinhasf"
					target="_blank"
					className="mx-1"
				>
					<IconButton variant="filled">
						<i className="fab fa-github text-lg" />
					</IconButton>
				</a>

				<a
					href="https://www.linkedin.com/in/francisco-goinhas-416477125/"
					target="_blank"
					className="mx-1"
				>
					<IconButton variant="filled" className="bg-light-blue-800">
						<i className="fab fa-linkedin text-lg" />
					</IconButton>
				</a>
			</div>

			<div className="flex justify-center mx-8 md:mx-[20%] my-8">
				<Typography variant="paragraph">
					I’m a Software Engineer based in the UK. I’ve got 3+ years
					of experience developing software for companies in health
					care, government, finance and energy sectors. My main
					interests areas are IoT, Cloud and Entrepreneurship. I’m
					also a big advocate of TDD.
				</Typography>
			</div>
		</>
	);
}

export function getStaticProps() {
	return {
		props: {
			title: 'Home',
		},
	};
}
