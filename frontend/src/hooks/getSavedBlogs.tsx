import { useState, useEffect } from "react"

import axios from "axios"

import { BACKEND_URL } from "../config"

type SavedPost={
    userId:string,
    postId:string,
    post:{
        id:string,
        title:string,
        content:string,
        blogImageKey:string,
        publishDate:string,
        authorId:string,
        author:{
            name:string,
            email:string
        },
        saved:boolean
    }
}


type SavedPosts=SavedPost[] | []

export const useSavedBlogs=(updateTrigger:any)=>{
    const [savedBlogs,setSavedBlogs]=useState<SavedPosts>([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
            const sendRequest=async ()=>{
                const response=await axios.get(`${BACKEND_URL}/api/v1/blog/saved`,{
                    headers:{
                        'Authorization':localStorage.getItem('mediumToken')
                    }
                })
    
                setSavedBlogs(response.data.savedBlogs)
                setLoading(false)
            }
    
            sendRequest()
        },[updateTrigger])

    return{
        loading,
        savedBlogs
    }
}