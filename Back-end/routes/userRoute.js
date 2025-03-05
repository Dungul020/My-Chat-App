import  {Router}  from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserSideBar } from "../Controllers/user.controller.js";
const router = Router();

router.get('/',protectRoute,getUserSideBar)

export default router;