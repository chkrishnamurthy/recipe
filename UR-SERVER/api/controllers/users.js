import model from "../model";
import { ERROR, SUCCESS, STATUS_CODE } from "../config/data/message";
import { privatekey } from "../config/data/secure";
import jwt from "jsonwebtoken";

const { Users } = model;
const { menus_role_action_table } = model;
const { Roles } = model;

// List of User
export const list = (req, res) => {
  Users.find({})
    .then(usersList =>
      res.status(STATUS_CODE.OK).send({
        success: true,
        usersList
      })
    )
    .catch(error => res.status(STATUS_CODE.NOT_FOUND).send(error));
};

// Creation Users
export const add = (req, res) => {
  const {
    user_name,
    email,
    password,
    role_code,
    user_code,
    created_by
  } = req.body;

  return Users.create({
    user_name,
    email,
    password,
    role_code,
    user_code,
    created_by
  })
    .then(menuData =>
      res
        .status(201)
        .send({ success: true, message: "Menu Successfully Created", menuData })
    )
    .catch(error => res.status(400).send(error));
};

// export const deleteBy_MenuCode = (req, res) => {
//   Users.findOneAndRemove({ user_code: req.params.user_code }).then(
//     deletedUser =>
//       res
//         .status(STATUS_CODE.OK)
//         .send({
//           success: true,
//           message: SUCCESS.USER_DELETED,
//           deletedUser
//         })
//         .catch(error => res.status(400).send(error))
//   );
// };

export const deleteById = async (req, res) => {
  const { _id } = req.params;
const deletedrole = await Users.findByIdAndRemove(_id);
return res.status(204).send(deletedrole);
}

export const findByUserCode = async (req, res) => {
  const user_code = req.params.user_code;
  try {
    const userobj = await Users.findOne({ user_code: +user_code });
    if (!userobj) {
      return res.status(404).send();
    }
    res.send(userobj);
  } catch (e) {
    res.status(500).send(e);
  }
};

// export const updateBy_MenuCode = async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["user_name", "email", "password"];
//   const isValidOperation = updates.every(update =>
//     allowedUpdates.includes(update)
//   );

//   console.log(isValidOperation);
//   console.log(updates);

//   if (!isValidOperation) {
//     return res.status(400).send({ error: "Invalid updates!" });
//   }

//   try {
//     const userobj = await Users.findOneAndUpdate(
//       { user_code: +req.params.user_code },
//       req.body,
//       { new: true, runValidators: true }
//     );
//     console.log("user", userobj);
//     if (!userobj) {
//       return res.status(404).send();
//     }

//     res.send(userobj);
//   } catch (e) {
//     console.log("check error", e);
//     res.status(400).send(e);
//   }
// };

export const updateBy_Id = async (req,res) =>{
  const { _id } = req.params;
const updatedRole = await Users.findByIdAndUpdate(_id,req.body);
return res.status(204).send(updatedRole);
}


export const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);

  try {
    const userobj = await Users.findOne({ email: email, password: password });
    if (!userobj) {
      return res.status(404).send({
        success: false,
        message: "Worng Credentials"
      });
    }
    const logincredintails = { email, password };
    const token = jwt.sign(logincredintails, privatekey);

    const roleObj = await Roles.findOne({ role_code: userobj.role_code });

    const defaultUrl = (userobj.role_code == roleObj.role_code) ? ("/"+roleObj.role_code) : "/recipe/";
    
   
    const user_details = {
      email:userobj.email,
      user_code:userobj.user_code,
      user_name:userobj.user_name,
      role_code:userobj.role_code,
    };

    console.log(user_details.role_code);

    const selfMenu = await menus_role_action_table.find({ role_code: user_details.role_code });

    // console.log("selfMenu"+selfMenu);
    // console.log("user_details"+user_details);
    // console.log("selfMenu"+selfMenu);

    // console.log("selfMenu"+selfMenu);

    // console.log("This is user_details:" + user_details);
    // console.log("defaultUrl:" + defaultUrl);
    // console.log("token:" + defaultUrl);

console.log(user_details)
    res.status(STATUS_CODE.OK).send({
      success: true,
      message: SUCCESS.VALID_USER,
      user_details,
      token,
      defaultUrl,
      selfMenu

    });
  } catch (e) {
    console.log("gocha error");
    res.status(500).send(e);
  }
};
