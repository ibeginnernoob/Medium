import { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

type Post = {
    id: string;
    title: string;
    content: string;
    blogImageKey: string;
    publishDate: string;
    authorId: string;
    author: {
        name: string;
        email: string;
    };
    saved: boolean;
};

type Posts = Post[] | [];

export const useUserBlogs = (updateTrigger: any) => {
    const [userBlogs, setUserBlogs] = useState<Posts>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const sendRequest = async () => {
            const response = await axios.get(
                `${BACKEND_URL}/api/v1/blog/user-blogs`,
                {
                    headers: {
                        Authorization: localStorage.getItem('mediumToken'),
                    },
                }
            );

            setUserBlogs(response.data.userBlogs);
            setLoading(false);
        };

        sendRequest();
    }, [updateTrigger]);

    return {
        loading,
        userBlogs,
    };
};
