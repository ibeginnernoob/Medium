import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import { CreatePostInput } from "@adheil_gupta/medium-zod"

import AppBar from "../components/AppBar.tsx"
import CreateBlog from "../components/CreateBlog.tsx"
import Spinner from "../components/Spinner.tsx"

import { BACKEND_URL } from "../config"


function Publish(){
    const navigate=useNavigate()

    const [loading,setLoading]=useState(false)
    const [blogDetails,setBlogDetails]=useState<CreatePostInput>({
        title:"",
        content:""
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

    const sendRequest=async ()=>{
        try{
            setLoading(true)
            const response=await axios.post(`${BACKEND_URL}/api/v1/blog/create`,blogDetails,{
                headers:{
                    "Authorization":localStorage.getItem("mediumToken"),
                    "Content-Type":'application/json'
                }
            })
    
            if(response.status!==201){
                throw new Error("Post creation failed!")
            }

            setLoading(true)
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
            <CreateBlog onChangeTitle={onChangeTitle} onChangeDescr={onChangeDescr} sendRequest={sendRequest} />
        </div>
    )
}

export default Publish