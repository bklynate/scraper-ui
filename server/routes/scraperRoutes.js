const Aniscrape = require('aniscrape'); // Check source on GitHub for more info.
const animebam = require('aniscrape-animebam-https');
const xray = require('x-ray')();

const scraper = new Aniscrape();

module.exports = app => {
  app.post('/api/scrapeAnime', (request, response) => {
    const { animeName } = request.body;
    scraper.use(animebam).then(() => {
      scraper.search(animeName, 'animebam').then(results => {
        if (results.length < 1) return;
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
            xray(
              url,
              'iframe.embed-responsive-item@src'
            )((error, embeddedUrl) => {
              resolve(embeddedUrl);
            });
          })
      );
      Promise.all(embeddedUrls).then(resolvedEmbeddedUrls => {
        response.send(resolvedEmbeddedUrls);
      });
    });
  });
};
