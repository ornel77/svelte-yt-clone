import { getHomepage } from '$lib/services.js';

export const load = async () => {
	console.log('home page ran');
	return {
		contents: getHomepage()
	};
};
