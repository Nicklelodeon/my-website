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
import { FaGithub, FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { MdOutlineExpandMore } from "react-icons/md";
import { useRouter } from "next/navigation";
import { BsLinkedin } from "react-icons/bs";

export const MobileNavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const accessLink = (url: string) => {
    window.open(url);
  };
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
                  icon={click.icon}
                  key={idx}
                  onClick={() => {
                    return clickHandler(click.scrollId);
                  }}
                >
                  {click.content}
                </MenuItem>
              ))}
              <MenuItem
                icon={colorMode === "light" ? <FaMoon /> : <GoSun />}
                onClick={toggleColorMode}
              >
                Switch to {colorMode === 'light' ? 'dark' : 'light'} mode
              </MenuItem>
              <MenuItem
                icon={<BsLinkedin />}
                onClick={() => {
                  accessLink(
                    "https://www.linkedin.com/in/nicholas-cheong-532a38206/"
                  );
                }}
              >
                Visit my Linkedin
              </MenuItem>
              <MenuItem
                icon={<FaGithub />}
                onClick={() => {
                  accessLink("https://github.com/Nicklelodeon");
                }}
              >
                Visit my Github
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </nav>
    </Box>
  );
};
