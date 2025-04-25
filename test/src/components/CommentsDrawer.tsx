import {
    Button,
    CloseButton,
    Drawer,
    Input,
    Portal,
    Stack,
	Separator
} from '@chakra-ui/react';


export default function CommentsDrawer() {
    return (
        <div>
            <Drawer.Root size={'sm'}>
                <Drawer.Trigger asChild>
                    <Button variant="outline" size="sm">
                        Open Drawer
                    </Button>
                </Drawer.Trigger>
                <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                        <Drawer.Content>
                            <div className='flex flex-row'>
								<Drawer.Header className='m-0 w-full'>
									<Drawer.Title className='text-xl font-roboto w-[10rem] font-medium'>{'Responses (7)'}</Drawer.Title>
								</Drawer.Header>
								<Drawer.CloseTrigger asChild>
									<CloseButton size="2xl" className='mt-[-0.3rem]' />
								</Drawer.CloseTrigger>
							</div>
							<Separator className='mx-5 border-white border-[0.25px]' />
                            <Drawer.Body>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <Stack mt="5">
                                    <Input
                                        defaultValue="Naruto"
                                        placeholder="First name"
                                    />
                                    <Input placeholder="Email" />
                                </Stack>
                            </Drawer.Body>
                            <Drawer.Footer>
                                <Button variant="outline">Cancel</Button>
                                <Button>Save</Button>
                            </Drawer.Footer>                            
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </div>
    );
}
