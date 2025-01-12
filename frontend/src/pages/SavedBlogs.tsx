
import { useState } from "react"
import axios from "axios"
import { useSavedBlogs } from "../hooks/getSavedBlogs"

import { BACKEND_URL } from "../config"
import Spinner from "../components/Spinner"
import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"

function SavedBlogs(){
    const [updateTrigger,setUpdateTrigger]=useState(0);
    
    const {loading,savedBlogs}=useSavedBlogs(updateTrigger)

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
        <div className="flex justify-center items-center mx-24 py-10 border-b-[1px] border-gray-200 text-5xl font-bold">
            Your Saved Posts
        </div>
        <div className='mb-10'>
            {
                savedBlogs.map((postDetails,index)=>{
                    return(
                        <BlogCard
                            key={index}
                            authorName={postDetails.post.author.name}
                            title={postDetails.post.title}
                            description={postDetails.post.content}
                            publishDate={postDetails.post.publishDate}
                            id={postDetails.post.id}
                            imageKey={postDetails.post.blogImageKey}
                            savePost={changeSaveState}
                            saved={"save page"}
                        />
                    )
                })
            }
        </div>
    </>
    )
}

export default SavedBlogs