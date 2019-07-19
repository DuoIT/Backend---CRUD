const express = require('express');
const router = express.Router();
const AuthController = require('../app/controllers/authController');
const {validationResult} = require('express-validator');
const registerValidator = require('../app/validators/registervalidator');
const authMiddleware = require('../app/middlewares/authMiddleware')

//register
router.post('/register',registerValidator,(req, res, next)=>{
    console.log(req.boby);
    AuthController.register({req, res, next});
});

//login
router.post('/login',(req, res, next)=>{
    
    AuthController.login({req, res, next});
});

router.use(function (req, res, next){
    authMiddleware.auth({req, res, next});
})

//logout
router.post('/logout', (req, res, next)=>{
    AuthController.logout({req, res, next});
});

module.exports = router;


