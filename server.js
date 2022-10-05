const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors')

//import connetion to data base
const { connectionDB } = require('./DB/db-config');

//import user controller
const  UserRouter  = require('./routes/user-controller');
const UserLogin = require('./routes/user-auth')

//import send controller
const SendRouter = require('./routes/send-controller');

//Initialice exprees app and connection
const app = express();
connectionDB();


//Middlewares
app.use(cors());
app.use(express.json());

//use the controller user
app.use('/user', UserRouter);
app.use('/auth-user', UserLogin);

// Use the send controller
app.use('/send', SendRouter );

//Get up server with expres
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log('Application stated in port: ', PORT);
})