// // import {Router} from '../../node_modules/express';
// import { Router } from "express";
// import menu from "../controllers/menus";
// import * as user from "../controllers/users";

// export const router = Router();

// // Menus Routes
// router.route("/api/menus").post(menu.add);
// router.route("/api/menus").get(menu.list);
// router.route("/api/menus/:menu_code").delete(menu.deleteBy_MenuCode);
// router.route("/api/menus/:menu_code").patch(menu.updateBy_MenuCode);

// // Users Routes
// router.route("/api/users").get(user.list);
// router.route("/api/users").post(user.add);
// router.route("/api/users/:user_code").delete(user.deleteBy_MenuCode);
// router.route("/api/users/:user_code").get(user.findByUserCode);

// router.route("/login").get(user.login);

// // router.route("/api/users/:user_code").patch(user.updateByCode