const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors')

//import connetion to data base
const { connectionDB } = require('./db-config/db-config');

//import user controller
const  UserRouter  = require('./routes/user-controller');

//Initialice exprees app and connection
const app = express();
connectionDB();


//Middlewares
app.use(cors());
app.use(express.json());

//use the controller user
app.use('/user', UserRouter);

//Get up server with expres
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log('Application stated in port: ', PORT);
})