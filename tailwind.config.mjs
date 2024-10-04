/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'background-shine': 'background-shine 2s linear infinite'
			  },
			  keyframes: {
				'background-shine': {
				  '0%': { backgroundPosition: '0 0' },
				  '100%': { backgroundPosition: '-200% 0' },
				}
			  }
		},
	},
	plugins: [],
}
