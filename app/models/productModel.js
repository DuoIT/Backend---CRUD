const Model = require('./model');

class productModel extends Model{
    constructor(){
        super();
    }
    static get tableName(){
        return 'products';
    }
};

module.exports = productModel;
