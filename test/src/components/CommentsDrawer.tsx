import {
    Button,
    CloseButton,
    Drawer,
    Input,
    Portal,
    Stack,
    Separator,
    Menu,
} from '@chakra-ui/react';
import SimpleTextEditor from './simpleTextEditor';

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
                            <div className="flex flex-row">
                                <Drawer.Header className="m-0 w-full">
                                    <Drawer.Title className="text-xl font-roboto w-[10rem] font-medium">
                                        {'Responses (7)'}
                                    </Drawer.Title>
                                </Drawer.Header>
                                <Drawer.CloseTrigger asChild>
                                    <CloseButton
                                        size="2xl"
                                        className="mt-[-0.3rem]"
                                    />
                                </Drawer.CloseTrigger>
                            </div>
                            <Separator className="mx-5 border-white border-[0.25px]" />
                            <Drawer.Body className="flex flex-col gap-2 mt-3 px-6 w-full">
                                <SimpleTextEditor />
                                <Menu.Root>
                                    <Menu.Trigger asChild>
                                        <Button variant="outline" size="sm">
                                            Open
                                        </Button>
                                    </Menu.Trigger>
                                    <Portal>
                                        <Menu.Positioner>
                                            <Menu.Content>
                                                <Menu.Item value="new-txt">
                                                    New Text File
                                                </Menu.Item>
                                                <Menu.Item value="new-file">
                                                    New File...
                                                </Menu.Item>
                                                <Menu.Item value="new-win">
                                                    New Window
                                                </Menu.Item>
                                                <Menu.Item value="open-file">
                                                    Open File...
                                                </Menu.Item>
                                                <Menu.Item value="export">
                                                    Export
                                                </Menu.Item>
                                            </Menu.Content>
                                        </Menu.Positioner>
                                    </Portal>
                                </Menu.Root>
                            </Drawer.Body>
                            <Drawer.Footer></Drawer.Footer>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </div>
    );
}
