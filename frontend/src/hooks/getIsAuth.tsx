import axios from "axios"
import { useState, useEffect } from "react"
import { BACKEND_URL } from "../config"

export const useAuth=()=>{
    const [isAuth,setIsAuth]=useState(false)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const getAuthDetails=async ()=>{
            try{
                if(localStorage.getItem('mediumToken')){
                    const response=await axios.get(`${BACKEND_URL}/api/v1/auth/isAuth`,{
                        headers:{
                            'Authorization':localStorage.getItem('mediumToken')
                        }
                    })
    
                    if(response.status==200){
                        setIsAuth(true)
                    }
                }
                else{
                    setIsAuth(false)
                }
                setLoading(false)
            } catch(e){
                console.log(e)
            }
        }

        getAuthDetails()
    },[])

    return {
        isAuth,
        loading
    }
}