import db from "../model";

const { Users } = db;

class userControllerClass{
     static add(req, res) {
          const { user_name, email, password, role_code,user_code,created_by } = req.body;
console.log(req.body);
          return Users.create({ user_name, email, password, role_code,user_code,created_by })
          .then(userData => res.status(201).send({ success: true, message: "Users Successfully Created", userData })).catch(error => res.status(400).send(error))
     }
     
     // static list(req,res){
     //      return User.find({}).then(menuData =>res.status(200).send({ success: true, message: "Menu List ", menuData })).catch(error => res.status(400).send(error))
     // }

    

}



export default userControllerClass;