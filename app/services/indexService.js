const CateModel = require('../models/cateModel');
const ProductModel = require('../models/productModel');

class IndexService{
    constructor(){
        this.cateModel = CateModel;
        this.productModel = ProductModel;
    }
//getHome
    async getHome(){
        const product = await this.productModel.query();
        console.log(product);
        if(!product){
            return{
                message:'no_product!',
                data: null
            }
        }
        return{
            message:'get_success!',
            data:product
        }
    }

}


module.exports = new IndexService();