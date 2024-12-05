import { useState } from "react"
import { useNavigate } from "react-router"
import { SignupInput } from "@adheil_gupta/medium-zod"
import axios from "axios"

import Auth from "../components/Auth"

import { BACKEND_URL } from "../config"
import Spinner from "../components/Spinner"

function Signup(){
    const navigate=useNavigate()

    const [loading,setLoading]=useState(false)
    const [signupInputs,setSignupInputs]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })

    const sendSignupRequest=async ()=>{
        try{
            setLoading(true)

            const response=await axios.post(`${BACKEND_URL}/api/v1/auth/signup`,signupInputs)

            const token=response.data.token
            if(!token){
                throw new Error("Sign up failed!")
            }
            localStorage.setItem("mediumToken",`Bearer ${token}`)

            setLoading(false)
            navigate('/blogs')
            
        } catch(e){
            alert("Sign up failed!")
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
            <Auth sendRequest={sendSignupRequest} type={"signup"} setFunc={setSignupInputs}/>
        </div>
    )
}

export default Signup