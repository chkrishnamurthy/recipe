import mongoose from "mongoose";
// import validator from "validator";

const menuSchema = new mongoose.Schema({
  menu_name: {
    type: String,
    required: true,
    validate(value) {
      if (value < 4) {
        throw new Error("Menu Name must contain atleast 4 Charactors");
      }
    }
  },

  menu_description: {
    type: String,
    required: true
  },

  menu_url: {
    type: String,
    required: true
  },

  menu_code: {
    type: Number,
    required: true
  },

  created_by: {
    type: String,
    required: true
  },

  created_on: {
    type: String,
    required: true
  }
});

export const Menu = mongoose.model("menuslist", menuSchema);
