import { Tooltip } from '@mui/material';
import { Avatar } from '@chakra-ui/react';
import LikeButton from "@/components/AnimatedLikeButton";
import { PiChatFill } from 'react-icons/pi';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { CiBookmark } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";

export function AnimatedHeart({ number } : {
	number: string
}) {
	return (
		<Tooltip title={`${number} likes`}>
			<LikeButton />
		</Tooltip>
	)
} 

export function Comments({ number } : {
	number: string
}) {
	return (
		<Tooltip title={`${number} responses`} placement="top" arrow>
			<PiChatFill size={18} color="#9CA3AF" className="hover:opacity-80" />
		</Tooltip>
	)
}

export function Remove() {
	return (
		<Tooltip title="Show less like this" placement="top" arrow>
			<IoIosRemoveCircleOutline size={18} />
		</Tooltip>
	)
}

export function BookMark() {
	return (
		<Tooltip title="Save" placement="top" arrow>
			<CiBookmark size={18} />
		</Tooltip>
	)
}

export function Options() {
	return (
		<Tooltip title="More" placement="top" arrow>
			<SlOptions size={16} />
		</Tooltip>
	)
}

export function AvatarIcon({ bgColor, styles, size, variant } : {
	bgColor?: string,
	styles?: string,
	size?: 'xs' | 'sm' | 'md' | 'lg',
	variant?: 'outline' | 'solid' | 'subtle'
	textStyles?: string,
	name: string
}) {
	return (
		<Avatar.Root backgroundColor={bgColor} className={`${styles}`} size={size} variant={variant}>
			<Avatar.Fallback className="text-[10px] text-white" name="Adheil" />
			<Avatar.Image />
		</Avatar.Root>
	)
}