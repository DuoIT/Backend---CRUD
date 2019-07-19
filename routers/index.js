const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../app/middlewares/authMiddleware');
const IndexController = require('../app/controllers/indexController');

router.use((req, res, next) =>{
    AuthMiddleware.auth({ req, res, next});
});

//getHome
router.get('/home',(req, res, next)=>{
    IndexController.getHome({req, res, next});
})


module.exports = router;