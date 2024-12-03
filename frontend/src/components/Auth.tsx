import { Link } from "react-router"

import Input from "./Input"

type props={
    setFunc:any,
    type:string,
    sendRequest:()=>void
}

function Auth({setFunc,type,sendRequest}:props){

    return(
        <div className="flex flex-row">
            <div className="fixed left-0 top-0 bottom-0 flex flex-col w-[100%] justify-center items-center lg:w-1/2">
                <h1 className="text-4xl font-semibold">{type==="signin"?"Log in to your account":"Create your account"}</h1>
                <h3 className="mb-5 text-md text-gray-500">{type==="signin"?"Don't have an account yet?":"Already have an account?"} <Link className="underline" to={type==="signin"?"/signup":"/signin"}>{type==="signin"?"Signup":"Login"}</Link></h3>
                {
                    type==="signin" ? null : <Input placeholder="Enter your username" title="Username" onChange={(e:any)=>{
                        setFunc((prevInputs:{
                            name?:string,
                            email:string,
                            password:string
                        })=>{
                            return {
                                ...prevInputs,
                                name:e.target.value
                            }
                        })
                    }}/>
                }
                <Input placeholder="Enter your email" title="Email" onChange={(e:any)=>{
                    setFunc((prevInputs:{
                        name?:string,
                        email:string,
                        password:string
                    })=>{
                        return {
                            ...prevInputs,
                            email:e.target.value
                        }
                    })
                }}/>
                <Input placeholder="" title="Password" onChange={(e:any)=>{
                    setFunc((prevInputs:{
                        name?:string,
                        email:string,
                        password:string
                    })=>{
                        return {
                            ...prevInputs,
                            password:e.target.value
                        }
                    })
                }}/>
                <button onClick={sendRequest} className="mt-4 w-1/2 py-2.5 bg-black text-white rounded-md text-sm hover:opacity-80 ">{type==="signin"?"Login":"Sign Up"}</button>
            </div>
            <div className="fixed right-0 top-0 bottom-0 w-0 bg-gray-100 flex flex-col justify-center items-center lg:w-1/2">
                <h2 className="w-2/3 text-2xl font-bold">
                    "The customer service I received was exceptional. The support team went above and beyond to address my concerns."
                </h2>
                <div className="w-2/3 mt-4">
                    <p className="text-base font-semibold">Jules Winnfield</p>
                    <p className="text-sm text-gray-500">CEO, Acme Inc.</p>
                </div>
            </div>
        </div>
    )
}

export default Auth