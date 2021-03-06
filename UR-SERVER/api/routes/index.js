// import {Router} from '../../node_modules/express';
import { Router } from "express";
import menu from "../controllers/menus";
import * as user from "../controllers/users";
import * as role from "../controllers/roles";
import * as menuaction from "../controllers/menus_role_action_table_Controller";
import * as token from "../middleware/verifytoken";

import * as recipes from '../controllers/recipes';
import { upload } from '../middleware/uploadFile';


export const router = Router();

// For Login
router.route("/login").post(user.login);
// Verify token 

// router.route("/api/*").get(token.verifyToken);

// Menus Routes
router.route("/api/menus").post(menu.add);
router.route("/api/menus").get(menu.list);
router.route("/api/menus/:_id").delete(menu.deleteId);
// router.route("/api/menus/:menu_code").delete(menu.deleteBy_MenuCode);
// router.route("/api/menus/:menu_code").patch(menu.updateBy_MenuCode);
router.route("/api/menus/:_id").patch(menu.update);

// Users Routes
router.route("/api/users").get(user.list);
router.route("/api/users").post(user.add);
// router.route("/api/users/:user_code").delete(user.deleteBy_MenuCode);
router.route("/api/users/:_id").delete(user.deleteById);

router.route("/api/users/:user_code").get(user.findByUserCode);
// router.route("/api/users/:user_code").patch(user.updateBy_MenuCode);
// router.route("/api/users/:_id").patch(user.updateBy_Id);
router.route("/api/users/:_id").patch(user.updateOne);





// Roles Routes
router.route("/api/roles").post(role.add);
router.route("/api/roles").get(role.list);
// router.route("/api/roles/:role_code").delete(role.deleteBy_RoleCode);
router.route("/api/roles/:_id").delete(role.deleteById);
router.route("/api/roles/:role_code").get(role.findByRoleCode);
// router.route("/api/roles/:role_code").patch(role.updateBy_RoleCode);
router.route("/api/roles/:_id").patch(role.updateBy_Id);

// Menu Action Routes
router.route("/api/menuaction").post(menuaction.add);
router.route("/api/menuaction").get(menuaction.list);
router.route("/api/menuaction/:_id").delete(menuaction.deleteById);
router.route("/api/menuaction/:_id").patch(menuaction.updateBy_Id);
router.route("/api/menuaction/:role_code").get(menuaction.menuList);

// file upload 

router.route('/api/upload/recipe').post(upload.single('recipe_img'),recipes.create);
router.route("/api/upload/recipe").get(recipes.list)
router.route("/api/publish/recipe/:_id").patch(recipes.publish);
router.route("/api/published_list/recipe").get(recipes.published_list)

router.route("/api/recipe/single/:_id").get(recipes.singleRecipe)


