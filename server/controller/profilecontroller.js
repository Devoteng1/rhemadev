const express = require('express');
//const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//load profile
const Profile = require('../controller/profilecontroller');


//loas Users
const User = require('../controller/authController');


exports.getcurrentUsersProfile = passport.authenticate('jwt', {session: false}), (req,res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id})
      .then(profile => {
          if(!profile){
              errors.noprofile = 'There is no profile for this user';
              return res.status(404).json(errors);
          }
          res.json(profile)
      })
      .catch(err => res.status(404).json(err));
}


