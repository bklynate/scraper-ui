/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const { PORT: port = 5000 } = process.env;

function generateURL ({ animeName }) {
	if (animeName) return '/api/searchAnime';

	throw new Error('Provide a valid parameter');
}

export async function find (args) {
	const { animeName } = args || {};

	const url = generateURL({ animeName });

	const { data } = await axios({
		url,
		method: 'post',
		proxy: { port },
		data: { animeName },
	});
	return data;
}
