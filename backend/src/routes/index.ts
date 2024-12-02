import { Hono } from "hono";

import authRouter from "./auth";
import blogRouter from "./blog";
import isAuth from "../middlewares/isAuth";

const router=new Hono()

router.route('/auth',authRouter)
router.use('/blog/*',isAuth)
router.route('/blog',blogRouter)

export default router