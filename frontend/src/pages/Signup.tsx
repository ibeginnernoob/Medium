import { useState } from "react"
import { useNavigate } from "react-router"
import { SignupInput } from "@adheil_gupta/medium-zod"
import axios from "axios"

import Auth from "../components/Auth"

import { BACKEND_URL } from "../config"

function Signup(){
    const navigate=useNavigate()

    const [signupInputs,setSignupInputs]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })

    const sendSignupRequest=async ()=>{
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/auth/signup`,signupInputs)

            const token=response.data.token
            if(!token){
                throw new Error("Sign up failed!")
            }
            localStorage.setItem("mediumToken",`Bearer ${token}`)

            navigate('/blogs')
            
        } catch(e){
            alert("Sign up failed!")
        }
    }

    return(
        <div>
            <Auth sendRequest={sendSignupRequest} type={"signup"} setFunc={setSignupInputs}/>
        </div>
    )
}

export default Signup