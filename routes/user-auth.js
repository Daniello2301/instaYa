const { validationResult, check } = require("express-validator");
const { Router } = require('express');
const User = require('../model/User');
const bcrypt = require('bcryptjs')
const { jwtGenerator } = require('../helpers/JWT')

const router = Router()

// Login function
router.post('/', 
[
    check('email', 'Email invalid format').isEmail(),
    check('email', 'Email is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
],
async function(req, res){

    try {

        //Validation input 
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({ message: errors.array() })
        }

        //find user using email and validate email exists
        const userFinded = await User.findOne({ email: req.body.email });
        if(!userFinded){
            return res.status(404).json({ message: "email or password incorrect" })
        }
        

        // compare passwords using bcrypt
        /* const passwordFinden = await User.findOne({ password: req.body.password }) */
        const passwordFinden = bcrypt.compareSync(req.body.password, userFinded.password);
        if(!passwordFinden){
            return res.status(404).json({ message: "email or password incorrect" })
        }
        /* const isEquals = bcrypt.compareSync(req.body.password, userFinded.password);
        if(!isEquals){
            return res.status(400).json({ message: "email or password incorrect" })
        } */

        //Get token
        const token = jwtGenerator(userFinded);

        res.json({ 
            _id: userFinded._id, 
            identification: userFinded.identification,
            name: userFinded.name, 
            email: userFinded.email,
            accessToken: token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal sever error..."})
    }

})



module.exports = router;
