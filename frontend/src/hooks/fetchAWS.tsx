
import { useState, useEffect } from "react"

export const useImage=(imageKey:string)=>{
    const [loading,setLoading]=useState(false)
    const [imageURL,setImageURL]=useState<any>(null)

    useEffect(()=>{
        const sendRequest=async ()=>{
            try{
                setLoading(true)
                const response=await fetch(`https://${import.meta.env.VITE_S3_BUCKET_NAME}.s3.${import.meta.env.VITE_S3_BUCKET_REGION}.amazonaws.com/${imageKey}`)
                const blob=await response.blob()
                setImageURL(URL.createObjectURL(blob))
                setLoading(false)
            } catch(e){
                console.log(e)
                setLoading(false)
            }
        }

        sendRequest()
    },[])

    return {
        loading,
        imageURL
    }
}