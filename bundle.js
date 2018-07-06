/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Keys.js
if (process.env.NODE_ENV === "production") {
  // if the environment is production, load prod keys
  module.exports = __webpack_require__(12);
} else {
  // if the environment is development, load dev keys
  module.exports = __webpack_require__(13);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(5);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieSession = __webpack_require__(6);

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _passport = __webpack_require__(0);

var _passport2 = _interopRequireDefault(_passport);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _authRoutes = __webpack_require__(7);

var _authRoutes2 = _interopRequireDefault(_authRoutes);

var _scraperRoutes = __webpack_require__(8);

var _scraperRoutes2 = _interopRequireDefault(_scraperRoutes);

var _keys = __webpack_require__(2);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 5000;
var mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/anify_db';

__webpack_require__(14);
__webpack_require__(15);

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use((0, _cookieSession2.default)({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [_keys2.default.cookieKey]
}));
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());
_mongoose2.default.connect(mongoUrl);
(0, _authRoutes2.default)(app);
(0, _scraperRoutes2.default)(app);

if (process.env.NODE_ENV === 'production') {
  // Express serves up production build assets
  app.use(_express2.default.static('client/build'));

  // This below informs Express to serve up
  // the index.html file if it doesn't recognize
  // the provided routes
  var path = __webpack_require__(17); // eslint-disable-line
  app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function () {
  console.log('They came for us....out of the darkness..'); // eslint-disable-line
});
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cookie-session");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var passport = __webpack_require__(0);

module.exports = function (app) {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google'), function (request, response) {
    response.redirect('/searchAnime');
  });

  app.get('/api/logout', function (request, response) {
    request.logout();
    response.redirect('/');
  });

  app.get('/api/current_user', function (request, response) {
    response.send(request.user);
  });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Aniscrape = __webpack_require__(9); // Check source on GitHub for more info.
var animebam = __webpack_require__(10);
var xray = __webpack_require__(11)();

var scraper = new Aniscrape();

module.exports = function (app) {
  app.post('/api/scrapeAnime', function (request, response) {
    var animeName = request.body.animeName;

    scraper.use(animebam).then(function () {
      scraper.search(animeName, 'animebam').then(function (results) {
        if (results.length < 1) return;
        return response.send(results); // eslint-disable-line
      });
    });
  });

  app.post('/api/scrapeAnimeEpisode', function (request, response) {
    var _request$body$animeEp = request.body.animeEpisode,
        animeEpisode = _request$body$animeEp === undefined ? {} : _request$body$animeEp;

    scraper.fetchSeries(animeEpisode).then(function (animeData) {
      var episodes = animeData.episodes;

      var sortedEpisodeUrls = episodes.sort(function (a, b) {
        return b.number - a.number;
      }).reduce(function (resolved, episode) {
        var url = episode.url;

        resolved.push(url);
        return resolved;
      }, []);
      var embeddedUrls = sortedEpisodeUrls.map(function (url) {
        return new Promise(function (resolve) {
          xray(url, 'iframe.embed-responsive-item@src')(function (error, embeddedUrl) {
            resolve(embeddedUrl);
          });
        });
      });
      Promise.all(embeddedUrls).then(function (resolvedEmbeddedUrls) {
        response.send(resolvedEmbeddedUrls);
      });
    });
  });
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("aniscrape");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("aniscrape-animebam-https");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("x-ray");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Prod.js
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  cookieKey: process.env.COOKIE_KEY,
  mongoURI: process.env.MONGODB_URI
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Dev.js
module.exports = {
  googleClientID: "913553730342-02p5ee75ilgfjjg2jatsjhjlton8ffci.apps.googleusercontent.com",
  googleClientSecret: "wKGCmDWM6Z38fp_u64fzJW1h",
  cookieKey: "AklmsdFJLMC123ldkdmfq22o3oFEFop7asm4vo7FEmefi6omak5ls54dqwLKMDPvvaasd"
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;


var userSchema = new Schema({
  googleID: String
});

mongoose.model("users", userSchema);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var passport = __webpack_require__(0);
var GoogleStrategy = __webpack_require__(16).Strategy;
var clientKeys = __webpack_require__(2);
var mongoose = __webpack_require__(1);
var User = mongoose.model("users");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (userID, done) {
  User.findById(userID).then(function (foundUser) {
    done(null, foundUser);
  });
});

passport.use(new GoogleStrategy({
  clientID: clientKeys.googleClientID,
  clientSecret: clientKeys.googleClientSecret,
  callbackURL: "/auth/google/callback",
  proxy: true
}, function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accessToken, refreshToken, profile, done) {
    var existingUser, newUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return User.findOne({ googleID: profile.id });

          case 2:
            existingUser = _context.sent;

            if (!existingUser) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", done(null, existingUser));

          case 5:
            _context.next = 7;
            return new User({ googleID: profile.id }).save();

          case 7:
            newUser = _context.sent;

            done(null, newUser);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}()));

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth20");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);