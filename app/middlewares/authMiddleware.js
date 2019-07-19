const jwt = require('json-web-token');
const TokenModel = require('../models/tokenModel');

class AuthMiddleware{
    constructor(){
        this.tokenModel = TokenModel;
    }

    async auth({req, res, next}){

        const { headers } = req;
        
        const token = headers.authorization;
        if(!token)
        {
            return res.json({
                message: 'no_token',
                data: null
            });
        }

        const tokenLocal = await this.tokenModel.query().where('token',token).first();
        // console.log(tokenLocal);
        
        if(!tokenLocal){
            return res.json({
                message: 'token_is_wrong!',
                data: null
            });
        }

        const dataToken = jwt.decode(Env.APP_KEY, tokenLocal.token, function(err, result){
            if(err)
            {
                return res.json({
                    message: 'decode_is_wrong',
                    data: null
                });
            }
            return result;
        });
        req.user = dataToken;
        next();
        
    }

    noAuth(){

    }
}

module.exports = new AuthMiddleware();