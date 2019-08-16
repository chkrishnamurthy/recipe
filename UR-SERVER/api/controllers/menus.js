import db from "../model";

const { Menu } = db;


class menuControllerClass{
     static add(req, res) {
          const { menu_name, menu_description, menu_url, menu_code,created_by,created_on } = req.body;
          return Menu.create({ menu_name, menu_description, menu_url, menu_code,created_by,created_on })
          .then(menuData => res.status(201).send({ success: true, message: "Menu Successfully Created", menuData })).catch(error => res.status(400).send(error))
     }

     static list(req,res){
          return Menu.find({}).then(menuData =>res.status(200).send({ success: true, message: "Menu List ", menuData })).catch(error => res.status(400).send(error))
     }

     static async deleteId(req,res){
          const { menu_code } = req.params;
          const menu = await Menu.findByIdAndRemove(menu_code);
          //  menu.remove();
          return res.status(204).send(menu);
     }
     
     static async update(req,res){
          const { id } = req.params;
          const { menu_name, menu_description, menu_url, menu_code,created_by,created_on } = req.body;
          const menu = await Menu.findByIdAndUpdate(id,req.body);
          //  menu.remove();
          return res.status(204).send(menu);
     }

     static async update_single(req,res){
          const { id } = req.params;
          const { menu_name } = req.body;
          const menu = await Menu.findByIdAndUpdate(id,{menu_name});
          //  menu.remove();
          return res.status(204).send({menu});
         
     }
}


export default menuControllerClass;

// export const list = (req,res)=>{console.log("murthy")};
// export const list = (req,res)=>{console.log("murthy")};