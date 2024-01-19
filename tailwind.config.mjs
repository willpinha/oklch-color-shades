import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				"shades-limit": "1120px"
			}
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["pastel"]
	}
}
