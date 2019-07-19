const CartService = require('../services/cartService');

class CartController{
    constructor(){
        this.cartService = CartService;
    }
//addToCart
    async addToCart({req, res, next}){
        const {user, body} = req;
        console.log(user, body);
        
        const resultCart = await this.cartService.addToCart(user, body);
        return res.json(resultCart);
    }

}


module.exports = new CartController();