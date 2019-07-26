const CartModel = require('../models/cartModel');
const CateModel = require('../models/cateModel');
const ProductModel = require('../models/productModel');

class CartService {
    constructor() {
        this.cartModel = CartModel;
        this.productModel = ProductModel;
        this.cateModel = CateModel;
    }
//addtocart
    async addToCart(user, body) {
        const productid = body.id;
        const userid = user.id;
        const qty = parseInt(body.qty);
        
        if(!productid ||!qty){
            return{
                message: 'require_not_null!!',
                data: null
            }
        }
        const cart = await this.cartModel.query().where({ 'userid': userid, 'productid': productid }).first();
        if (cart)
         {
            const olQty = parseInt(cart.qty);
            let newQty = olQty + qty;
            const newCart = await this.cartModel.query().where({ 'userid': user.id, 'productid': body.id }).first().update({
                qty: newQty
              // qty:qty
            });
            if(!newCart){
                return{
                    message:'not_change_cart!',
                    data: null
                }
            }
            return{
                message:'Change_card_success!!',
                data: null
            }
        }
        else {
            const product = this.productModel.query().where('id', productid).first();
            if(!product) {
                return {
                    message: 'product_wrong!',
                    data: null
                }
            }
            const name = product.name;
            const img = product.img;
            const cate = product.cate;
            const des = product.des;
            const price = product.price;
            const dataCart = {
                userid: user.id,
                productid: body.id,
                name, qty, img, cate, des, price
            }
            const dataCartInsert = await this.cartModel.query().insert(dataCart);
            if (!dataCartInsert) {
                return {
                    message: 'wrong!',
                    data: null
                }
            }
            return {
                message: 'add_to_cart_success!',
                data: null
            }
        }
    }

}


module.exports = new CartService();