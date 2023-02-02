import { Box } from "@chakra-ui/react";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Projects = () => {
  return (
    <Box className="px-6">
      <h1 className="text-4xl">Projects</h1>
      <ProjectsCard />
    </Box>
  );
};

export default Projects;
