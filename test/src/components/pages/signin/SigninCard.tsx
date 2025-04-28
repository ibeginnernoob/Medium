import { useState } from 'react';
import { Input, InputGroup, Checkbox } from '@chakra-ui/react';
import { HStack, Separator, Stack, Text } from '@chakra-ui/react';

import { FacebookIcon } from '@/components/CustomIcons';
import { GoogleIcon } from '@/components/CustomIcons';
import { Box, Typography, Button, Link } from '@mui/material';

import { PasswordInput } from '@/components/ui/password-input';
import { LuMail, LuLockKeyhole } from 'react-icons/lu';

export default function SigninCard({ ref } : {
	ref: React.RefObject<HTMLInputElement | null>
}) {
	const [userDetails, setUserDetails] = useState({
		email: '',
		password: ''
	})
    return (
        <div className="flex flex-col items-center w-[25rem] px-8 py-5 border-[1px] border-gray-600">
            <div className="text-left w-full">
                <h2 className="font-roboto text-2xl font-semibold">Sign In</h2>
            </div>
            <Separator className="w-full border-[1px] bg-gray-500 my-2" />
            <div className="w-full">
                <InputGroup className="my-2" startElement={<LuMail />}>
                    <Input
						onChange={(e) => {
							setUserDetails(prevDetails => {
								return {
									...prevDetails,
									email: e.target.value	
								}
							})
						}}
						ref={ref}
                        placeholder="Email"
                        className="border-[1px] border-gray-500 text-sm"
                        size={'sm'}
                        css={{ '--focus-color': 'lime' }}
                    />
                </InputGroup>
                <div>
                    <InputGroup
                        className="flex flex-row items-center mt-2 mb-1"
                        startElement={<LuLockKeyhole />}
                    >
                        <PasswordInput
							onChange={(e) => {
								setUserDetails(prevDetails => {
									return {
										...prevDetails,
										password: e.target.value	
									}
								})
							}}
                            placeholder="Password"
                            className="border-[1px] border-gray-500 text-sm"
                            size={'sm'}
                            css={{ '--focus-color': 'lime' }}
                        />
                    </InputGroup>
                </div>
                <div className="w-full flex flex-row justify-between items-center mt-3 mb-1">
                    <Checkbox.Root
                        className="flex flex-row items-center"
                        variant={'outline'}
                        colorPalette={'blue'}
                    >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control className="border-[1px] border-blue-300 w-4 h-4 cursor-pointer" />
                        <Checkbox.Label className="text-sm font-roboto">
                            Remember me
                        </Checkbox.Label>
                    </Checkbox.Root>
                    <Link
                        variant="body2"
                        sx={{
                            alignSelf: 'center',
                            fontSize: '14px',
                            cursor: 'pointer',
                            color: '#61AFEF',
                        }}
                    >
                        Forgot Password
                    </Link>
                </div>
                <button className="mt-3 mb-2 py-2 rounded-lg w-full bg-white text-slate-800 text-xs hover:opacity-75 active:opacity-60">
                    Sign In
                </button>
            </div>
            <Stack className="w-full">
                <HStack>
                    <Separator flex="1" className="border-[1px] bg-red-200" />
                    <Text
                        flexShrink="0"
                        className="text-xs text-gray-100 opacity-50"
                    >
                        or
                    </Text>
                    <Separator flex="1" className="border-[1px] bg-red-200" />
                </HStack>
            </Stack>
            <Box
                className="w-full"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    marginTop: '0.5rem',
                }}
            >
                <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => alert('Sign up with Google')}
                    startIcon={<GoogleIcon />}
                >
                    Sign in with Google
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => alert('Sign up with Facebook')}
                    startIcon={<FacebookIcon />}
                >
                    Sign in with Facebook
                </Button>
                <Typography sx={{ textAlign: 'center', fontSize: '14px' }}>
                    Don't have an account yet?{' '}
                    <Link
                        variant="body2"
                        sx={{
                            alignSelf: 'center',
                            cursor: 'pointer',
                            color: '#61AFEF',
                        }}
                    >
                        Sign up
                    </Link>
                </Typography>
            </Box>
        </div>
    );
}
