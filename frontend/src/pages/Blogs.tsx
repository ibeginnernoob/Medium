import { useState } from 'react'
import axios from 'axios'

import { useBlogs } from '../hooks/getBlogs.tsx'

import BlogCard from '../components/BlogCard.tsx'
import AppBar from '../components/AppBar'
import Spinner from '../components/Spinner.tsx'
import { BACKEND_URL } from '../config.ts'

function Blogs(){
    const [updateTrigger,setUpdateTrigger]=useState(0); // for refetching data.

    const {loading,posts}=useBlogs(updateTrigger) // wont run unless the component is mount for te first time
    const [loadSave,setLoadSave]=useState(false)

    const changeSaveState=async (postId:string)=>{
        try{
            setLoadSave(true)
            const response=await axios.post(`${BACKEND_URL}/api/v1/blog/save`,{
                postId:postId
            },{
                headers:{
                    'Authorization':localStorage.getItem('mediumToken')
                }
            })
            setLoadSave(false)

            setUpdateTrigger(prev=>prev+1)
        } catch(e){
            console.log(e)
        }
    }

    if(loading || loadSave){
        return(
            <div>
                <Spinner/>
            </div>
        )
    }
  
    return(
        <>
            <AppBar />
            <div className='mb-10'>
                {
                    posts.map((post,index)=>{
                        return(
                            <BlogCard
                                key={index}
                                authorName={post.author.name}
                                title={post.title}
                                description={post.content}
                                publishDate={post.publishDate}
                                id={post.id}
                                imageKey={post.blogImageKey}
                                saved={post.saved}
                                savePost={changeSaveState}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Blogs