
import AccountDP from '../assets/logic.jpg'
import PostThumbnail from '../assets/docker.png'
import { Link } from 'react-router'

type props={
    authorName:string,
    publishDate:string,
    title:string,
    description:string,
    id:string
}

function BlogCard({authorName,publishDate,title,description,id}:props){
    return(
        <Link to={`blog/${id}`}>
            <div className="mx-24 flex flex-row items-center px-2 py-6 border-b-[1px] border-gray-200 cursor-pointer">
                <div className="w-[100%] md:w-auto">
                    <div className='flex flex-row items-center mb-3'>
                        {/* change account DP */}
                        <img src={AccountDP} alt="Account DP" className='w-6 rounded-full' />
                        <p className='px-1.5 text-sm'>{authorName}</p>
                        <p>&#183;</p>
                        <p className='text-sm text-gray-400 px-1.5'>{publishDate}</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold mb-1'>
                            {title}
                        </h3>
                        <p className='text-sm text-gray-500'>
                            {description}
                        </p>
                    </div>
                    <div className='mt-8 flex flex-row justify-end mr-12 items-center'>
                        <div className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                        </div>
                        <div className='ml-4 mr-4 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <div className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="16px" width="16px" version="1.1" id="Capa_1" viewBox="0 0 32.055 32.055">
                                <g>
                                    <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967   C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967   s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967   c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='ml-16 w-0 md:w-auto'>
                    {/* change post thumbnail */}
                    <img src={PostThumbnail} alt="Post Thumbnail" className='w-64' />
                </div>
            </div>
        </Link>
    )
}

export default BlogCard