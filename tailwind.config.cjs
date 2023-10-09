/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			dropShadow: {
				'4xl': [
					'0 0px 65px rgba(0, 0, 255, 0.6)',
					'0 10px 65px rgba(255, 102, 0, 0.6)',
					'0 20px 65px rgba(163, 77, 255, 0.3)'
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
