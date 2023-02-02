import {
  Box,
  Button,
  Text,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Projects = () => {
  return (
    <Box className="px-6">
      <h1 className="text-4xl">Projects</h1>
      <SimpleGrid
        mt={6}
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
