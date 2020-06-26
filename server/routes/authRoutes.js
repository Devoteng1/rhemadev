const express = require('express');
const router = express.Router();
const passport = require('passport');
const {  register , login , private} = require('../controller/authController');



router.post('/register', register )
router.post('/login', login)
router.get('/current',passport.authenticate('jwt', {session: false}), (req ,res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    })
})
 
module.exports = router;     