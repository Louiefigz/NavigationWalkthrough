
const express = require('express');
const app = express();
// const passport = require('passport');
// const InstagramStrategy = require('passport-instagram-token');
// const GoogleStrategy = require('passport-google-oauth20');
// Import instagram and Google OAuth apps configs
// import { instagram, google } from './config';

// Transform instagram profile because instagram and Google profile objects look different
// and we want to transform them into user objects that have the same set of attributes
// const transformInstagramProfile = (profile) => ({
//   name: profile.name,
//   avatar: profile.picture.data.url,
// });

// Transform Google profile into user object
// const transformGoogleProfile = (profile) => ({
//   name: profile.displayName,
//   avatar: profile.image.url,
// });


// var instagram ={
//   clientID:  "35666c98870840a7a72b628e2f8aa11e",
//   clientSecret: "d610b323079d4a4da94da15dcbaa11e4 ",
//   callbackURL: "http://localhost:3000/auth/instagram/callback"
// }

// Register instagram Passport strategy
// passport.use(new InstagramStrategy(instagram,
//   // Gets called when user authorizes access to their profile
//   async function(accessToken, refreshToken, profile, done){
//     // Return done callback and pass transformed user object
//     done(null, transforminstagramProfile(profile._json))
//   }
// ));

// Register Google Passport strategy
// passport.use(new GoogleStrategy(google,
//   async function(accessToken, refreshToken, profile, done) {
//     done(null, transformGoogleProfile(profile._json))
//   }
// ));

// Serialize user into the sessions
// passport.serializeUser((user, done) => done(null, user));

// Deserialize user from the sessions
// passport.deserializeUser((user, done) => done(null, user));

// Initialize http server
// const app = express();

// app.use(passport.initialize());
// app.use(passport.session());

// Set up instagram auth routes
// app.get('/auth/instagram', passport.authenticate('instagram'));

app.get('/auth/instagram/callback', function(req, res) {

  console.log(req);
  console.warn(req.body)
  res.send("AYYYYE NAHHHH")
});

// app.get('/auth/instagram/callback',
//   passport.authenticate('instagram', { failureRedirect: '/auth/instagram' }),
//   // Redirect user back to the mobile app using Linking with a custom protocol OAuthLogin
//     function(req, res){
//       console.log(req);
//       res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user))
//     }
//   );

// Set up Google auth routes
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/auth/google' }),
//   (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));



// app.set('port', 3000);



app.listen(app.get('port'), () => {console.log("running...")});
// Launch the server on the port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
