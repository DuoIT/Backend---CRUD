const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userController');
const authMiddleware = require('../app/middlewares/authMiddleware');

router.use(function(req, res, next){
    authMiddleware.auth({req, res, next});
})

router.get('/profile', (req, res, next)=>{
    userController.profile({req, res, next});
})

router.put('/updateProfile', (req, res, next)=>{
    userController.updateProfile({req, res, next});
})

module.exports = router;