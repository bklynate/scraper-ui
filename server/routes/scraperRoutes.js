import Aniscrape from 'aniscrape';
import animebam from 'aniscrape-animebam-https';
import xr from 'x-ray';

const xray = xr();
const scraper = new Aniscrape();

export default app => {
	app.post('/api/searchAnime', (request, response) => {
		const { animeName } = request.body;
		scraper.use(animebam).then(() => {
			scraper.search(animeName, 'animebam').then(results => {
        if (results.length === 0) return response.send([]);
				return response.send(results); // eslint-disable-line
			});
		});
	});

	app.post('/api/scrapeAnimeEpisode', (request, response) => {
		const { animeEpisode = {} } = request.body;

		scraper.fetchSeries(animeEpisode).then(animeData => {
			const { episodes } = animeData;

			const sortedEpisodeUrls = episodes
				.sort((a, b) => b.number - a.number)
				.reduce((resolved, episode) => {
					const { url } = episode;
					resolved.push(url);
					return resolved;
				}, []);

			const embeddedUrls = sortedEpisodeUrls.map(
				url =>
					new Promise(resolve => {
						xray(url, 'iframe.embed-responsive-item@src')((error, embeddedUrl) => {
							resolve(embeddedUrl);
						});
					}),
			);

			Promise.all(embeddedUrls).then(resolvedEmbeddedUrls => {
				const filteredEmbeddedUrls = resolvedEmbeddedUrls.filter(url => url !== undefined);
				response.send(filteredEmbeddedUrls);
			});
		});
	});

	app.get('/api/popularAnime', async (_, response) => {
		const initialPopularAnimeList = await xray(
			'https://www.animebam.net/', // page we are hitting
			'div.cblock:first-of-type ul.popanime li', // this is the html selector
			[
				// returns an array of objects
				{
					seriesName: 'li div.rightpop a', // these are html selectors
					seriesUrl: 'li div.rightpop a@href',
					imageSrc: 'li div.img img@src',
					latestEpisode: 'li div.rightpop div a',
					updated: 'li div.rightpop span',
				},
			],
		);

		const completePopularAnimeList = await initialPopularAnimeList.reduce((resolved, item) => {
			item.seriesUrl = item.seriesUrl.replace('https://www.', 'https://'); // eslint-disable-line
			item.isSpecial = false; // eslint-disable-line
			item.episodes = []; // eslint-disable-line
			item.searchProvider = 'animebam'; // eslint-disable-line
			resolved.push(item);
			return resolved;
		}, []);

		response.send(completePopularAnimeList);
	});
};
