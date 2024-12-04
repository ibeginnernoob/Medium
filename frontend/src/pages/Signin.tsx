import { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

import Auth from "../components/Auth"
import { BACKEND_URL } from "../config"

function Signin(){
    const navigate=useNavigate()

    const [signinInputs,setSigninInputs]=useState({
        email:"",
        password:""
    })

    const sendSigninRequest=async ()=>{
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/auth/signin`,signinInputs)

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
            <Auth sendRequest={sendSigninRequest} type={"signin"} setFunc={setSigninInputs} />
        </div>
    )
}

export default Signin