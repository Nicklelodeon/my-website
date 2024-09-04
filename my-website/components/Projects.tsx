import { Box } from "@chakra-ui/react"
import { ProjectExperiences } from "./constants"
import { ProjectBox } from "./ProjectBox"

export const Projects = () => {
    return (
        <Box>
            <div className="font-bold text-xl underline pb-4">
            Personal Projects
            </div>
            
            <div className="flex flex-wrap justify-between space-x-2" id="Projects">
                {ProjectExperiences.map((x, idx) => {
                    return (
                        <div className="flex-grow min-w-[200px]">
                            <ProjectBox {...x} />
                        </div>
                    )
                })}
            </div>
        </Box>
    )
}