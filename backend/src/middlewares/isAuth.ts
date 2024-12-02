import { Next, Context } from "hono"
import jwt from "@tsndr/cloudflare-worker-jwt"

const isAuth=async (c:Context,next:Next)=>{
    try{
        const authHeader:string=c.req.header("Authorization") || ""

        const token=authHeader.split(' ')[1]
    
        const isVerified=await jwt.verify(token,c.env.JWTSecret)
        if(!isVerified){
            return c.text("Verification failed!",403)
        }
        const {payload}=jwt.decode(token)
        
        //@ts-ignore
        c.set("userId",payload.userId)
        await next()
  
    } catch(e){
        console.log(e)
    }
}

export default isAuth