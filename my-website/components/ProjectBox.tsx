import { Box, Image, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { ProjectBoxProps } from "./constants";

export const ProjectBox: React.FC<ProjectBoxProps> = ({
  imgSrc,
  alt,
  imgLink,
  projectName,
  projectDescription,
  techStack,
}) => {
  return (
    <Box
      position="relative"
      maxW="sm"
      maxH="sm"
      h="80"
      border="1px"
      borderColor="gray.300"
      borderRadius="lg"
      overflow="auto"
      className="group"
    >
      <Image
        objectFit="cover"
        borderRadius="md"
        minW="200px"
        src={imgSrc}
        alt={alt}
        className="w-full h-80 object-cover opacity-1 group-hover:opacity-0"
      />
      <div className="absolute inset-0  overflow-y-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="relative h-full w-full">
          <h2 className="text-lg font-semibold">{projectName}</h2>
          <p className="mt-2 mb-2">{projectDescription}</p>
          <div className="flex flex-wrap justify-between gap-2">
            {techStack.map((x, idx) => {
              return (
                <Tag key={idx} size="md">
                  {x}
                </Tag>
              );
            })}
          </div>
          <div className="mt-4">
            <Link
              className="border-2 hover:underline py-2 px-4 rounded text-sm "
              href={imgLink}
            >
              Visit Now
            </Link>
          </div>
        </div>
      </div>
    </Box>
  );
};
