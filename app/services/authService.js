const UserModel = require('../models/userModel');
const TokenModel = require('../models/tokenModel');
const jwt = require('json-web-token');
const comparePassword = require('../heapers/comparePass');

class AuthService {
    constructor()
    {
        this.userModel = UserModel;
        this.tokenModel = TokenModel;
    }
     //REGISTER
    async register(body) {
        
        if(!body.username || !body.password ||!body.name) {
            return {
                message: 'username_or_password_or_name_is_required',
                data: null
            }
        }

        const user = await this.userModel.query().where('username', body.username).first();
        
        if(user) {
            return {
                message: 'User_is_exit',
                data: null
            }
        }

        const password = comparePassword.createHash(body.password);
        console.log(password);

        const dataInsert = {
            username: body.username,
            password,
            name: body.name
        };

        const userInserted = await this.userModel.query().insert(dataInsert);
        
        let token = jwt.encode(Env.APP_KEY, {
            id: userInserted.id,
            timestamp: new Date().getTime()
        });

        const dataTokenInsert = {
            userid: userInserted.id,
            token:token.value,
            status:1 //1 la token hien tai - 0 la token cu
        };

        await this.tokenModel.query().insert(dataTokenInsert);
        
        return {
            message: 'Register Success !!',
            data: token.value
        };
    }

//LOGIN
    async login(body) {
    if(!body.username || !body.password){
        return {
            message: 'username_or_password_is_wrong!',
            data: null
        };
    }

    const user = await this.userModel.query().where('username', body.username).first();
    if(!user)
    {
        return {
            message: 'username_is_wrong!',
            data: null
        };
    }
    if(!comparePassword.comparePass(body.password, user.password)){
        return {
            message: 'password_is_wrong!',
            data :null
        };
    }

        const token = jwt.encode(Env.APP_KEY, {
            id: user.id,
            timestamp: new Date().getTime()
        });

        const dataToken = {
            userid: user.id,
            token: token.value,
            status: 1
        };
        await this.tokenModel.query().insert(dataToken).where('userid', user.id);
        return {
            message: "Login_success!",
            data: null,
            token
        };
    }
//LOGOUT
    async logout(headers){
        const token = headers.authorization;
        if(!token){
            return {
                message: 'No_exits',
                data: null
            };
        }
        
        const tokenData = await this.tokenModel.query().where('token', token).first().delete();
        return {
            message: 'Logout success!',
            data:null
        };
        
    }

}

module.exports = new AuthService();