const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../app/middlewares/authMiddleware');
const ProductController = require('../app/controllers/productController');


router.use((req, res, next) =>{
    AuthMiddleware.auth({ req, res, next});
});
//cate
router.post('/cate',(req, res, next)=>{
    ProductController.cate({req, res, next});
});


//updateCate
router.put('/updateCate', (req, res, next)=>{
    ProductController.updateCate({req, res, next});
})

//deleteCate
router.delete('/deleteCate/:id',(req, res, next)=>{
    ProductController.deleteCate({req, res, next});
})

//product
router.post('/addProduct', (req, res, next)=>{
    ProductController.product({req, res, next});
})

//updateProduct
router.put('/updateProduct', (req, res, next)=>{
    ProductController.updateProduct({req, res, next});
})

//deleteProduct
router.delete('/deleteProduct/:id', (req, res, next)=>{
    ProductController.deleteProduct({req, res, next});
})

//getdetail
router.get('/detail/:id',(req, res, next)=>{
    ProductController.getDetailProduct({req, res, next});
})


module.exports = router;