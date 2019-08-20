import db from "../model";

const { Menu } = db;

class menuControllerClass{

     //Creating Menus
     static add(req, res) {
          const { menu_name, menu_description, menu_url, menu_code,created_by } = req.body;
          return Menu.create({ menu_name, menu_description, menu_url, menu_code,created_by })
          .then(menuData => res.status(201).send({ success: true, message: "Menu Successfully Created", menuData })).catch(error => res.status(400).send(error))
     }
     
     // List Menus
     static list(req,res){
          return Menu.find({}).then(menuData =>res.status(200).send({ success: true, message: "Menu List ", menuData })).catch(error => res.status(400).send(error))
     }

     // static async deleteId(req,res){
     //      const { menu_code } = req.params;
     //      const menu = await Menu.findByIdAndRemove(menu_code);
     //      return res.status(204).send(menu);
     // }
     
     static async update(req,res){
          const { id } = req.params;
          // const { menu_name, menu_description, menu_url, menu_code,created_by,created_on } = req.body;
          const menu = await Menu.findByIdAndUpdate(id,req.body);
          //  menu.remove();
          return res.status(204).send(menu);
     }

     // static async update_single(req,res){
     //      const { id } = req.params;
     //      const { menu_name } = req.body;
     //      const menu = await Menu.findByIdAndUpdate(id,{menu_name});
     //      //  menu.remove();
     //      return res.status(204).send({menu});
     // }

     static async deleteBy_MenuCode(req,res){
          const { menu_code } = req.params;
          const menu = await Menu.findOneAndRemove({menu_code});
          
          return res.status(204).send(menu);
     }

     static async updateBy_MenuCode(req,res){
          const { menu_code } = req.params;
          const { menu_name } = req.body;
          console.log(menu_code);
           // const menu = await
    return Menu.findOneAndUpdate({menu_code},{ menu_name })
        .then(menuData =>res.status(204).send({ success: true, message: "Menu Updated ", menuData })).catch(error => res.status(400).send(error))

}


}


export default menuControllerClass;
