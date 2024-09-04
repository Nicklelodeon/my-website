'use client'
import { NavBar } from "../components/NavBar"
import { AboutMe } from "@/components/AboutMe";
import { ChakraProvider, ColorModeScript, Divider, extendTheme, useColorMode } from '@chakra-ui/react'
import { Experiences } from "@/components/Experiences";
import { Projects } from "@/components/Projects";
import { MobileNavBar } from "@/components/MobileNavBar";
import theme from "@/components/Theme";



export default function Home() {

  return (
    <div>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <NavBar />
        <MobileNavBar />
        <Divider />
        <div className="p-6">
          <AboutMe />
          <Divider />
          <Experiences />
          <Divider />
          <Projects />
        </div>
      </ChakraProvider>


    </div >

  );
}
