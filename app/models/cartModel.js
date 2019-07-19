const Model = require('./model');

class cartModel extends Model{
    constructor(){
        super()
    }
    static get tableName(){
        return 'carts';
    }
};

module.exports = cartModel;