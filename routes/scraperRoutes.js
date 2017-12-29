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
        if (results.length > 1) {
          const animeList = results.map(result => (result))
          response.send(animeList)
        }
      });
    });
  });
};
