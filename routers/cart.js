const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../app/middlewares/authMiddleware');
const CartController = require('../app/controllers/cartController');

router.use((req, res, next) =>{
    AuthMiddleware.auth({ req, res, next});
});

router.post('/addcart',(req, res, next)=>{
    CartController.addToCart({req, res, next});
})

module.exports = router;

