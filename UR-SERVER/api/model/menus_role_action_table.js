import mongoose from "mongoose";

const MenuActionSchema = new mongoose.Schema({
  role_code: {
    type: String
    
  },

  menu_code: {
    type: String
  },

  action: {
    type: Array
  },

  access_given_by: {
    type: String
    
  },

  created_on: {
    type: Date,
    default: Date.now()
  }
});

export const menus_role_action_table = mongoose.model("menus_role_action_table", MenuActionSchema);
