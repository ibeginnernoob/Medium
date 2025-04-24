import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
// import { CreatePostInput } from "@adheil_gupta/medium-zod"

import AppBar from '../components/AppBar';
import CreateBlog from '../components/CreateBlog';
import Spinner from '../components/Spinner';

import { BACKEND_URL } from '../config';

// temporary
type CreatePostInput = {
    id: string;
    title: string;
    content: string;
    blogImageKey: string;
    file: any;
};

function UpdateBlog() {
    const navigate = useNavigate();

    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [blogDetails, setBlogDetails] = useState<CreatePostInput>({
        id: '',
        title: '',
        content: '',
        blogImageKey: '',
        file: null,
    });

    useEffect(() => {
        setLoading(true);
        const getBlogDetails = async () => {
            try {
                const response = await axios.get(
                    `${BACKEND_URL}/api/v1/blog/${id}`,
                    {
                        headers: {
                            Authorization: localStorage.getItem('mediumToken'),
                        },
                    }
                );
                setBlogDetails(prevData => {
                    return {
                        ...prevData,
                        title: response.data.post.title,
                        id: response.data.post.id,
                        content: response.data.post.content,
                        blogImageKey: response.data.post.blogImageKey,
                    };
                });
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        };

        getBlogDetails();
    }, []);

    const onChangeTitle = (e: any) => {
        setBlogDetails(prevDetails => {
            return {
                ...prevDetails,
                title: e.target.value,
            };
        });
    };

    const onChangeDescr = (e: any) => {
        setBlogDetails(prevDetails => {
            return {
                ...prevDetails,
                content: e.target.value,
            };
        });
    };

    const onChangeImage = (e: any) => {
        setBlogDetails(prevDetails => {
            return {
                ...prevDetails,
                file: e.target.files[0],
            };
        });
    };

    const sendRequest = async () => {
        try {
            setLoading(true);

            if (blogDetails.file !== null) {
                const getUploadURLResponse = await axios.get(
                    `${import.meta.env.VITE_S3_UPLOAD_URL}`
                );

                if (
                    getUploadURLResponse.status !== 200 ||
                    !getUploadURLResponse
                ) {
                    throw new Error('Signed URL could not be retrived.');
                }

                const S3UploadURL = getUploadURLResponse.data.uploadURL;

                const objectKey = S3UploadURL.split('/')[3].split('?')[0];

                const S3UploadResponse = await axios.put(
                    S3UploadURL,
                    blogDetails.file,
                    {
                        headers: {
                            'Content-Type': blogDetails.file.type,
                        },
                    }
                );

                if (!S3UploadResponse || S3UploadResponse.status !== 200) {
                    throw new Error('Image could not be uploaded to S3.');
                }

                const response = await axios.put(
                    `${BACKEND_URL}/api/v1/blog/update/${id}`,
                    {
                        title: blogDetails.title,
                        content: blogDetails.content,
                        blogImageKey: objectKey,
                    },
                    {
                        headers: {
                            Authorization: localStorage.getItem('mediumToken'),
                            'Content-Type': 'application/json',
                        },
                    }
                );

                if (response.status !== 201) {
                    throw new Error('Post update failed!');
                }
            } else {
                const response = await axios.put(
                    `${BACKEND_URL}/api/v1/blog/update/${id}`,
                    {
                        title: blogDetails.title,
                        content: blogDetails.content,
                    },
                    {
                        headers: {
                            Authorization: localStorage.getItem('mediumToken'),
                            'Content-Type': 'application/json',
                        },
                    }
                );

                if (response.status !== 201) {
                    throw new Error('Post update failed!');
                }
            }

            setLoading(false);
            navigate('/user-blogs');
        } catch (e) {
            console.log(e);
            alert('Post update failed!');
            navigate('/user-blogs');
        }
    };

    if (loading) {
        return (
            <div>
                <Spinner />
            </div>
        );
    }

    return (
        <div>
            <AppBar />
            <CreateBlog
                updating={true}
                blogDetails={blogDetails}
                onChangeImage={onChangeImage}
                onChangeTitle={onChangeTitle}
                onChangeDescr={onChangeDescr}
                sendRequest={sendRequest}
            />
        </div>
    );
}

export default UpdateBlog;
