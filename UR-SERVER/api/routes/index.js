// import {Router} from '../../node_modules/express';
import {Router} from 'express';
import menu from '../controllers/menus';
import user from '../controllers/users';

export const router = Router();

// Menus Routes
router.route("/api/menus").post(menu.add);
router.route("/api/menus").get(menu.list);
// router.route("/api/menus/:menu_code").delete(menu.deleteId);
// router.route("/api/menus/:id").put(menu.update);
// router.route("/api/menus/:id").patch(menu.update_single);
router.route("/api/menus/:menu_code").delete(menu.deleteBy_MenuCode);
router.route("/api/menus/:menu_code").patch(menu.updateBy_MenuCode);


// Users Routes
router.route("/api/users").post(user.add);



