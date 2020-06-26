const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Activity = require('../models/Activity');
const Profile  = require('../models/Profile')

const validateActivityInput = require('../validation/activity');
const activity = require('../validation/activity');
router.get('/test', (req , res) => res.json({
    msg: 'Activity works'
}))


router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {

      Activity.find()
        .sort({date: -1})
        .then(activities => res.json(activities))
        .catch(err => res.status(404).json({noActivitys: `No Activities found `}));
})

router.get('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {

    Activity.findById(req.params.id)
      .then(activity => res.json(activity))
      .catch(err => res.status(404).json({noActivity: `No Activity found with that ID ${req.params.id}`}));
})

router.delete('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {

    Profile.findOne({ user: req.user.id})
      .then(Profile => { 
          Activity.findById(req.params.id)
             .then(activity => {
                 if(activity.user.toString() !== req.user.id){
                     return res.status(401).json({ notauthorized: 'user not authorised'})
                 }

          activity.remove().then(() => res.json({ success: true}))
            .catch(err => res.json({activitynotfound: 'No activity found'}))
             })
      })
      
})


router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {

      const {errors , isValid} = validateActivityInput(req.body);
      // check for validation
      if(!isValid){
         return res.status(400).json(errors);
      }
      const { date,clientName, 
              jobReference, starttime, 
              endtime, billableHours, 
              rate, clientCharge, 
              jobStatus, contactName,
              telephone, email,
              consultantName, clientRemarks} = req.body
      const newActivity = new Activity({
          clientName,
          jobReference,
          starttime,
          endtime,
          billableHours,
          rate,clientCharge,
          jobStatus,
          contactName,
          telephone,
          email,
          consultantName,
          clientRemarks,
          user: req.user.id
      })

      newActivity.save().then(activity => res.json(activity));
})

module.exports = router;