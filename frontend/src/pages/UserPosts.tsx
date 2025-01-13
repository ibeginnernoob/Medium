
import { useState } from "react";

import axios from "axios";
import { BACKEND_URL } from "../config";
import AppBar from "../components/AppBar";
import Spinner from "../components/Spinner";
import { useUserBlogs } from "../hooks/getUserBlogs";
import BlogCard from "../components/BlogCard";

function UserPosts(){
    const [updateTrigger,setUpdateTrigger]=useState(0); // for refetching data.

    const {loading,userBlogs}=useUserBlogs(updateTrigger) // wont run unless the component is mount for te first time
    const [loadSave,setLoadSave]=useState(false)
    const [loadDelete,setLoadDelete]=useState(false)

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
    
    const deletePost=async (postId:String)=>{
        try{    
            setLoadDelete(true)

            console.log('delete!')
            const response=await axios.delete(`${BACKEND_URL}/api/v1/blog/delete/${postId}`,{
                headers:{
                    'Authorization':localStorage.getItem('mediumToken')
                }
            })

            setLoadDelete(false)
            setUpdateTrigger(prev=>prev+1)
        } catch(e){
            console.log(e)
        }
    }

    if(loading || loadSave || loadDelete){
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
                    userBlogs.map((post,index)=>{
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
                                userBlog={true}
                                deletePost={deletePost}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default UserPosts