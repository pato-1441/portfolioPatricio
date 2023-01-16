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

const Projects = () => {
  return (
    <Box>
      <h1 className="text-4xl">Projects</h1>
      <SimpleGrid
        mt={6}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <Card color="white" bgColor="red.700">
          <CardHeader>
            <Text fontSize={22}> Customer dashboard</Text>
          </CardHeader>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter color="black">
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
