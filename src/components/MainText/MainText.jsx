import { Box } from "@chakra-ui/react";
import DownArrow from "../DownArrow/DownArrow.jsx";
import DropMenu from "../DropMenu/DropMenu.jsx";
import MeshGradientOne from "../MeshGradientOne/MeshGradientOne.jsx";
import MeshGradientTwo from "../MeshGradientTwo/MeshGradientTwo.jsx";

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
      <Box
        className="text-lg sm:text-2xl grid grid-cols-1 sm:grid-cols-2"
        mt={6}
      >
        <div className="sm:w-3/4">
          <p>
            Web developer, trained in technologies such as Javascript, React,
            Express, Mongo, Git, among others. Constant desire to learn. Good
            use of organization, time and communication. Looking for new
            challenges that allow me to develop new solutions.
          </p>
          <br />
          <p>
            Studying a Systems University Degree at the National Technological
            University (UTN) and currently forming me as Backend Developer at
            Coderhouse.
          </p>
        </div>
        <div className="flex gap-6 m-16">
          <MeshGradientOne />
          <MeshGradientTwo />
        </div>
        <DownArrow />
      </Box>
    </Box>
  );
};

export default MainText;
