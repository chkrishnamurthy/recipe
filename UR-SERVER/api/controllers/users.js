import model from "../model";
import { ERROR, SUCCESS, STATUS_CODE } from "../config/data/message";
import { privateKey } from "../config/data/secure";
import jwt from "jsonwebtoken";

const { Users } = model;

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

export const deleteBy_MenuCode = (req, res) => {
  Users.findOneAndRemove({ user_code: req.params.user_code }).then(
    deletedUser =>
      res
        .status(STATUS_CODE.OK)
        .send({
          success: true,
          message: SUCCESS.USER_DELETED,
          deletedUser
        })
        .catch(error => res.status(400).send(error))
  );
};

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

// export const updateByCode = async (req,res) =>{
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['user_name', 'email', 'password']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const userobj = await user.findOneAndUpdate({ user_code: +req.params.user_code }, req.body, { new: true, runValidators: true })
//         console.log("user", userobj);
//         if (!userobj) {
//             return res.status(404).send()
//         }

//         res.send(userobj)
//     } catch (e) {
//         console.log("check error", e);
//         res.status(400).send(e)
//     }
// }

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });

  try {
    const userobj = await Users.findOne({'email':email,'password':password});
    if (!userobj) {
      return res.status(404).send();
    }
    const payload = { email, password };
    const token = jwt.sign(payload, privateKey);
    console.log(token);

    res.status(STATUS_CODE.OK).send({
      success: true,
      message: SUCCESS.VALID_USER,
      // userobj,
      token
    });
  } catch (e) {
    res.status(500).send(e);
  }
};
