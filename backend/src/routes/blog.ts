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
        blogImageKey:body.blogImageKey || "NA",
        authorId:authorId
      }
    })

    return c.text("Post created successfully!",201)

  } catch(e){
    console.log(e)
    return c.text("Post creation failed",411)
  }
})

blogRouter.get('/saved',async (c)=>{
  try{
    const prisma=c.get('prisma')
    const authorId=c.get('userId')

    const savedBlogs=await prisma.usersSavedPostsData.findMany({
      where:{
        userId:authorId
      },
      include:{
        post:{
          include:{
            author:{
              select:{
                email:true,
                name:true
              }
            }
          }
        }
      }
    })

    return c.json({savedBlogs:savedBlogs},200)
  } catch(e){
    console.log(e)
    return c.text("Could not fetch saved posts!",500)
  }
})

blogRouter.post('/save',async (c)=>{
  try{
    const prisma=c.get('prisma')
    const authorId=c.get('userId')

    const body=await c.req.json()

    const isSaved=await prisma.usersSavedPostsData.findFirst({
      where:{
        userId:authorId,
        postId:body.postId
      }
    })

    if(isSaved){
      const DBResponse=await prisma.usersSavedPostsData.delete({
        where:{
          postId_userId:{
            userId:authorId,
            postId:body.postId
          }
        }
      })

      return c.text('Post successfully unsaved!',200)
    }
    else{
      const DBResponse=await prisma.usersSavedPostsData.create({
        data:{
          userId:authorId,
          postId:body.postId
        }
      })

      return c.text('Post successfully saved!',200)
    }
  } catch(e){
    console.log(e)
    return c.text("Something went wrong!",500)
  }
})

blogRouter.get('/bulk',async (c)=>{
  try{
    const prisma=c.get("prisma")
    const authorId=c.get('userId')

    
    let posts=await prisma.post.findMany({
      include:{
        author:{
          select:{
            email:true,
            name:true
          }
        },
        usersSaved:{
          select:{
            userId:true
          }
        }
      }
    })

    posts=posts.map((post:any)=>{
      const isSavedByUser=post.usersSaved.some((savedData:any)=>savedData.userId===authorId)
      if(isSavedByUser){
        return {
          ...post,
          saved:true
        }
      }
      return {
        ...post,
        saved:false
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