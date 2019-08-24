import model from "../model";
import { ERROR, SUCCESS, STATUS_CODE } from "../config/data/message";
import { privatekey } from "../config/data/secure";
import jwt from "jsonwebtoken";

const { menus_role_action_table } = model;

export const add = (req, res) => {
  const { role_code, menu_code, action,access_given_by} = req.body;
  return menus_role_action_table.create({ role_code, menu_code, action,access_given_by})
  .then(addedData => res.status(201).send({ success: true, message: "Menu Successfully Created", addedData }))
  .catch(error => res.status(400).send(error))
}

// List 

export const list = (req, res) => {
     menus_role_action_table.find({})
    .then(List =>
      res.status(STATUS_CODE.OK).send({
        success: true,
        List
      })
    )
    .catch(error => res.status(STATUS_CODE.NOT_FOUND).send(error));
};

// export const DeleteById = (req, res) => {
//   menus_role_action_table.findOneAndRemove({ role_id: req.params.role_id }).then(
//     deletedData =>
//       res
//         .status(204)
//         .send({
//           success: true,
//           message: "Deleted",
//           deletedData
//         })
//         .catch(error => res.status(400).send(error))
//   );
// };

export const deleteById = async (req, res) => {
  const { _id } = req.params;
const deletedrole = await menus_role_action_table.findByIdAndRemove(_id);
return res.status(204).send(deletedrole);
}


// export const updateBy_RoleCode = async (req,res) =>{
//   const updates = Object.keys(req.body)
//   const allowedUpdates = ['action']
//   const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//   console.log(isValidOperation)
//   console.log(updates)

//   if (!isValidOperation) {
//       return res.status(400).send({ error: 'Invalid updates!' })
//   }

//   try {
//       const roleobj = await menus_role_action_table.findOneAndUpdate({ role_id: +req.params.role_id }, req.body, { new: true, runValidators: true })
//       if (!roleobj) {
//           return res.status(404).send()
//       }

//       res.send(roleobj)
//   } catch (e) {
//       console.log("check error", e);
//       res.status(400).send(e)
//   }
// }

export const updateBy_Id = async (req,res) =>{
  const { _id } = req.params;
const updatedRole = await menus_role_action_table.findByIdAndUpdate(_id,req.body);
return res.status(204).send(updatedRole);
}
