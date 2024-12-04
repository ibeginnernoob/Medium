import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

type BlogDetails={
    title:string,
    content:string,
    publishDate:string,
    author:{
        name:string
    }
}

export const useBlog=(blogId:string)=>{
    const [loading,setLoading]=useState(true)
    const [blogData,setBlogData]=useState<BlogDetails>({
        title:"",
        content:"",
        publishDate:"",
        author:{
            name:""
        }
    })

    useEffect(()=>{
        const sendRequest=async ()=>{
            const response=await axios.get(`${BACKEND_URL}/api/v1/blog/${blogId}`,{
                headers:{
                    Authorization:localStorage.getItem("mediumToken")
                }
            })

            setBlogData(response.data.post)
            setLoading(false)
        }

        sendRequest()
    },[])

    return {
        loading:loading,
        blogData:blogData
    }
}