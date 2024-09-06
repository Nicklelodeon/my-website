"use client";
import {
  Button,
  Box,
  useColorMode,
  Tooltip,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ClickProps, Clicks } from "./constants";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { MdOutlineExpandMore } from "react-icons/md";

export const MobileNavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const clickHandler = (scrollId: string) => {
    const element = document.getElementById(scrollId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box>
      <nav className="block lg:hidden">
        <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            Nicholas Cheong
          </span>
          <Menu>
            <MenuButton
              as={Button}
              // rightIcon={<ChevronDownIcon />}
            >
              <MdOutlineExpandMore />
            </MenuButton>
            <MenuList>
              {Clicks.map((click, idx) => (
                <MenuItem
                  key={idx}
                  onClick={() => {
                    return clickHandler(click.scrollId);
                  }}
                >
                  {click.content}
                </MenuItem>
              ))}
              <Tooltip label={`Switch to ${colorMode} mode`}>
                <MenuItem onClick={toggleColorMode}>
                  <div className="md:font-medium md:flex md:flex-col  md:border md:border-gray-100 md:rounded-lg  md:mt-0 md:border-0">
                    {colorMode === "light" ? <FaMoon /> : <GoSun />}
                  </div>
                </MenuItem>
              </Tooltip>
            </MenuList>
          </Menu>
        </div>
      </nav>
    </Box>
  );
};
