import BlogThumbnail from '@/../public/test-thumbnail.jpg';

import { Avatar } from '@chakra-ui/react';

export default function ThinBlog() {
    return (
        <div className="border-[1px] border-gray-600 rounded-xl w-[22rem]">
            <img
                src={BlogThumbnail}
                alt="Blog Thumbnail"
                className="w-full rounded-t-lg"
            />
            <p className="mt-3 mb-2 ml-4 font-roboto text-xs text-white">
                Technology
            </p>
            <div className="pl-4 pr-8 h-[5.25rem]">
                <h2 className="font-roboto text-xl font-semibold text-white p-0 m-0">
                    Revolutionizing software development with cutting-edge tools
                </h2>
            </div>
            <div className="mt-3 h-[6.4rem]">
                <h3 className="pl-4 pr-8 text-sm text-gray-400">
                    Our latest engineering tools are designed to streamline
                    workflows and boost productivity. Discover how these
                    innovations. Hey bro my name is Adheil Gupta, what's your
                    name? Hey...
                </h3>
            </div>
            <div className="flex flex-row justify-between items-center pt-4 pl-4 pb-3">
                <div className="flex flex-row items-center gap-3">
                    <Avatar.Root size={'xs'} variant={'solid'}>
                        <Avatar.Fallback name="Adheil Gupta" />
                        <Avatar.Image />
                    </Avatar.Root>
                    <p className="text-xs font-roboto">Adheil Gupta</p>
                </div>
                <p className="mr-6 text-xs font-roboto">July 21, 2014</p>
            </div>
        </div>
    );
}
