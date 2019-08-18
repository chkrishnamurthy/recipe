import mongoose from "mongoose";

const MenuActionSchema = new mongoose.Schema({
  menu_id: {
    type: Number
    
  },

  role_id: {
    type: Number
    
  },

  action: {
    type: Array
    
  },

  created_by: {
    type: Number
    
  },

  created_on: {
    type: Date,
    default: Date.now()
  }
});

export const menus_role_action_table = mongoose.model("menus_role_action_table", MenuActionSchema);
