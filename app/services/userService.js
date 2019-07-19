const UserModel = require('../models/userModel');


class UserService{
    constructor(){
        this.userModel = UserModel;
    }
    //get profile
    async profile(user){
        //console.log(user); 
        const users = await this.userModel.query().where('id', user.id).first();
        if(!users){
            return {
                message: 'username_is_wrong!',
                data: null
            };
        }
        return {
            message:'get profile success',
            data: {
                id: users.id,
                username: users.username,
                create: users.create_at,
                update: users.update_at
            }
        }
    }
    //update profile
    async updateProfile(user, body){
         const newname = body.name;
         console.log(newname);
        if(!newname)
        {
            return {
                message: 'Newname_is_wrong!',
                data: null
            };
        }
        const dataNewName = await this.userModel.query().where('id', user.id).first().update({
        name: newname,
        updated_at:new Date()
    });
        if(!dataNewName) 
        {
            return {
                message: 'update_wrong!!',
                data: null
            };
        }
        return {
            message: 'update_success!!',
            data: 1
        };        
    }
}

module.exports = new UserService();