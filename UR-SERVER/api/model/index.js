import { Menu } from './menu';
import { Users } from './user';
import { Roles } from './role';
import { menus_role_action_table } from './menus_role_action_table';
import { Recipe } from './recipes';


const db = {};

db.Menu = Menu;
db.Users = Users;
db.Roles = Roles;
db.menus_role_action_table = menus_role_action_table;
db.Recipe = Recipe;


module.exports = db;