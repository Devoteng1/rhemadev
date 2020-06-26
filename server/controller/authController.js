const User = require('../models/User');
const gravator = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport')

// Load input validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

//register User
exports.register = ((req , res) => {
    const { errors, isValid } = validateRegisterInput(req.body)
    const {name , email, password } = req.body;

    //Check Validation
    if(!isValid){
        return res.status(400).json(errors);
    }
     User.findOne({email}).then(user => {
           if(user){
               return res.status(400).json({email: `Email already exist`});
           }else{
               const avator = gravator.url(email,{
                   s: '200',//Size
                   r: 'pg', // Rating
                   d: 'mm',// Default
               }) 
               const newUser = new User({
                name,
                email, 
                avator,  
                password 
               });

               bcrypt.genSalt(10, (err, salt) => {
                   bcrypt.hash(newUser.password, salt, (err , hash) => {
                       if(err) throw err;
                       newUser.password = hash;
                       newUser.save()
                         .then(user => res.json(user))
                         .catch(err => console.log(err))
                   })
               })
               
           }
       })
})

exports.login = ((req, res )=> {

    const { errors, isValid } = validateLoginInput(req.body)
    //Check Validation
    if(!isValid){
        return res.status(400).json(errors);
    }
     
    const { email,password } = req.body

    User.findOne({ email }).then(user => {   
          //CheckUser  
          if(!user){
              errors.email  = 'User not found'
              return res.status(404).json(errors)
          }
          //check password
           bcrypt.compare(password,user.password).then(isMatch => { 
            if(isMatch){
                //res.json({ msg: 'Success'})   
                const payload = {id: user.id , name : user.name , avator: user.avator } //create JWT Payload
                jwt.sign(
                    payload, 
                    process.env.JWT_SECRET, 
                    {expiresIn : 3600},
                     (err,token) => {
                      res.json({
                          success: true,
                          token: 'Bearer ' + token
                      })
                })
            }else{
                errors.password = 'Password incorrect';
                return res.status(400).json(errors)  
           }
        })
    })        
 })


 exports.private = passport.authenticate('jwt', {session: false}), (req ,res) => {
    res.json({
        msg: 'success'
    })
}