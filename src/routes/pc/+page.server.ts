import { redirect } from '@sveltejs/kit';

export const load = () => redirect(302, '/pc/printed-circuit-boards/pcb-capabilities');
