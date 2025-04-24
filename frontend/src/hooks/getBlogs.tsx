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

export const useBlogs = (updateTrigger: any) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Posts>([]);

    useEffect(() => {
        const sendRequest = async () => {
            const response = await axios.get(
                `${BACKEND_URL}/api/v1/blog/bulk`,
                {
                    headers: {
                        Authorization: localStorage.getItem('mediumToken'),
                    },
                }
            );

            setPosts(response.data.posts);
            setLoading(false);
        };

        sendRequest();
    }, [updateTrigger]);

    return {
        loading: loading,
        posts: posts,
    };
};
