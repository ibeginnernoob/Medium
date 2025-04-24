import { useState } from 'react';

import getFormattedDate from '../format/getFormattedDate';
import get_DP from '../format/getDPText';
import { useNavigate } from 'react-router';
import ConfirmationModal from './ConfirmationModal';

type props = {
    authorName: string;
    publishDate: string;
    title: string;
    description: string;
    id: string;
    imageURL: string;
    saved: boolean | string;
    savePost: (postId: string) => void;
    userBlog?: boolean;
    deletePost?: (postId: string) => void;
};

function ImageBlogCard({
    authorName,
    publishDate,
    title,
    description,
    id,
    imageURL,
    saved,
    savePost,
    userBlog,
    deletePost,
}: props) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <ConfirmationModal
                open={open}
                setOpen={setOpen}
                deletePost={deletePost}
                id={id}
            />
            <div className="mx-10 flex flex-col items-center py-6 border-b-[1px] border-gray-200 cursor-pointer md:justify-between md:mx-24 sm:flex-row">
                <div className="w-full flex flex-col md:w-[70%]">
                    <div className="flex flex-row items-center mb-3">
                        <div className="w-6 h-6 text-xs font-thin flex flex-row justify-center items-center rounded-full cursor-pointer hover:opacity-80 bg-black text-white">
                            {get_DP(authorName)}
                        </div>
                        <p className="px-1.5 text-sm">{authorName}</p>
                        {!userBlog ? <p>&#183;</p> : null}
                        {!userBlog ? (
                            <p className="text-sm text-gray-400 px-1.5">
                                Posted on {getFormattedDate(publishDate)}
                            </p>
                        ) : null}
                        {userBlog === true ? (
                            <>
                                <button
                                    className="mx-5 text-xs text-white bg-cyan-500 border-blue-400 border-[2px] px-2 py-1 rounded-2xl hover:opacity-80"
                                    onClick={e => {
                                        console.log('clicked');
                                        e.preventDefault();
                                        navigate(`/update/${id}`);
                                    }}
                                >
                                    Update
                                </button>
                                <button
                                    className="text-xs text-white bg-red-500 border-red-800 border-[2px] px-2 py-1 rounded-2xl hover:opacity-80"
                                    onClick={e => {
                                        setOpen(true);
                                        e.preventDefault();
                                    }}
                                >
                                    Delete
                                </button>
                            </>
                        ) : null}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2 md:text-2xl">
                            {title}
                        </h3>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-gray-500 md:text-md">
                                {description}
                            </p>
                            <div className="flex flex-row justify-start mr-6 items-center md:mr-12 sm:bottom-[30px] sm:right-[30%] md:right-[40%] lg:right-[30%] lg:bottom-[50px]">
                                <div className="cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={saved ? 'currentColour' : 'none'}
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.2}
                                        stroke="currentColor"
                                        className={`size-5 ${saved ? 'hover:opacity-60' : 'hover:opacity-30'}`}
                                        onClick={async e => {
                                            savePost(id);
                                            e.preventDefault();
                                        }}
                                    >
                                        {!saved ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                                            />
                                        ) : (
                                            <path
                                                fillRule="evenodd"
                                                d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                                                clipRule="evenodd"
                                            />
                                        )}
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-16 w-0 sm:w-auto">
                    <img src={imageURL} alt="Post Thumbnail" className="w-64" />
                </div>
            </div>
        </>
    );
}

export default ImageBlogCard;
