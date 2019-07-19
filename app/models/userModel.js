const Model = require('./model');

class userModel extends Model{
    constructor(){
        super();
    }
    static get tableName(){
        return 'users';
    }
}

module.exports = userModel;