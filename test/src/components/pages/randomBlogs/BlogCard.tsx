import { useState } from "react";
import { Avatar } from "@chakra-ui/react"
import BlogThumbnail from '@/../public/test-thumbnail2.png'

export default function BlogCard() {
	const [isClick, setClick] = useState(false)

	return (
		<div className="flex flex-row items-center w-fit gap-3 cursor-pointer border-[1px] border-red-100">
			<div className="flex flex-col gap-2 w-[35rem]">
				<div className="flex flex-row items-center gap-3">
					<Avatar.Root backgroundColor={'green.600'} className="h-5 w-5" size={'xs'} variant={'solid'}>
						<Avatar.Fallback className="text-[10px] text-white" name="Adheil" />
						<Avatar.Image />
					</Avatar.Root>
					<p className="text-xs text-white font-roboto">Adheil Gupta</p>
				</div>
				<h1 className="font-roboto text-2xl font-semibold">Revolutionizing software development with cutting-edge tools</h1>
				<h2 className="font-roboto text-[15px] text-gray-100 font-light">Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software.</h2>
				<div className="flex flex-row">
					<p className="text-[13px]">Dec 21, 2024</p>
				</div>
			</div>
			<img src={BlogThumbnail} alt="blog thumbnail" />
		</div>
	)
}