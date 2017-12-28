const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const clientKeys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((userID, done) => {
  User.findById(userID).then(foundUser => {
    done(null, foundUser);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: clientKeys.googleClientID,
      clientSecret: clientKeys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const newUser = await new User({ googleID: profile.id }).save();
      done(null, newUser);
    }
  )
);
