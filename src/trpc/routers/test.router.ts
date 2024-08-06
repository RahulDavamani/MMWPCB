import { procedure, router } from '../server';

export const test = router({
	test: procedure.query(async () => {
		console.log('test');
		return { data: 'test' };
	})
});
