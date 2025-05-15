import { json } from '@sveltejs/kit';
import { tse } from '../../../trpc/te';
import { generateQuotation } from '$lib/server/generateQuotation';

export const GET = async ({ url }) => {
	const id = url.searchParams.get('id');
	if (!id) return json({ error: 'Missing ID' }, { status: 400 });

	const buffer = await generateQuotation(id).catch(tse);

	return new Response(buffer, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': `inline; filename=receipt-${id}.pdf`
		}
	});
};
