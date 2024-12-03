
type Props={
    placeholder:string | undefined
    title:string | undefined,
    onChange:(e:any)=>void
}

function Input({title,placeholder,onChange}:Props){
    return(
        <>
            <div className="flex flex-col justify-center items-center my-2 w-[300px] md:w-1/2">
                {title!=="" || title!==undefined ? <p className="w-[100%] text-left mb-1.5 text-base font-semibold">{title}</p> : null}
                <input onChange={onChange} className="w-[100%] border border-gray-300 rounded-md pl-3 py-1.5 text-sm focus:outline-gray-400 focus:outline-1" type="text" placeholder={placeholder} />
            </div>
        </>
    )
}

export default Input