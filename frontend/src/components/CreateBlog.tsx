
import DynamicTextarea from "./DynamicTextArea"

// temporary
type CreatePostInput={
    title:string,
    content:string,
    file:any
}

type props={
    blogDetails:CreatePostInput
    onChangeTitle:(e:any)=>void,
    onChangeDescr:(e:any)=>void,
    onChangeImage:(e:any)=>void,
    sendRequest:()=>void
}

function CreateBlog({onChangeTitle,onChangeDescr,sendRequest,onChangeImage,blogDetails}:props){

    let link=null
    if(blogDetails.file!==null){
        link=window.URL.createObjectURL(blogDetails.file)
    }

    return(
        <div className="flex flex-col px-20 mt-10 sm:px-40 lg:px-60 xl:px-80 md-mt-14">
            <DynamicTextarea placeholder="Title" className="text-3xl resize-y font-semibold border-l-[1px] pl-2 border-gray-200 focus:outline-none sm:text-5xl" onChange={onChangeTitle} />
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
                <img src={link!==null ? link : ""} className="w-80"/>
            </div>
            <DynamicTextarea placeholder="Tell your story..." className="text-lg resize-y font-semibold pl-2 mb-8 border-gray-200 focus:outline-none md:text-xl" onChange={onChangeDescr} />
            <button className='bg-green-500 w-20 text-white text-sm px-2.5 py-1 rounded-2xl mr-8 hover:opacity-80 mb-5 md:w-24 sm:text-base' onClick={sendRequest}>Publish</button>
        </div>
    )
}

export default CreateBlog