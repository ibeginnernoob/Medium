import BlogThumbnail from '@/../public/test-thumbnail2.png'
import { AnimatedHeart, Comments, Remove, BookMark, Options, AvatarIcon } from "@/components/ui/icons";

export default function BlogCard({ likeNumber = '0', commentNumber = '0', authorName, title, description, date } : {
	likeNumber: string,
	commentNumber: string,
	authorName: string,
	title: string,
	description: string,
	date: string
}) {
	return (
		<div className="flex flex-row items-center w-fit gap-5 pt-8 pb-4 cursor-pointer border-b-[1px] border-[#3F3F46]">
			<div className="flex flex-col gap-2 w-[35rem]">
				<div className="flex flex-row items-center gap-3">
					<AvatarIcon
						name='Adheil'
						bgColor='green.600'
						styles="h-5 w-5"
						textStyles=''
						variant="solid"
					/>
					<p className="text-xs text-white font-roboto font-light">{authorName}</p>
				</div>
				<h1 className="font-roboto text-2xl font-semibold">{title}</h1>
				<h2 className="font-roboto text-[15px] text-gray-100">{description}</h2>
				<div className="w-full flex flex-row items-center justify-between">
					<div className="flex flex-row items-center gap-6">
						<p className="text-[12px] font-light">{date}</p>
						<div className="flex flex-row items-center">
							<AnimatedHeart number={likeNumber} />
							<p className="text-[12px] font-light ml-[-0.3rem]">12.2k</p>
						</div>
						<div className="flex flex-row items-center gap-3">
							<Comments number={commentNumber} />
							<p className="text-[12px] font-light ml-[-0.3rem]">256</p>
						</div>
					</div>
					<div className="flex flex-row items-center gap-8">
						<Remove />
						<BookMark />
						<Options />
					</div>
				</div>
			</div>
			<img src={BlogThumbnail} alt="Blog Thumbnail" />			
		</div>
	)
}