import { Options, AvatarIcon, AnimatedHeart } from '@/components/ui/icons';

export default function CommentCard() {
    return (
        <div>
            <div className="py-5 flex flex-col gap-3 border-b-[1px] border-white border-opacity-15">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-4">
                        <AvatarIcon
                            name="Adheil"
                            styles="h-8 w-8"
                            bgColor="green.800"
                        />
                        <div className="flex flex-col">
                            <p className="text-sm font-light">Adheil Gupta</p>
                            <p className="text-xs font-light">Dec 14,2014</p>
                        </div>
                    </div>
                    <div>
                        <Options />
                    </div>
                </div>
                <div className="text-xs font-roboto font-light">
                    So, what you are saying is that client-side application,
                    which only requires you to serve static files could not
                    withstand high-load, but moving it on ssr and thus
                    introducing additional bottleneck on a smaller amount of
                    machines solved your problems? Well, I guess 3M people were
                    just using your app from single device...
                </div>
                <div className="flex flex-row items-center">
                    <AnimatedHeart number="726" />
                    <p className="font-roboto text-xs font-light ml-[-3px] mb-[-2px]">
                        726
                    </p>
                </div>
            </div>
        </div>
    );
}
