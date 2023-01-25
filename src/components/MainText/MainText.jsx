import { Box, Text } from "@chakra-ui/react";

const MainText = () => {
  return (
    <Box>
      <h1 className="text-6xl">
        Patricio
        <br />
        Albornoz
      </h1>
      <Text className="text-2xl w-1/2" mt={6}>
        <ul>
          <li>
            Web developer, trained in technologies such as Javascript, React,
            Express, Mongo, Git, among others.
          </li>
          <li>Constant desire to learn.</li>
          <li>Good use of organization, time and communication.</li>
          <li>
            Looking for new challenges that allow me to develop new solutions.
          </li>
        </ul>
        <br />
        Studying a Systems University Degree at the National Technological
        University (UTN) and currently forming me as Backend Developer at
        Coderhouse.
      </Text>
    </Box>
  );
};

export default MainText;
