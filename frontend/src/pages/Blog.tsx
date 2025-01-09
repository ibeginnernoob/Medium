import { useParams } from "react-router"
import { useEffect, useState } from "react"

import { useBlog } from "../hooks/getBlogData"
import BlogDetails from "../components/BlogDetails"
import AppBar from "../components/AppBar"
import Spinner from "../components/Spinner"

function Blog(){
    const {id}=useParams()

    const [loadingAWS,setLoadingAWS]=useState(true)
    const [imageURL,setImageURL]=useState<any>(null)

    const {loading,blogData}=useBlog(id || "")

    useEffect(()=>{
        if(blogData.blogImageKey!==''){
            if(blogData.blogImageKey!=='NA'){
                const sendRequest=async ()=>{
                    try{
                        const response=await fetch(`https://${import.meta.env.VITE_S3_BUCKET_NAME}.s3.${import.meta.env.VITE_S3_BUCKET_REGION}.amazonaws.com/${blogData.blogImageKey}`)
                        const blob=await response.blob()
                        setImageURL(URL.createObjectURL(blob))
                        setLoadingAWS(false)
                    } catch(e){
                        console.log(e)
                        setLoadingAWS(false)
                    }
                }
        
                sendRequest()
            }
            else{
                setLoadingAWS(false)
            }
        }
    },[blogData.blogImageKey])

    if(loading || loadingAWS){
        return(
            <div>
                <Spinner/>
            </div>
        )
    }

    return(
        <>
            <AppBar/>
            <div>
                <BlogDetails
                    title={blogData.title}
                    description={blogData.content}
                    publishDate={blogData.publishDate}
                    authorName={blogData.author.name}
                    imageURL={imageURL}
                />
            </div>
        </>
    )
}

export default Blog