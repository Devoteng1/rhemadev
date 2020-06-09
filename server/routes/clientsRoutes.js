const express = require('express');
const router = express.Router();


//router.route('/')

router.get('/test', (req , res) => res.json({
    msg: 'Clients works'
}))

module.exports = router;