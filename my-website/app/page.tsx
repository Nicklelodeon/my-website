import Image from "next/image";
import { NavBar } from "../components/NavBar"
import { AboutMe } from "@/components/AboutMe";
import { ChakraProvider } from '@chakra-ui/react'
import { Experiences } from "@/components/Experiences";


export default function Home() {
  return (
    <div>
      <ChakraProvider>
        <NavBar />
        <AboutMe />
        <Experiences />
        {/* <Projects /> */}
      </ChakraProvider>
    </div>

  );
}
