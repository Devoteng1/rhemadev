const express = require('express');
const router = express.Router();
const passport = require('passport');
const Profile = require('../models/Profile');
const User = require('../models/User')

const { getcurrentUsersProfile} = require('../controller/profilecontroller')

//load validations
const validateProfileInput = require('../validation/profile');
const validateExperienceInput = require('../validation/experience');
const validateEducationInput = require('../validation/education');

router.get('/',passport.authenticate('jwt', {session: false}), (req,res) => {
    const errors = {};
    
    Profile.findOne({ user: req.user.id})
      .populate('user', ['name', 'avator'])
      .then(profile => {
          if(!profile){
              errors.noprofile = 'There is no profile for this user';
              return res.status(404).json(errors);
          }
          res.json(profile)
      })
      .catch(err => res.status(404).json(err));
});

router.get('/handle/:handle',passport.authenticate('jwt', {session: false}), (req , res) => {
        const errors = {} 
        console.log('yes',req.params.handle)
        Profile.findOne({ handle : req.params.handle })
            .populate('user' , ['name' , 'avatar'])
            .then(profile => {
               if(!profile){
                 errors.noprofile = 'There is no profile for this user';
                 res.status(404).json(errors)
                  }
               res.json(profile);
              })
              .catch(err => res.status(404).json(err))
           });

router.get('/user/:user_id', passport.authenticate('jwt', {session: false}), 
           (req , res) => {
           const errors = {}

           Profile.findOne({user : req.params.user_id})
              .populate('user' , ['name' , 'avatar'])
              .then(profile => {
                  if(!profile){
                      errors.nonprofile = 'There is no profile for this user';
                      res.status(404).json(errors)
                  }
               res.json(profile);
              })
              .catch(err => res.status(404).json({profile : 'There is no profile for this user'}))
           })

router.get('/all', passport.authenticate('jwt', {session: false}),(req , res) => {
         const errors = {}

         Profile.find()
           .populate('user', ['name', 'avatar'])
           .then(profiles => {
               if(!profiles){
                   errors.noprofile = 'There are no profiles';
                   return res.status(404).json(errors);
               }

               res.json(profiles)
        }).catch(err => res.status(404).json({ profile: 'There are no profiles'}))
})




router.post(
    '/', 
    passport.authenticate('jwt', { session:false}), 
    (req , res) => {
    const { errors , isValid } = validateProfileInput(req.body);

    // check validation
    if(!isValid){
        return res.status(400).json(errors)     
    }
    // Get field
    const profileFields = {};
    profileFields.user = req.user.id;
    if(req.body.handle) profileFields.handle = req.body.handle; 
    if(req.body.supervisor) profileFields.supervisor = req.body.supervisor; 
    if(req.body.specialization) profileFields.specialization = req.body.specialization; 
    if(req.body.department) profileFields.department = req.body.department; 
    if(req.body.telephone) profileFields.telephone = req.body.telephone;
    if(req.body.location) profileFields.location = req.body.location; 
    if(req.body.status) profileFields.status = req.body.status; 
    if(req.body.githubusername) profileFields.githubusername = req.body.githubusername; 
    if(req.body.location) profileFields.location = req.body.location; 
    if(req.body.residentialAddress) profileFields.residentialAddress = req.body.residentialAddress; 

    //Skills - Split into array
    if(typeof req.body.skills !== 'undefined'){
        profileFields.skills = req.body.skills.split(',');
    }

    // Social 
    profileFields.social = {}
    if(req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if(req.body.twitter) profileFields.social.twitter = req.body.twitter; 
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook; 
    if(req.body.linklin) profileFields.social.linklin = req.body.linklin; 
    if(req.body.instagram) profileFields.social.instagram = req.body.instagram;  

    Profile.findOne({user : req.user.id}).then(profile => {
        if(profile){
            Profile.findOneAndUpdate(
                {user : req.user.id},
                {$set: profileFields},
                {new : true},
            ).then(profile => res.json(profile))
      }else{
          // Create


          //check if handle exists
          Profile.findOne({ handle: profileFields.handle}).then(profile => {
              if(profile){
                  errors.handle = 'That handle already exists';
                  res.status(400).json(errors)
              }
          //Save Profle
          new Profile(profileFields).save().then(profile => res.json(profile))
          })
      }
    })
   
})


router.post('/experience', passport.authenticate('jwt', {session : false}), (req , res) => {
    const { errors , isValid } = validateExperienceInput(req.body);

    // check validation
    if(!isValid){
        return res.status(400).json(errors)     
    }
    
    
    
         const { title, company , location , from , to , current , description} = req.body
          

          Profile.findOne({ user : req.user.id })
            .then(profile => {
                const newExp = {
                    title,
                    company,
                    location,
                    from,
                    to,
                    current,
                    description
                }

                //Add to Exp array
                profile.experience.unshift(newExp);

                profile.save().then(profile => res.json(profile));
            })
})



router.post('/education', passport.authenticate('jwt', {session : false}), (req , res) => {
    const { errors , isValid } = validateEducationInput(req.body);

    // check validation
    if(!isValid){
        return res.status(400).json(errors)       
    }
    
    const { school, degree, fieldOfStudy, from ,current, to, description} = req.body
          
    Profile.findOne({ user : req.user.id })
            .then(profile => {
                const newEdu = {
                    school,
                    degree,
                    fieldOfStudy,
                    from,
                    to,
                    current,
                    description
                }

                //Add to Exp array
                profile.education.unshift(newEdu);

                profile.save().then(profile => res.json(profile));
            })
})


router.delete('/experience/:exp_id', passport.authenticate('jwt', {session : false}), (req , res) => {
     //Get remove index
     Profile.findOne({ user : req.user.id})
       .then(profile => {
        const removeIndex = profile.experience
        .map(item => item.id)
          .indexOf(req.params.exp_id);
   
        //Splice out of array
        profile.experience.splice(removeIndex , 1);
   
        //save
        profile.save().then(profile = res.json(profile))
       }).catch(err => res.status(404).json(err))
     
})


router.delete('/education/:edu_id', passport.authenticate('jwt', {session : false}), (req , res) => {
    //Get remove index
    Profile.findOne({ user : req.user.id})
      .then(profile => {
       const removeIndex = profile.education
       .map(item => item.id)
         .indexOf(req.params.edu_id);
  
       //Splice out of array
       profile.education.splice(removeIndex , 1);
  
       //save
       profile.save().then(profile = res.json(profile))
      }).catch(err => res.status(404).json(err))
    
})


router.delete('/', passport.authenticate('jwt', {session : false}), (req , res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
        User.findByIdAndRemove({_id: req.user.id}).then(() => 
            res.json({ success : true})
        );
    })
    
})

module.exports = router;  
