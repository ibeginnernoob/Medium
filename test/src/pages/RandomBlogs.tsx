import BlogCard from '@/components/pages/randomBlogs/BlogCard';

export default function Blogs() {
    return (
        <div className="ml-40 pt-40">
            <BlogCard
                likeNumber="12.2k"
                commentNumber="256"
                authorName="Adheil Gupta"
                title="Revolutionizing software development with cutting-edge tools"
                description="Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software."
                date="Dec 21,2024"
            />
        </div>
    );
}
