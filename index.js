const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/authRoutes');
const scraperRoutes = require('./routes/scraperRoutes');
const mongoose = require('mongoose');

const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/anify_db';
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(mongoUrl);
authRoutes(app);
scraperRoutes(app);

if (process.env.NODE_ENV === 'production') {
  // Express serves up production build assets
  app.use(express.static('client/build'));

  // This below informs Express to serve up
  // the index.html file if it doesn't recognize
  // the provided routes
  const path = require('path'); // eslint-disable-line
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('They came for us....out of the darkness..'); // eslint-disable-line
});
