import model from "../model";
import { ERROR, SUCCESS, STATUS_CODE } from "../config/data/message";

const { Recipe } = model;

export const create = (req,res)=>{
     // console.log("recipe inserting");
     // console.log(req.body);
     // console.log(req.file);
     // console.log("this is imahe path ", req.file.path);

     const { recipe_name,recipe_description,recipe_no_of_persons,recipe_kilo_grams,primary_ingredients,secondary_ingredients,created_by }= req.body;

     let recipe_img_path = req.file.path;
     console.log("recipe_img_path",recipe_img_path)

     // console.log("recipe_name",recipe_name)
     // console.log("recipe_description",recipe_description)
     // console.log("recipe_no_of_persons",recipe_no_of_persons)
     // console.log("recipe_kilo_grams",recipe_kilo_grams)
     // console.log("primary_ingredients",primary_ingredients)
     // console.log("secondary_ingredients",secondary_ingredients)
     // console.log("created_by",created_by)
   
// let 
     // Recipe.create( { recipe_name,recipe_description,recipe_no_of_persons,recipe_kilo_grams,recipe_img_path,primary_ingredients,secondary_ingredients,created_by } ).then(recipesData=>{
     //      res.status(200).send({success :"Created",recipesData})
     //      .catch(error => res.status(400).send(error));
     // })
}