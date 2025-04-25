import { useState } from 'react';
import { Menu, Button } from '@chakra-ui/react';
import { FaChevronDown } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

interface option {
	text: string
}

type optionIndex = 0 | 1

const COMMENT_OPTIONS = [
	{
		text: 'Most Relevant'
	},
	{
		text: 'Most Recent'
	}
];

export default function MenuComponent() {
	const [currentOption, setCurrentOption] = useState<optionIndex>(0)
    return (
        <div>
            <Menu.Root>
                <Menu.Trigger asChild>
                    <Button variant="plain" size="sm" className='flex flex-row items-center text-xs font-roboto font-semibold'>
                        {COMMENT_OPTIONS[currentOption].text.toUpperCase()}
						<FaChevronDown />
                    </Button>
                </Menu.Trigger>
                <Menu.Positioner>
                    <Menu.Content>                        
						{
							COMMENT_OPTIONS.map((option: option, index) => {
								const checkedIndex = index as optionIndex;
								return (
									<Menu.Item
										key={index} 
										value={`${option.text}`}
										onClick={() => setCurrentOption(checkedIndex)}
										id='comDrawerMenu'
										className={`${checkedIndex !== currentOption && 'pl-[2rem]'} text-xs hover:text-green-400`}
									>
										{checkedIndex === currentOption && <TiTick className='' />}
										{`${option.text}`}
									</Menu.Item>
								)
							})
						}
                    </Menu.Content>
                </Menu.Positioner>
            </Menu.Root>
        </div>
    );
}
