import { Link } from 'react-router';

import Spinner from './Spinner';

import { useImage } from '../hooks/fetchAWS';
import NoImageBlogCard from './NoImageBlogCard';
import ImageBlogCard from './ImageBlogCard';

type props = {
    authorName: string;
    publishDate: string;
    title: string;
    description: string;
    id: string;
    imageKey: string;
    saved: boolean | string;
    savePost: (postId: string) => void;
    userBlog?: boolean;
    deletePost?: (postId: string) => void;
};

function BlogCard({
    authorName,
    publishDate,
    title,
    description,
    id,
    imageKey,
    saved,
    savePost,
    userBlog,
    deletePost,
}: props) {
    if (imageKey === 'NA') {
        return (
            <Link to={`/blog/${id}`}>
                <NoImageBlogCard
                    authorName={authorName}
                    publishDate={publishDate}
                    title={title}
                    description={description}
                    id={id}
                    saved={saved}
                    savePost={savePost}
                    userBlog={userBlog}
                    deletePost={deletePost}
                />
            </Link>
        );
    } else {
        const { loading, imageURL } = useImage(imageKey);

        if (loading) {
            return (
                <div>
                    <Spinner />
                </div>
            );
        }

        return (
            <Link to={`/blog/${id}`}>
                <ImageBlogCard
                    authorName={authorName}
                    publishDate={publishDate}
                    title={title}
                    description={description}
                    id={id}
                    imageURL={imageURL}
                    saved={saved}
                    savePost={savePost}
                    userBlog={userBlog}
                    deletePost={deletePost}
                />
            </Link>
        );
    }
}

export default BlogCard;
