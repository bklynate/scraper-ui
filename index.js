import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import mongoose from 'mongoose';

import authRoutes from './routes/authRoutes';
import scraperRoutes from './routes/scraperRoutes';
import keys from './config/keys';

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/anify_db';

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

app.listen(PORT, () => console.log(`They came for us on port:${PORT}`)); // eslint-disable-line
