'use client'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, useBreakpointValue, Box, useColorMode } from "@chakra-ui/react";
import { Click } from "./Click";
import React, { useEffect } from "react";
import { Clicks } from "./constants";

export const MobileNavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef<HTMLButtonElement>(null);
    const { colorMode, toggleColorMode } = useColorMode();


    const isLargerThanMd = useBreakpointValue({ base: false, md: true });

    useEffect(() => {
        if (isLargerThanMd && isOpen) {
            onClose();
        }
    }, [isLargerThanMd, isOpen, onClose]);

    return (
        <Box
        >
            <nav className="block md:hidden">
                <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
                    <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Nicholas Cheong
                    </span>

                    <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                        Menu
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Menu</DrawerHeader>

                            <DrawerBody>
                                <div>
                                    <Button className="md:font-medium md:flex md:flex-col  md:border md:border-gray-100 md:rounded-lg  md:mt-0 md:border-0" onClick={toggleColorMode}>
                                        Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
                                    </Button>
                                    <ul className="space-x-2 ">
                                        {Clicks.map(x => (
                                            <Click {...x} />
                                        ))}
                                    </ul>
                                </div>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </div>
            </nav>
        </Box>
    )
};