import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: { port: 3000 },
	preview: {
		allowedHosts: ['www.mmwpcb.com', 'mmwpcb.onrender.com', 'pcb-xmib.onrender.com']
	}
});
