import  {Router}  from "express";
import protectRoute from "../middleware/protectRoute";
const router = Router();

router.get('/',protectRoute,getUserSideBar)

export default router;