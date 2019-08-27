import mongoose from "mongoose";

const ingredients_schema = new mongoose.Schema({
                                        "ing_name":{
                                             type:String,
                                        },
                                        "ing_qty": {
                                             type:String,
                                        },
                                        "ing_unit": {
                                             type:String,
                                        }
                                     }) 

const recipe_Schema = new mongoose.Schema({
  
  created_by :{
       type:String
  },

  recipe_name: {
    type: String
  },

  recipe_description: {
    type: String
  },

  recipe_no_of_persons: {
    type: String
  },

  recipe_kilo_grams: {
    type: String
    },


    recipe_img_path: {
    type: String
  },

  primary_ingredients: {
    type: [ingredients_schema]
   },

  secondary_ingredients: {
     type: [ingredients_schema]
  },

  created_on: {
    type: Date,
    default: Date.now()
  },

});

export const Recipe = mongoose.model("recipe", recipe_Schema);
