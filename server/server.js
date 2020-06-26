const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const passport = require('passport')
const cors = require('cors')

//import Routes
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientsRoutes');
const profileRoutes = require('./routes/ProfileRoutes');
const activityRoute = require('./routes/ActivityRoutes');


dotenv.config({path:'./Config/Config.env'});

//Database connection 
const connectDB = require('./Config/DB')
connectDB();


const app = express();

// app middleware
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());
app.use(cors()) ;

//passport middleware
app.use(passport.initialize());

//passport config
require('./Config/passport')(passport); 

//Routes Middleware
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/activity', activityRoute);   
app.use('/api/v1/profile', profileRoutes);
app.use('/api/v1/client', clientRoutes); 

const PORT = process.env.PORT || 9000;  

app.listen(PORT, () => console.log(`Servering running on port ${PORT}`))