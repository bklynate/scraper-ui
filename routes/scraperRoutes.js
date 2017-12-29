const Aniscrape = require('aniscrape'); // Check source on GitHub for more info.
const animebam = require('aniscrape-animebam-https');
const xray = require('x-ray')();

const scraper = new Aniscrape();

module.exports = app => {
  app.post('/api/scrapeAnime', (request, response) => {
    const { animeName } = request.body
    console.log('\nthis is animeBAM', animebam)
    scraper.use(animebam).then(() => {
      scraper.search(animeName, 'animebam').then((results) => {
        console.log('\nthis is results', results)
        scraper.fetchSeries(results[0]).then((anime) => {
          console.log('\nthis is anime', anime)
          const { url } = anime.episodes[0];
          console.log('\nthis is url', url)
          xray(url, 'iframe.embed-responsive-item@src')((error, info) => {
            console.log('\nthis is info', info);
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
