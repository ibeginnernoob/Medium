import '../App.css';
import { AvatarIcon } from '@/components/ui/icons';
import { BookOpen } from 'lucide-react';
import { InteractiveHoverButton } from '../components/magicui/interactive-hover-button';
import { InputGroup, Input } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';
import { IoCreateOutline } from "react-icons/io5";
import { Tooltip } from '@mui/material';

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className='flex flex-row items-center gap-6'>
				<div className="flex flex-row items-center">
					<BookOpen className="h-5 w-5" color="white" strokeWidth={1.2} />
					<span className="ml-2 text-base font-roboto text-white">
						BlogVerse
					</span>
				</div>
				<div>
					<InputGroup className='flex flex-row items-center' startElement={<LuSearch className='ml-1' size={18} />}>
						<Input className='h-fit py-2 w-[15rem] px-5 border border-white border-opacity-20 font-roboto text-xs font-light rounded-[10rem]' placeholder="Search" />
					</InputGroup>
				</div>
			</div>
            <div className='flex flex-row items-center gap-6'>
				<Tooltip title='Write' arrow>
					<IoCreateOutline size={20} className='cursor-pointer' />
				</Tooltip>
				<AvatarIcon
					name='Adheil'
					bgColor='green.700'
					size='xs'
					styles='h-7 w-7 flex cursor-pointer'
					textStyles='text-sm'					
				/>
			</div>
			{/* <InteractiveHoverButton className="text-xs bg-rgba(0, 0, 0, 0.8) text-white py-1.5 px-0 border-gray-600 w-20 rounded-md">
                Sign In
            </InteractiveHoverButton> */}
        </nav>
    );
}
