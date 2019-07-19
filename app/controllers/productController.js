const ProductService = require('../services/productService');

class ProductController{
    constructor(){
        this.productService = ProductService;
    }
//cate
    async cate({req, res, next}){
        const {body} = req;
        
        const resultCate = await this.productService.cate(body);
        console.log(resultCate);
        return res.json(resultCate); 
    }
//updateCate
    async updateCate({req, res, next}){
        const {body} = req;

        const resultupdateCate = await this.productService.updateCate(body);
        console.log(resultupdateCate);
        return res.json(resultupdateCate);
    }
//deleteCate
    async deleteCate({req, res, next}){
        const {id} = req.params;
        //console.log(id);
        const resultdeleteCate = await this.productService.deleteCate(id);
        console.log(resultdeleteCate);
        return res. json(resultdeleteCate);
    }
//product
    async product({req, res, next}){
        const {body} = req;
        const resultProduct = await this.productService.product(body);
        console.log(resultProduct);
        return res.json(resultProduct);
    }
//updateProduct
    async updateProduct({req, res, next}){
        const {body} = req;
        const resultupdateProduct = await this.productService.updateProduct(body);
        console.log(resultupdateProduct);
        return res.json(resultupdateProduct);
    }
//deleteProduct
    async deleteProduct({req, res, next}){
        const {id} = req.params;
        const resultdeleteProduct = await this.productService.deleteProduct(id);
        console.log(resultdeleteProduct);
        return res.json(resultdeleteProduct);
    }
//getdetaiProduct
async getDetailProduct({req, res, next}){
    const {id} = req.params;
    const result = await this.productService.getDetaiProduct(id);
    console.log(result);
    return res.json(result);
    }
}

module.exports = new ProductController();

