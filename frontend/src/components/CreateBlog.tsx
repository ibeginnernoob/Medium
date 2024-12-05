
type props={
    onChangeTitle:(e:any)=>void,
    onChangeDescr:(e:any)=>void,
    sendRequest:()=>void
}

function CreateBlog({onChangeTitle,onChangeDescr,sendRequest}:props){

    return(
        <div className="flex flex-col px-80 pt-14">
            <textarea placeholder="Title" className="text-5xl resize-y font-semibold border-l-[1px] pl-2 mb-8 border-gray-200 focus:outline-none" onChange={onChangeTitle} />
            <textarea placeholder="Tell your story..." className="text-xl resize-y font-semibold pl-2 mb-8 border-gray-200 focus:outline-none" onChange={onChangeDescr} />
            <button className='bg-green-500 w-24 text-white text-base px-2.5 py-1 rounded-2xl mr-8 hover:opacity-80' onClick={sendRequest}>Publish</button>
        </div>

    )
}

export default CreateBlog