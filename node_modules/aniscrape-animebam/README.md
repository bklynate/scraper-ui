# aniscrape-animebam

aniscrape-animebam is a provider for the [aniscrape](https://github.com/roflmuffin/aniscrape) node module. 

By including it you get to do awesome things with anime sites, such as retrieve anime pages, episode listings and ultimately video links. See [here](https://github.com/roflmuffin/aniscrape/blob/master/readme.md) for more details.

```js
var Aniscrape = require('aniscrape'); // Check source on GitHub for more info.
var animebam = require('aniscrape-animebam'); 

var scraper = new Aniscrape();
scraper.use(animebam)
.then(function() {
  scraper.search('Haikyuu', 'animebam').then(function (results) {
    console.log(results)
    scraper.fetchSeries(results[0]).then(function(anime) {
      console.log(anime)
      scraper.fetchVideo(anime.episodes[1]).then(function(video) {
        // Video is a list of direct video links and quality labels.
        console.log(video)
      })
    })
  })
})
```
