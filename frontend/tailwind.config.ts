import type { Config } from 'tailwindcss';
import withMT from '@material-tailwind/react/utils/withMT';

const config = withMT({
	darkMode: 'media',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
		'../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			primary: '#4659A9',
			onPrimary: '#FFFFFF',
			primaryContainer: '#DDE1FF',
			onPrimaryContainer: '#001355',
			primaryFixed: '#DDE1FF',
			onPrimaryFixed: '#001355',
			primaryFixedDim: '#B8C3FF',
			onPrimaryFixedVariant: '#2D4090',
			secondary: '#5A5D72',
			onSecondary: '#FFFFFF',
			secondaryContainer: '#DFE1F9',
			onSecondaryContainer: '#171B2C',
			secondaryFixed: '#DFE1F9',
			onSecondaryFixed: '#171B2C',
			secondaryFixedDim: '#C3C5DD',
			onSecondaryFixedVariant: '#424659',
			tertiary: '#76546E',
			onTertiary: '#FFFFFF',
			tertiaryContainer: '#FFD7F3',
			onTertiaryContainer: '#2C1229',
			tertiaryFixed: '#FFD7F3',
			onTertiaryFixed: '#2C1229',
			tertiaryFixedDim: '#E4BAD9',
			onTertiaryFixedVariant: '#5C3D56',
			error: '#BA1A1A',
			onError: '#FFFFFF',
			errorContainer: '#FFDAD6',
			onErrorContainer: '#410002',
			outline: '#767680',
			background: '#FEFBFF',
			onBackground: '#1B1B1F',
			surface: '#FBF8FD',
			onSurface: '#1B1B1F',
			surfaceVariant: '#E2E1EC',
			onSurfaceVariant: '#45464F',
			inverseSurface: '#303034',
			inverseOnSurface: '#F2F0F4',
			inversePrimary: '#B8C3FF',
			shadow: '#000000',
			surfaceTint: '#4659A9',
			outlineVariant: '#C6C5D0',
			scrim: '#000000',
			surfaceContainerHighest: '#E4E1E6',
			surfaceContainerHigh: '#EAE7EC',
			surfaceContainer: '#F0EDF1',
			surfaceContainerLow: '#F5F3F7',
			surfaceContainerLowest: '#FFFFFF',
			surfaceBright: '#FBF8FD',
			surfaceDim: '#DCD9DE',
		},
		animation: {
			cursorBlink: 'cursor-blink 1.5s steps(2) infinite',
		},
	},
	plugins: [],
} satisfies Config);
export default config;
