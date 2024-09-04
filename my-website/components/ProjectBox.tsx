import { Box, Image, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { ProjectBoxProps } from "./constants";


export const ProjectBox: React.FC<ProjectBoxProps> = ({ imgSrc,
    alt,
    imgLink,
    projectName,
    projectDescription,
    techStack }) => {
    return (
        <Box>
            <div className="px-2 relative max-w-sm max-h-sm border border-gray-300 rounded-lg  group">
                
                <Image
                    src={imgSrc}
                    alt={alt}
                    
                    className="w-full h-80 object-cover"
                />
               
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h2 className="text-lg font-semibold">{projectName}</h2>
                    <p className="mt-2">{projectDescription}</p>
                    <div className="flex flex-wrap justify-between gap-2">
                    {techStack.map((x, idx) => {
                        return (
                            <Tag size='md'>{x}</Tag>
                        )
                    })}
                    </div>
                    <div className="mt-4">
                    <Link className="bg-blue-500  py-2 px-4 rounded hover:bg-blue-600" href={imgLink}> Visit Now </Link>
                        
                    </div>
                </div>
            </div>
        </Box>
    )
};