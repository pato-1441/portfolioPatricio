import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "react-icons/all";

const WorkExperience = () => {
  return (
    <Box>
      <h1 className="text-4xl">
        Work <br /> Experience
      </h1>
      <Box mt={6} fontSize={22} width={96}>
        <Text fontSize={26} fontWeight="semibold">
          Project Manager
        </Text>
        <Text fontSize={24}>Nebitel</Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.300" />
            Design, flyer and advertising manager.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.300" />
            Estimate the resources and time required.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.300" />
            Responsible for monitoring progress and advances.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.300" />
            Recruitment of employees.
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={MdSettings} color="blue.300" />
            Sponsors, suppliers management.
          </ListItem>
          <ListItem>
            <ListIcon as={MdSettings} color="blue.300" />
            Develop and implement a plan and processes for the project.
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default WorkExperience;
