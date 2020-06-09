const express = require('express');
const router = express.Router();


//router.route('/')

router.get('/test', (req , res) => res.json({
    msg: 'Profile works'
}))

module.exports = router;