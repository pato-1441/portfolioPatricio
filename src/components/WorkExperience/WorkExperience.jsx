import { Box, List, ListIcon, ListItem } from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "react-icons/all";

const WorkExperience = () => {
  return (
    <Box>
      <h1 className="text-5xl">
        Work <br /> Experience
      </h1>
      <Box mt={6} fontSize={22} width={96}>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.300" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.300" />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.300" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={MdSettings} color="blue.300" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default WorkExperience;
