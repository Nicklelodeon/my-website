'use client'
import { Box, Button, useColorMode } from '@chakra-ui/react';
import { Click } from './Click';
import { Clicks } from './constants';

export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
        >
            <nav className="hidden md:block">
                <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
                    <span className="text-2xl font-semibold">
                        Nicholas Cheong
                    </span>
                    <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                        <Button onClick={toggleColorMode}>
                            Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
                        </Button>
                        <ul className='space-x-3 pt-2'>
                            {Clicks.map(x => {
                                return (
                                    <Click {...x} />
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </nav>
        </Box>
    );
};