import mongoose from "mongoose";
// import validator from "validator";

const roleSchema = new mongoose.Schema({
  role_name: {
    type: String,
    required: true,
    validate(value) {
      if (value < 4) {
        throw new Error("Role Name must contain atleast 4 Charactors");
      }
    }
  },

  role_code: {
    type: String,
    required: true
  },

  created_by: {
    type: Number,
    required: true
  },

});

export const Roles = mongoose.model("Roles", roleSchema);
