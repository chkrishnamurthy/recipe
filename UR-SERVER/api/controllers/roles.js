import model from "../model";
import { ERROR, SUCCESS, STATUS_CODE } from "../config/data/message";
import { privatekey } from "../config/data/secure";
import jwt from "jsonwebtoken";

const { Roles } = model;

// List of User

export const list = (req, res) => {
  Roles.find({})
    .then(RolesList =>
      res.status(STATUS_CODE.OK).send({
        success: true,
        RolesList
      })
    )
    .catch(error => res.status(STATUS_CODE.NOT_FOUND).send(error));
};

// Creation Users
export const add = (req, res) => {
  const {
     role_name,
     role_code,
     created_by,
  } = req.body;

  return Roles.create({
     role_name,
     role_code,
     created_by,
  })
    .then(rolesData =>
      res
        .status(201)
        .send({ success: true, message: "Role Successfully Created", rolesData })
    )
    .catch(error => res.status(400).send(error));
};

export const deleteBy_RoleCode = (req, res) => {
  Roles.findOneAndRemove({ role_code: req.params.role_code }).then(
    deletedRole =>
      res
        .status(STATUS_CODE.OK)
        .send({
          success: true,
          message: SUCCESS.USER_DELETED,
          deletedRole
        })
        .catch(error => res.status(400).send(error))
  );
};

export const findByRoleCode = async (req, res) => {
  const role_code = req.params.role_code;
  console.log(role_code);
  try {
    const roleObj = await Roles.findOne({ role_code: role_code });
    console.log(roleObj);

    if (!roleObj) {
      return res.status(404).send();
    }
    res.send(roleObj);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const updateBy_RoleCode = async (req,res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['role_name']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    console.log(isValidOperation)
    console.log(updates)

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const roleobj = await Roles.findOneAndUpdate({ role_code: +req.params.role_code }, req.body, { new: true, runValidators: true })
        if (!roleobj) {
            return res.status(404).send()
        }

        res.send(roleobj)
    } catch (e) {
        console.log("check error", e);
        res.status(400).send(e)
    }
}


