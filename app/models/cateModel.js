const Model = require('./model');

class cateModel extends Model{
    constructor(){
        super();
    }
    static get tableName(){
        return 'cates';
    }
};

module.exports = cateModel;