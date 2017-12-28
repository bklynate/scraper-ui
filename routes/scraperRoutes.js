const Aniscrape = require('aniscrape'); // Check source on GitHub for more info.
const animebam = require('aniscrape-animebam');
const xray = require('x-ray')();

const scraper = new Aniscrape();

module.exports = app => {
  app.post('/api/scrapeAnime', (request, response) => {
    const { animeName } = request.body
    scraper.use(animebam).then(() => {
      scraper.search(animeName, 'animebam').then((results) => {
        scraper.fetchSeries(results[0]).then((anime) => {
          const { url } = anime.episodes[0];
          xray(url, 'iframe.embed-responsive-item@src')((error, info) => {
            const payload = {
              animeName,
              info
            }
            response.send(payload)
          });
        });
      });
    });
  });
};
