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
				// velenova: {
				// 	primary: '#008734',
				// 	secondary: '#FE8A01',
				// 	accent: '#4500F0',
				// 	neutral: '#3d4451',
				// 	'base-100': '#ffffff'
				// }
				velenova: {
					primary: '#162780',
					// orange-secondary: '#F77F00',
					// gold-secondary: '#DCB13C',
					secondary: '#DCB13C',
					accent: '#57BDA2',
					neutral: '#3d4451',
					'base-100': '#ffffff'
				}
			}
		]
	}
};
