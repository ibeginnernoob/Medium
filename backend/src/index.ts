import { Hono } from 'hono'
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import router from './routes'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string
  },
  Variables:{
    prisma:any
  }
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.use(async (c,next)=>{
  try{
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    c.set("prisma",prisma)

    await next()
  } catch(e){
    return c.text("Internal server error!",500)
  }
})

app.route('/api/v1',router)

export default app
