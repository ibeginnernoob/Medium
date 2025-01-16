
import get_DP from "../format/getDPText"
import getFormattedDate from "../format/getFormattedDate"

type props={
    title:string,
    description:string,
    publishDate:string,
    authorName:string,
    imageURL:any
}

function BlogDetails({title,description,publishDate,authorName,imageURL}:props){
    return(
        <div className="flex flex-col px-20 py-6 lg:flex-row lg:pl-20 lg:pr-56 lg:justify-between">
            <div className="w-[100%] mr-10 lg:w-[75%]">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="text-base text-gray-500 my-3">Posted on {getFormattedDate(publishDate)}</p>
                <div className="w-full flex justify-center">
                    {imageURL!==null ? <img className="w-[400px] my-5" src={imageURL} alt="Image" /> : null}
                </div>
                <p className="mt-5 mb-10">
                    {description}
                </p>
            </div>
            <div>
                <p className="text-base font-semibold lg:text-lg">Author</p>
                <div className="flex flex-row items-center mt-3 lg:mt-6">
                    <div className='w-7 h-7 mr-3 text-sm flex flex-row justify-center items-center rounded-full cursor-pointer hover:opacity-80 bg-black text-white'>{get_DP(authorName)}</div>
                    <h2 className="text-lg font font-extrabold lg:text-xl">{authorName}</h2>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails