import ThickBlog from "@/components/pages/blogs/ThickBlog";
import ThinBlog from "@/components/pages/blogs/ThinBlog";

export default function Blogs() {
    return (
        <div className='flex flex-row gap-10 pt-40 px-40'>
            <ThickBlog />
			<ThinBlog />
        </div>
    );
}
