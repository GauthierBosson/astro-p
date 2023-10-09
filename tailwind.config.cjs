const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Krub', 'Rubik', ...defaultTheme.fontFamily.sans],
			},
			dropShadow: {
				'4xl': [
					'0 -5px 42px rgba(0, 0, 255, 0.35)',
					'0 0px 42px rgba(255, 102, 0, 0.35)',
					'0 5px 42px rgba(163, 77, 255, 0.35)'
				]
			},
			animation: {
				text: 'text 5s ease infinite'
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
			},
		},
	},
	plugins: [],
}
