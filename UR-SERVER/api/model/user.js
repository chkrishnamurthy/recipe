import mongoose from "mongoose";
// import validator from "validator";

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
    validate(value) {
      if (value < 4) {
        throw new Error("Menu Name must contain atleast 4 Charactors");
      }
    }
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  role_code: {
    type: String,
    required: true
  },

  user_code: {
    type: Number,
    required: true
  },

  created_by: {
    type: Number,
    required: true
  },

  created_on: {
    type: Date,
    default: Date.now()
  }
  
});

export const Users = mongoose.model("Users", userSchema);
