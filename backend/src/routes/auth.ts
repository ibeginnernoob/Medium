import { Hono } from 'hono'
import jwt from "@tsndr/cloudflare-worker-jwt"
import { signinInput, signupInput } from '@adheil_gupta/medium-zod'

const authRouter = new Hono<{
    Bindings:{
      DATABASE_URL:string,
      JWTSecret:string
    },
    Variables:{
        prisma:any
    }
  }>()

authRouter.post('/signup',async (c)=>{
    try{
        const body=await c.req.json()
        const prisma=c.get('prisma')

        const user=await prisma.user.findUnique({
            where:{
                email:body.email
            }
        })

        if(user){
            return c.text("User with email already exists!",403)
        }

        const {success}=signupInput.safeParse(body)
        if(!success){
            return c.text("Invalid inputs!",403)
        }

        const DBResponse=await prisma.user.create({
            data:{
                name:body.name,
                email:body.email,
                password:body.password
            }
        })

        if(!DBResponse){
            return c.text("User creation failed!",500)
        }
        
        const token=await jwt.sign({
            userId:DBResponse.id
        },c.env.JWTSecret)

        return c.json({
            token
        })
    } catch(e){
        return c.text("User creation failed.",403)
    }
})

authRouter.post('/signin',async (c)=>{
    try{
        const prisma=c.get('prisma')

        const body=await c.req.json()

        const email=body.email
        const password=body.password

        const {success}=signinInput.safeParse(body)
        if(!success){
            return c.text("Invalid inputs!",403)
        }

        const user=await prisma.user.findUnique({
            where:{
                email:email
            }
        })

        if(!user){
            return c.text("No user found.",500)
        }
        else if(user && password!==user.password){
            return c.text("Incorrect password.",500)
        }
        else{
            const token=await jwt.sign({
                userId:user.id
            },c.env.JWTSecret)

            return c.json({
                token
            })
        }
    } catch(e){
        return c.text("User verification failed.",403)
    }
})

export default authRouter