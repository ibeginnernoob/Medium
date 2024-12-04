

type props={
    title:string,
    description:string,
    publishDate:string,
    authorName:string
}

function BlogDetails({title,description,publishDate,authorName}:props){
    return(
        <div className="flex flex-col px-20 py-6 lg:flex-row lg:pl-20 lg:pr-56 lg:justify-between">
            <div className="w-[100%] mb-4 mr-20 lg:w-[75%]">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="text-base text-gray-500 my-3">Posted on {publishDate}</p>
                <p>
                    {description}
                </p>
            </div>
            <div>
            <p className="font-semibold">Author</p>
            <div className="flex flex-row mt-6">
                <div className="w-7 h-7 rounded-full bg-gray-100 mr-3" />
                <h2 className="text-2xl font font-extrabold">{authorName}</h2>
            </div>
            </div>
        </div>
    )
}

export default BlogDetails