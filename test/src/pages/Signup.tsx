import { useState } from 'react';
import { Checkbox } from '@chakra-ui/react';
import { Input, InputGroup, Span } from '@chakra-ui/react';
import { HStack, Separator, Stack, Text } from '@chakra-ui/react';

import { FacebookIcon } from '@/components/CustomIcons';
import { GoogleIcon } from '@/components/CustomIcons';
import { Box, Typography, Button, Link } from '@mui/material';

import {
    PasswordInput,
    PasswordStrengthMeter,
} from '@/components/ui/password-input';
import { LuUser, LuMail, LuLockKeyhole } from 'react-icons/lu';

const MAX_CHARACTERS = 15;

export default function Signup() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className="min-h-screen w-screen bg-black p-0 m-0 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center w-[25rem] px-8 py-5 border-[1px] border-gray-600">
                <div className="text-left w-full">
                    <h2 className="font-roboto text-2xl font-semibold">
                        Sign Up
                    </h2>
                </div>
                <Separator className="w-full border-[1px] bg-gray-500 my-2" />
                <div>
                    <InputGroup
                        startElement={<LuUser />}
                        className="mt-2 mb-2"
                        endElement={
                            <Span
                                className="mr-1"
                                color="fg.muted"
                                textStyle="xs"
                            >
                                {username.length} / {MAX_CHARACTERS}
                            </Span>
                        }
                    >
                        <Input
                            placeholder="Username"
                            className="border-[1px] border-gray-500 text-sm"
                            size={'sm'}
                            css={{ '--focus-color': 'lime' }}
                            value={username}
                            maxLength={MAX_CHARACTERS}
                            onChange={e => {
                                setUsername(
                                    e.currentTarget.value.slice(
                                        0,
                                        MAX_CHARACTERS
                                    )
                                );
                            }}
                        />
                    </InputGroup>
                    <InputGroup className="my-2" startElement={<LuMail />}>
                        <Input
                            placeholder="Email"
                            className="border-[1px] border-gray-500 text-sm"
                            size={'sm'}
                            css={{ '--focus-color': 'lime' }}
                        />
                    </InputGroup>
                    <div>
                        <InputGroup
                            className="flex flex-row items-center mt-2 mb-4"
                            startElement={<LuLockKeyhole />}
                        >
                            <PasswordInput
                                placeholder="Password"
                                className="border-[1px] border-gray-500 text-sm"
                                size={'sm'}
                                css={{ '--focus-color': 'lime' }}
                                onChange={e => {
                                    setPassword(e.currentTarget.value);
                                }}
                            />
                        </InputGroup>
                        <PasswordStrengthMeter value={2} />
                    </div>
                    <Checkbox.Root
                        className="flex flex-row items-center"
                        variant={'outline'}
                        colorPalette={'blue'}
                    >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control className="border-[1px] border-blue-300 w-4 h-4 cursor-pointer" />
                        <Checkbox.Label className="text-sm font-roboto">
                            I want to receive updates via email.
                        </Checkbox.Label>
                    </Checkbox.Root>
                    <button className="my-4 py-2 rounded-lg w-full bg-white text-slate-800 text-xs hover:opacity-75 active:opacity-60">
                        Sign Up
                    </button>
                </div>
                <Stack className="w-full">
                    <HStack>
                        <Separator
                            flex="1"
                            className="border-[1px] bg-red-200"
                        />
                        <Text
                            flexShrink="0"
                            className="text-xs text-gray-100 opacity-50"
                        >
                            or
                        </Text>
                        <Separator
                            flex="1"
                            className="border-[1px] bg-red-200"
                        />
                    </HStack>
                </Stack>
                <Box
                    className="w-full"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        marginTop: '1rem',
                    }}
                >
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => alert('Sign up with Google')}
                        startIcon={<GoogleIcon />}
                    >
                        Sign up with Google
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => alert('Sign up with Facebook')}
                        startIcon={<FacebookIcon />}
                    >
                        Sign up with Facebook
                    </Button>
                    <Typography sx={{ textAlign: 'center', fontSize: '14px' }}>
                        Already have an account?{' '}
                        <Link
                            href="/material-ui/getting-started/templates/sign-in/"
                            variant="body2"
                            sx={{ alignSelf: 'center' }}
                        >
                            Sign in
                        </Link>
                    </Typography>
                </Box>
            </div>
        </div>
    );
}
