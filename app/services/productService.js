const CateModel = require('../models/cateModel');
const ProductModel = require('../models/productModel');

class ProductService {
    constructor() {
        this.cateModel = CateModel;
        this.productModel = ProductModel;
    }
//cate
    async cate(body) {
        if(!body.name){
            return{
                message: 'name_is_require',
                data: null
            }
        }
        const cate = await this.cateModel.query().where('name', body.name).first();
        if(cate){
            return{
                message: 'name_is_exist!',
                data: null
            }
        }
        const dataCate = {
            name: body.name
        }
        const dataInserted = await this.cateModel.query().insert(dataCate);
        return {
            message: 'add_cate_success',
            data:dataCate.name
        }
       
    }
//updateCate
    async updateCate(body){
        const id = body.id;
        const newName = body.name;
        if(!newName || !id){
            return{
                message:'newName_or_id_is_require!',
                data: null
            }
        }
        const newCate = await this.cateModel.query().where('id', id).first().update({
            name: newName,
            updated_at:new Date()
        });
        console.log(newCate);
        
        if(!newCate){
            return{
                message: 'update_cate_faill',
                data: null
            }
        }
        return{
            message:'update_cate_success!!',
            data: null
        }
    }
//deleteCate
    async deleteCate(id){
    console.log(id);
    if(!id){
        return{
            message:'no_cate!',
            data:null
        }
    }
    const dataCate = await this.cateModel.query().where('id', id).first().delete();
    if(!dataCate){
        return{
            message:'id_no_exits',
            data: null
        }
    }
        return{
            message:'delete_cate_success!!',
            data: null
        }
    }
//product
    async product(body){
        if(!body.name || !body.img || !body.cate || !body.des ||!body.price)
        {
            return{
                message: 'name_or_img_or_cate_or_des_or_price_is_require!',
                data: null
            }
        }
        const product = await this.productModel.query().where('name', body.name).first();
        if(product){
            return{
                message: 'product_is_exits',
                data: null
            }
        }
        const dataProduct = {
            name:      body.name,
            img:       body.img,
            cate:      body.cate,
            des:       body.des,
            price:     body.price
        }
        await this.productModel.query().insert(dataProduct);
        return{
            message:'add_product_success',
            data: null,
            success: true
        }
    }

//updateProduct
    async updateProduct(body){
        const id = body.id;
        const newName = body.name;
        const newImg = body.img;
        const newCate = body.cate;
        const newDes = body.des;
        const newPrice = body.price;

        if(!id || !newName || !newImg ||!newCate ||!newDes ||!newPrice){
            return{
                message:'New_productid_or_name_or_img_or_cate_or_des_or_price_is_require!',
                data: null
            }
        }
        const dataNewProduct = await this.productModel.query().where('id', id).first().update({

            name: newName,
            img: newImg,
            cate: newCate,
            des: newDes,
            price:newPrice,
            updated_at:new Date()
        })

        if(!dataNewProduct)
        {
            return{
                message: 'update_wrong',
                data: null,
                success: false
            }
        }
        return{
            message:'update_success!',
            data: null,
            success: true
        }

    }
//deleteProduct
    async deleteProduct(id){
        console.log(id);
        if(!id){
            return{
                message:'no_product!',
                data:null
            }
        }
        const dataProduct = await this.productModel.query().where('id', id).first().delete();
        if(!dataProduct){
            return{
                message:'no_exits!',
                data:null
            }
        }
            return{
                message:'delete_product_success!!',
                data: null
            }
        }
//getdetailProduct
    async getDetaiProduct(id){
        console.log(id);
        if(!id){
            return{
                message:'product_wrong!',
                data: null
            }
        }
        const detailProduct = await this.productModel.query().where('id', id).first();
        console.log(detailProduct);
        if(!detailProduct){
            return{
                message:'no_product',
                data: null
            }
        }
        return{
            message: 'get_detail_product_success!!',
            data: detailProduct
        }
    }

}


module.exports = new ProductService();