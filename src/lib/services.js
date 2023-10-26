import { X_RapidAPI_Key } from '$env/static/private';
import { error } from '@sveltejs/kit';
import Axios from 'axios';

const axios = Axios.create({
	baseURL: 'youtube138.p.rapidapi.com',
	headers: {
		'X-RapidAPI-Key': X_RapidAPI_Key,
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	},
	params: {
		hl: 'en',
		gl: 'US'
	}
});

// Récuperer les vidéos pour la page d'accueil
export const getHomepage = async () => {
	try {
		const result = await axios('home/');
		return result.data.contents;
	} catch (e) {
		throw error(500, {
			message: 'an error occured'
		});
	}
};
