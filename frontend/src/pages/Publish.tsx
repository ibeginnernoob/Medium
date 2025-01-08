import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
// import { CreatePostInput } from "@adheil_gupta/medium-zod"

import AppBar from "../components/AppBar"
import CreateBlog from "../components/CreateBlog"
import Spinner from "../components/Spinner"

import { BACKEND_URL } from "../config"

// temporary
type CreatePostInput={
    title:string,
    content:string,
    file:any
}


function Publish(){
    const navigate=useNavigate()

    const [loading,setLoading]=useState(false)
    const [blogDetails,setBlogDetails]=useState<CreatePostInput>({
        title:"",
        content:"",
        file:null
    })

    const onChangeTitle=(e:any)=>{
        setBlogDetails(prevDetails=>{
            return {
                ...prevDetails,
                title:e.target.value
            }
        })
    }

    const onChangeDescr=(e:any)=>{
        setBlogDetails(prevDetails=>{
            return {
                ...prevDetails,
                content:e.target.value
            }
        })
    }

    const onChangeImage=(e:any)=>{
        setBlogDetails(prevDetails=>{
            return {
                ...prevDetails,
                file:e.target.files[0]
            }
        })
    }

    const sendRequest=async ()=>{
        try{
            setLoading(true)

            if(blogDetails.file!==null){
                const getUploadURLResponse=await axios.get('https://n2gs7t4y07.execute-api.us-east-1.amazonaws.com/uploads')

                if(getUploadURLResponse.status!==200 || !getUploadURLResponse){
                    throw new Error('Signed URL could not be retrived.')
                }

                const S3UploadURL=getUploadURLResponse.data.uploadURL

                const objectKey=S3UploadURL.split("/")[3].split("?")[0]

                const S3UploadResponse=await axios.put(S3UploadURL,blogDetails.file,{
                    headers:{
                        'Content-Type':blogDetails.file.type
                    }
                })

                if(!S3UploadResponse || S3UploadResponse.status!==200){
                    throw new Error("Image could not be uploaded to S3.")
                }

                const response=await axios.post(`${BACKEND_URL}/api/v1/blog/create`,{
                    title:blogDetails.title,
                    content:blogDetails.content,
                    blogImageKey:objectKey
                },{
                    headers:{
                        "Authorization":localStorage.getItem("mediumToken"),
                        "Content-Type":'application/json'
                    }
                })
                
                if(response.status!==201){
                    throw new Error("Post creation failed!")
                }
            }
            else{
                const response=await axios.post(`${BACKEND_URL}/api/v1/blog/create`,{
                    title:blogDetails.title,
                    content:blogDetails.content
                },{
                    headers:{
                        "Authorization":localStorage.getItem("mediumToken"),
                        "Content-Type":'application/json'
                    }
                })
        
                if(response.status!==201){
                    throw new Error("Post creation failed!")
                }
            }

            setLoading(false)
            navigate('/blogs')
        } catch(e){
            console.log(e)
            alert("Post creation failed!")
        }
    }

    if(loading===true){
        return(
            <div>
                <Spinner/>
            </div>
        )
    }

    return(
        <div>
            <AppBar/>
            <CreateBlog blogDetails={blogDetails} onChangeImage={onChangeImage} onChangeTitle={onChangeTitle} onChangeDescr={onChangeDescr} sendRequest={sendRequest} />
        </div>
    )
}

export default Publish