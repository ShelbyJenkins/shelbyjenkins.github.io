import { genenerateTailwindTheme } from './src/utils/colorFun/src/index';
import { CUSTOM_THEME } from './src/siteConfig';

/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [require('@mertasan/tailwindcss-variables'), require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		base: false, // applies background color and foreground color for root element by default
		styled: false, // include daisyUI colors and design decisions for all components
		utils: false, // adds responsive and modifier utility classes
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ':root', // The element that receives theme color CSS variables
	},
	typography: {
		DEFAULT: {
			css: {
				pre: {
					color: false,
				},
				code: {
					color: false,
				},
			},
		},
	},
	fontFamily: {
		sans: ['REM', 'sans-serif'],
	},
	theme: {
		extend: genenerateTailwindTheme(CUSTOM_THEME),
	},
	darkMode: ['media'],
};
