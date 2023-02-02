import { Box } from "@chakra-ui/react";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const myProjects = [
  {
    name: "Bornoz Bank",
    image:
      "https://user-images.githubusercontent.com/83987715/199247186-d0b2b54e-8275-4208-b85c-0aa3cb64dc96.jpeg",
  },
  {
    name: "Bornoz Shows",
    image:
      "https://user-images.githubusercontent.com/83987715/199247186-d0b2b54e-8275-4208-b85c-0aa3cb64dc96.jpeg",
  },
  {
    name: "Bornoz Bank",
    image:
      "https://user-images.githubusercontent.com/83987715/199247186-d0b2b54e-8275-4208-b85c-0aa3cb64dc96.jpeg",
  },
  {
    name: "Bornoz Bank",
    image:
      "https://user-images.githubusercontent.com/83987715/199247186-d0b2b54e-8275-4208-b85c-0aa3cb64dc96.jpeg",
  },
];

const Projects = () => {
  return (
    <Box className="flex flex-col px-6">
      <h1 className="text-4xl">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </Box>
  );
};

export default Projects;
