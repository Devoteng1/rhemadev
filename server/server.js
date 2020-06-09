const express = require('express');
const colors = require('colors');

//import Routes
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientsRoutes');
const profileRoutes = require('./routes/ProfileRoutes');
const activityRoute = require('./routes/ActivityRoutes');

//Database connection 
const connectDB = require('./Config/DB')
connectDB();


const app = express();

//Routes Middleware
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/activity', activityRoute);
app.use('/api/v1/profile', profileRoutes);
app.use('/api/v1/client', clientRoutes);


app.get('/', (req , res) => res.send('Hello'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servering running on port ${PORT}`))