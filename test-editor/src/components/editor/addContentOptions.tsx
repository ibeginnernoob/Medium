import { Image, Youtube, Code, Braces } from 'lucide-react';

export default function AddContentOptions() {
    return (
        <div className="flex flex-row items-center gap-2">
            <button className="p-1.5 border border-solid border-green-600 rounded-full">
                <Image
                    className="text-green-600"
                    strokeWidth={'1.5px'}
                    size={18}
                />
            </button>
            <button className="p-1.5 border border-solid border-green-600 rounded-full">
                <Youtube
                    className="text-green-600"
                    strokeWidth={'1.5px'}
                    size={18}
                />
            </button>
            <button className="p-1.5 border border-solid border-green-600 rounded-full">
                <Code
                    className="text-green-600"
                    strokeWidth={'1.5px'}
                    size={18}
                />
            </button>
            <button className="p-1.5 border border-solid border-green-600 rounded-full">
                <Braces
                    className="text-green-600"
                    strokeWidth={'1.5px'}
                    size={18}
                />
            </button>
        </div>
    );
}
