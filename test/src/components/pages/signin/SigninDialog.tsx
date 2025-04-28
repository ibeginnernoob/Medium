import { Dispatch, SetStateAction } from "react";
import { useState, useRef } from "react";
import { Dialog, Portal, Button } from "@chakra-ui/react";
import SigninCard from "./SigninCard";

const SigninDialog = ({ open, setOpen } : {
	open: boolean,
	setOpen: Dispatch<SetStateAction<boolean>>
}) => {
	const ref = useRef<HTMLInputElement>(null)
    return (
        <Dialog.Root lazyMount open={open} initialFocusEl={() => ref.current} onOpenChange={e => setOpen(e.open)}>            
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content className="w-fit pt-5">                        
                        <Dialog.Body>                            
							<SigninCard ref={ref} />
                        </Dialog.Body>                         
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};

export default SigninDialog