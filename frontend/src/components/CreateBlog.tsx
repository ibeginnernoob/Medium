
import DynamicTextarea from "./DynamicTextArea"

import { useImage } from "../hooks/fetchAWS"
import Spinner from "./Spinner"

import { useEffect, useState } from "react"

// temporary
type CreatePostInput={
    title:string,
    content:string,
    blogImageKey:string,
    id:string,
    file:any
}

type props={
    blogDetails:CreatePostInput
    onChangeTitle:(e:any)=>void,
    onChangeDescr:(e:any)=>void,
    onChangeImage:(e:any)=>void,
    sendRequest:()=>void
    updating?:boolean
}

function CreateBlog({onChangeTitle,onChangeDescr,sendRequest,onChangeImage,blogDetails,updating}:props){

    const [loading,setLoading]=useState(false)
    const [imageURL,setImageURL]=useState<any>(null)

    useEffect(()=>{
        console.log(blogDetails)

        const sendRequest=async ()=>{
            try{
                if(blogDetails.blogImageKey!==""  && blogDetails.blogImageKey!=="NA"){
                    setLoading(true)
                    const response=await fetch(`https://${import.meta.env.VITE_S3_BUCKET_NAME}.s3.${import.meta.env.VITE_S3_BUCKET_REGION}.amazonaws.com/${blogDetails.blogImageKey}`)
                    const blob=await response.blob()
                    setImageURL(URL.createObjectURL(blob))
                    setLoading(false)
                }
            } catch(e){
                console.log(e)
                setLoading(false)
            }
        }

        sendRequest()
    },[])

    let link=null
    if(blogDetails.file!==null){
        link=window.URL.createObjectURL(blogDetails.file)
    }

    if(loading){
        return(
            <Spinner/>
        )
    }

    return(
        <div className="flex flex-col px-20 mt-10 sm:px-40 lg:px-60 xl:px-80 md-mt-14">
            <DynamicTextarea value={blogDetails.title} placeholder="Title" className="text-3xl resize-y font-semibold border-l-[1px] pl-2 border-gray-200 focus:outline-none sm:text-5xl" onChange={onChangeTitle} />
            <div className="my-8 flex flex-col items-center justify-center">
                <input type="file" className="mb-6 w-[100px] text-transparent
                file:py-1 file:px-2 file:border-[1px]
                file:text-xs file:font-medium
                file:bg-stone-50 file:text-stone-700
                hover:file:bg-blue-50 hover:file:text-blue-700
                file:cursor-pointer file:rounded-md" onChange={(e)=>{
                    if(e.target.files!==null){
                        onChangeImage(e)
                    }
                }} />
                <img src={link!==null ? link : (imageURL!==null ? imageURL : null)} className="w-80"/>
            </div>
            <DynamicTextarea value={blogDetails.content} placeholder="Tell your story..." className="text-lg resize-y font-semibold pl-2 mb-8 border-gray-200 focus:outline-none md:text-xl" onChange={onChangeDescr} />
            <button className='bg-green-500 w-20 text-white text-sm px-2.5 py-1 rounded-2xl mr-8 hover:opacity-80 mb-5 md:w-24 sm:text-base' onClick={sendRequest}>{updating ? "Update":"Publish"}</button>
        </div>
    )
}

export default CreateBlog