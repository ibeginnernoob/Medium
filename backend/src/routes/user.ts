import { Hono } from 'hono'

const userRouter = new Hono<{
    Bindings:{
      DATABASE_URL:string,
      JWTSecret:string
    },
    Variables:{
        prisma:any,
        userId:any
    }
}>()

userRouter.get('/username',async (c)=>{
    try{
        const prisma=c.get("prisma")
        const userId=c.get("userId")

        const user=await prisma.user.findUnique({
            where:{
                id:userId
            }
        })

        return c.json({
            name:user.name
        },200)
    } catch(e){
        console.log(e)
        return c.text("Something went wrong.",500)
    }
})

export default userRouter