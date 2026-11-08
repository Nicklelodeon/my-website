import { Box, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"

export const AboutMe = () => {
    // const bg = useColorModeValue('red.500', 'red.200')
    // const color = useColorModeValue('white', 'gray.800')
    return (

        <Box >
            <section id="AboutMe" className="flex items-center p-6">
                <div className="flex-shrink-0">
                    <Image src="/images/image.jpeg" alt="Nicholas Cheong" className="w-32 h-32 object-cover rounded-full border-4 border-blue-500" width={200} height={200} />
                </div>
                <div className="ml-6">
                    <h2 className="text-2xl font-semibold">About Me</h2>
                    <p className="mt-2 font-style: italic">
                        Hello! I&rsquo;m Nicholas, a Backend Engineer at Shopee! I am a passionate Software Engineer with experience in building production-grade systems, leveraging observability, multi-layer caching, concurrency control, and graceful degradation to improve system availability, reliability, and data consistency. I enjoy keeping up with the news and volunteering during my free time, and I&rsquo;m always excited to learn new things and take on new challenges. Feel free to connect with me to learn more about my work and experiences.
                    </p>
                </div>
            </section>
        </Box>
    )
}