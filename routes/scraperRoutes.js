const Aniscrape = require('aniscrape'); // Check source on GitHub for more info.
const animebam = require('aniscrape-animebam');
const xray = require('x-ray')();
const scraper = new Aniscrape();

module.exports = app => {
  app.get('/scrapeAnime', function(req, res) {
    let animeTitle = 'boku no hero academia';
    // console.log(animeTitle);
    scraper.use(animebam).then(function() {
      scraper.search(animeTitle, 'animebam').then(function(results) {
        // console.log('RESULTS:', results)
        scraper.fetchSeries(results[0]).then(function(anime) {
          // console.log('ANIME:', anime.episodes[0].url)
          let url = anime.episodes[0].url;
          console.log(url);
          // xray(url, 'iframe.embed-responsive-item@src')(function(error, info) {
          //   res.render('video_chat', {
          //     animeTitle: req.body.animeName,
          //     animeUrl: info,
          //   });
          // });
        });
      });
    });
  });
};
