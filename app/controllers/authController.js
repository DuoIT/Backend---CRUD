const AuthService = require('../services/authService');

class AuthController {
    constructor(){
        this.authService = AuthService;
    }
//register

    async register({ req, res, next }) { 
        const { body } = req;

        const result = await this.authService.register(body);
        
        console.log(result);
        
        return res.json(result); 
    }
//login
    async login({req, res, next}) {
        const { body } =req;

        const resultLogin = await this.authService.login(body);
        console.log(resultLogin);

        return res.json(resultLogin);

    }
    
//logout
    async logout({req, res, next}) {
        console.log('dfgh');
        
        const { headers } = req;

        const resultLogout = await this.authService.logout(headers);
        console.log(resultLogout);

        return res.json(resultLogout);
        
    }
    
}

module.exports = new AuthController();
