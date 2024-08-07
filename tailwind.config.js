import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				velenova: {
					primary: '#008734',
					secondary: '#FE8A01',
					accent: '#4500F0',
					neutral: '#3d4451',
					'base-100': '#ffffff'
				}
			}
		]
	}
};
