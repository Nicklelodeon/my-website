"use client";
import { Box, Button, Tooltip, useColorMode } from "@chakra-ui/react";
import { Click } from "./Click";
import { Clicks } from "./constants";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <nav className="hidden lg:block">
        <div className="max-w-screen flex flex-wrap justify-between items-center mx-auto p-4">
          <span className="text-2xl font-semibold mt-6">Nicholas Cheong</span>
          <div className="font-medium flex flex-row p-4 space-x-4 md:p-0 mt-4  rounded-lg ">
            <ul className="space-x-3 pt-2">
              {Clicks.map((click, idx) => {
                return <Click {...click} key={idx} />;
              })}
            </ul>
            <Tooltip label={`Switch to ${colorMode} mode`}>
              <Button className="mt-2" onClick={toggleColorMode}>
                {colorMode === "light" ? <FaMoon /> : <GoSun />}
              </Button>
            </Tooltip>
          </div>
        </div>
      </nav>
    </Box>
  );
};
