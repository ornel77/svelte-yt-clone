import { getHomepage } from '$lib/services';
import { fail, redirect } from '@sveltejs/kit';

export const load = async () => {
	console.log('home page ran');
	return {
		contents: getHomepage()
	};
};

// form action
export const actions = {
	// we give the name search to our icon
	// we want to get the value of what we type
	search: async ({ request }: { request: Request }) => {
		const data = await request.formData();
		const query = data.get('q');
		if (!query) {
			return fail(400, {
				error: 'you have an empty search'
			});
		}
		throw redirect(301, `/result?q=${query}`);
	}
};
