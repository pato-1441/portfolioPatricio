import { Box } from "@chakra-ui/react";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Projects = () => {
  return (
    <Box className="flex flex-col px-6">
      <h1 className="text-4xl">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </Box>
  );
};

export default Projects;
