 const JwtStrategy = require('passport-jwt').Strategy;
 const ExtractJwt = require('passport-jwt').ExtractJwt;
 const mongoose = require('mongoose');
 const User = mongoose.model('users');
 const dotenv = require('dotenv')

 dotenv.config({path:'Config/Config.env'});

//console.log(process.env.JWT_SECRET)
 const opts = {};
 opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
 opts.secretOrKey = process.env.JWT_SECRET
 



 module.exports = passport => {
     passport.use(
         new JwtStrategy(opts, (jwt_payload, done) => {
            console.log(jwt_payload) 
            User.findById(jwt_payload.id) 
              .then(user => {
                  if(user){
                      return done(null, user);
                  }
                      return done(null, false);
              })
              .catch(err => console.log(err))
         })
     )
 }
