const UserService = require('../services/userService');


class UserController{
    constructor(){
        this.userService = UserService;
    }

    //getProfile
    async profile({ req, res, next }){
        const {user} = req;
        const resultGetprofile = await this.userService.profile(user);
        return res.json(resultGetprofile); 
    }

    //updateProfile

    async updateProfile({req, res, next }){
        const {user, body} = req;
       const resultupdateProfile = await this.userService.updateProfile(user, body);
       return res.json(resultupdateProfile);
    }

}


module.exports = new UserController();
