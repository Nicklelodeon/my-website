import { Box, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { ProjectBoxProps, ProjectExperiences } from "./constants";
import { ProjectBox } from "./ProjectBox";


export const Projects = () => {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 3 }) ?? 3;


  const rows = ProjectExperiences.reduce((rows, project, idx) => {
    if (idx % columns === 0) rows.push([]);
    rows[rows.length - 1].push(project);
    return rows;
  }, [] as ProjectBoxProps[][]);

  return (
    <Box>
      <div className="font-bold text-xl pt-4 pb-2" id="Projects">Personal Projects</div>

      <Table variant="simple">
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((project, colIndex) => (
                <Td key={colIndex} className="p-4">
                  <ProjectBox {...project} />
                </Td>
              ))}
              {row.length < columns && 
                [...Array(columns - row.length)].map((_, i) => (
                  <Td key={`empty-${i}`} />
                ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
