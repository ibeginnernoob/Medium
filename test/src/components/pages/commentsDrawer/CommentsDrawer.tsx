import { useRef } from 'react';
import {
	Button,
    CloseButton,
    Drawer,
    Portal,
    Stack,
    Separator,
} from '@chakra-ui/react';
import SimpleTextEditor from '../../SimpleTextEditor';
import MenuComponent from './DialogMenu';
import CommentCard from './CommentCard';

export default function CommentsDrawer() {
	const drawerContentRef = useRef(null)
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
                            <Separator className="mx-5 border-white opacity-15 border-[0.25px]" />
                            <Drawer.Body ref={drawerContentRef} className="flex flex-col gap-2 mt-3 px-6 w-full">
                                <SimpleTextEditor />
								<MenuComponent />                                
								<Separator className="border-white opacity-15 border-[0.25px]" />
								<CommentCard />
                            </Drawer.Body>
                            <Drawer.Footer></Drawer.Footer>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </div>
    );
}
