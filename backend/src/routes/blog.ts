import { Hono } from 'hono'
import { createPostInput, updatePostInput } from '@adheil_gupta/medium-zod'

const blogRouter=new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWTSecret:string
  },
  Variables:{
    prisma:any,
    userId:string
  }
}>()

blogRouter.post('/create',async (c)=>{
  try{
    const prisma=c.get('prisma')
    const authorId=c.get('userId')

    const body=await c.req.json()

    const {success}=createPostInput.safeParse(body)
    if(!success){
        return c.text("Invalid inputs!",403)
    }
    
    const DBResponse=await prisma.post.create({
      data:{
        title:body.title,
        content:body.content,
        thumbnail:body.thumbnail || "NA",
        authorId:authorId
      }
    })

    return c.text("Post created successfully!",201)

  } catch(e){
    console.log(e)
    return c.text("Post creation failed",411)
  }
})

blogRouter.get('/bulk',async (c)=>{
  try{
    const prisma=c.get("prisma")
    
    const posts=await prisma.post.findMany({
      include:{
        author:{
          select:{
            email:true,
            name:true
          }
        }
      }
    })

    return c.json({
      posts:posts
    },200)
  } catch(e){
    console.log(e)
    c.text("Internal server error.",500)
  }
})

blogRouter.get('/:id',async (c)=>{
  try{
    const prisma=c.get("prisma")
    const blogId=c.req.param("id")

    const post=await prisma.post.findUnique({
      where:{
        id:blogId
      },
      include:{
        author:{
          select:{
            name:true,
            email:true
          }
        }
      }
    })

    return c.json({
      post:post
    },200)
  } catch(e){
    c.text("Internal server error.",500)
  }
})

blogRouter.put('/update/:id',async (c) => {
  try{
    const prisma=c.get('prisma')
    const body=await c.req.json()
    const blogId=c.req.param("id")

    const {success}=updatePostInput.safeParse(body)
    if(!success){
        return c.text("Invalid inputs!",403)
    }
    
    const DBResponse=await prisma.post.update({
      where:{
        id:blogId
      },
      data:{
        title:body.title,
        content:body.content,
        thumbnail:body.thumbnail || "NA",
      }
    })

    return c.text("Post updated successfully!",201)

  } catch(e){
    return c.text("Post creation failed",411)
  }
})

blogRouter.delete('/:id',async (c)=>{
  try{
    const prisma=c.get("prisma")
    const blogId=c.req.param("id")

    const DBResponse=await prisma.post.delete({
      where:{
        id:blogId
      }
    })

    return c.text("Post deleted successfully!",411)
  } catch(e){
    return c.text("Post deletion failed",411)
  }
})

blogRouter.delete('/bulk',async (c)=>{
  try{
    const prisma=c.get("prisma")

    const DBResponse=await prisma.post.deleteMany({})

    return c.text("Posts deleted successfully!",411)
  } catch(e){
    return c.text("Post deletion failed!",411)
  }
})

export default blogRouter