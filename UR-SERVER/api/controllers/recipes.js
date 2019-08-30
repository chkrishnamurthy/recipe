import model from "../model";
import { ERROR, SUCCESS, STATUS_CODE } from "../config/data/message";

const { Recipe } = model;

export const create = (req,res)=>{
     const { recipe_name,
          recipe_description,
          recipe_no_of_persons,
          recipe_kilo_grams,
          ing_primary_ingredients,
          ing_secondary_ingredients,
          created_by,
          is_published
               }= req.body;

          let primary_ingredients = JSON.parse(ing_primary_ingredients);
          let secondary_ingredients = JSON.parse(ing_secondary_ingredients);

          let recipe_img_path = req.file.filename;
           Recipe.create( { recipe_name,recipe_description,recipe_img_path,recipe_no_of_persons,recipe_kilo_grams,primary_ingredients,secondary_ingredients,created_by,is_published} ) .then(recipeData => res.status(STATUS_CODE.CREATED)
     .send({
             success: true,
             message: "success, Created",
             recipeData
           }))
     .catch(error => res.status(401)
     .send("error,Not created", error)
     );

};

export const list = (req, res) => {
     console.log("Get Recipies list");
     Recipe.find({}).then(recipieList => res.status(STATUS_CODE.OK)
                                        .send({
                                               success: true,
                                               recipieList
                                     })
                   ).catch(error => res.status(STATUS_CODE.NOT_FOUND)
                                       .send(error));
   };

   export const publish = async (req, res) => {
     const { _id } = req.params;
     const { is_published } = req.body;
//   console.log("is_published",is_published)
     return Recipe.findOneAndUpdate({_id},{ is_published })
   .then(userData =>res.status(204).send({ success: true, message: "Recipe Published ", userData })).catch(error => res.status(400).send(error))
}

export const published_list = (req, res) => {
     Recipe.find({is_published :"yes"}).then(recipieList => res.status(STATUS_CODE.OK)
                                        .send({
                                               success: true,
                                               recipieList
                                     })
                   ).catch(error => res.status(STATUS_CODE.NOT_FOUND)
                                       .send(error));
   };