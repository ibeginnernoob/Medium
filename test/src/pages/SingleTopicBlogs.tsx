import ThickBlog from "@/components/pages/blogs/ThickBlog";
import ThinBlog from "@/components/pages/blogs/ThinBlog";

export default function Blogs() {
    return (
        <div>
			<div className='flex flex-row justify-between items-center pt-40 px-24'>
				<ThickBlog />
				<ThickBlog />
			</div>
			<div className="mt-10 flex flex-row justify-between items-center px-24">
				<ThinBlog />
				<ThinBlog />
				<ThinBlog />
			</div>
		</div>
    );
}
