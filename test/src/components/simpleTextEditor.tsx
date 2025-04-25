import React, { useState } from 'react';
import { Button } from '../components/lovableRequirements/button';
import { Bold, Italic } from 'lucide-react';
import { Textarea } from '../components/lovableRequirements/textarea';

export default function SimpleTextEditor() {
    const [text, setText] = useState('This does not work!');

    return (
        <div className="flex flex-col items-center w-fit bg-red-500 rounded-md">
            <Textarea
                placeholder="What are your thoughts?"
                value={text}
                onChange={e => setText(e.target.value)}
                className="min-h-[7.5rem] w-[20rem] resize-none border-0 text-sm placeholder:text-gray-400 "
            />
            <div className='flex flex-row justify-between items-center w-full px-3 py-2'>
                <div className="flex gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-md"
                    >
                        <Bold className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-md"
                    >
                        <Italic className="h-4 w-4" />
                    </Button>
                </div>

                <div className="flex gap-2">
                    <Button variant="ghost" className="text-gray-500">
                        Cancel
                    </Button>
                    <Button className="bg-gray-200 text-gray-500 hover:bg-gray-300">
                        Respond
                    </Button>
                </div>
            </div>
        </div>
    );
}
