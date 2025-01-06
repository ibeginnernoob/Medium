import { Hono } from "hono";

import authRouter from "./auth";
import blogRouter from "./blog";
import isAuth from "../middlewares/isAuth";
import userRouter from "./user";

const router=new Hono()

router.route('/auth',authRouter)
router.use('/blog/*',isAuth)
router.route('/blog',blogRouter)
router.use('/user/*',isAuth)
router.route('/user',userRouter)

export default router