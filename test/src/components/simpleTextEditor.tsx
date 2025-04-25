import { useState } from 'react';
import { Button } from '../components/lovableRequirements/button';
import { Bold, Italic } from 'lucide-react';
import { Textarea } from '../components/lovableRequirements/textarea';

export default function SimpleTextEditor() {
    const [text, setText] = useState('This does not work!');

    return (
        <div className="flex flex-col items-center w-full bg-gray-100 rounded-lg">
            <Textarea
                placeholder="What are your thoughts?"
                value={text}
                onChange={e => setText(e.target.value)}
                className="min-h-[10rem] bg-gray-100 text-black resize-none rounded-t-lg rounded-b-none border-0 text-sm font-roboto pt-4 px-3 placeholder:text-gray-400"
            />
            <div className='flex flex-row justify-between items-center w-full px-3 pt-2 pb-4'>
                <div className="flex flex-row items-center gap-2">
                    <Button                        
                        size="icon"
                        className="h-8 w-8 rounded-md bg-gray-100 hover:bg-gray-300"
                    >
                        <Bold className='' color='black' />
                    </Button>
                    <Button                        
                        size="icon"
                        className="h-8 w-8 rounded-md bg-gray-100 hover:bg-gray-300"
                    >
                        <Italic className='' color='black' />
                    </Button>
                </div>

                <div className="flex flex-row items-center gap-6">
                    <Button className="text-xs p-0 m-0 font-roboto h-fit opacity-100 text-black bg-gray-100 hover:opacity-80">
                        Cancel
                    </Button>
                    <Button variant={'default'} className="text-xs px-2 py-1 font-roboto h-fit text-white bg-gray-800 hover:bg-gray-800 hover:opacity-80">
                        Respond
                    </Button>
                </div>
            </div>
        </div>
    );
}
