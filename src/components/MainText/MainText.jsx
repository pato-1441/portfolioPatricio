import { Box } from "@chakra-ui/react";
import DropMenu from "../DropMenu/DropMenu.jsx";

const MainText = () => {
  return (
    <Box className="px-6">
      <div className="flex justify-between">
        <h1 className="text-4xl sm:text-6xl">
          Patricio
          <br />
          Albornoz
        </h1>
        <DropMenu />
      </div>
      <Box className="text-lg sm:text-2xl sm:w-1/2" mt={6}>
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
      </Box>
    </Box>
  );
};

export default MainText;
