import { Box } from "@chakra-ui/react";
import DropMenu from "../DropMenu/DropMenu.jsx";
import MeshImageOne from "../../assets/mesh-151.png";
import MeshImageTwo from "../../assets/mesh-152.png";

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
      <Box className="text-lg sm:text-2xl flex justify-between" mt={6}>
        <div className="w-1/3">
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
        <div className="w-1/2 flex gap-4">
          <img src={MeshImageOne} alt="Blueish Mesh Gradient" className="w-1/2 h-2/4 rounded-l-full opacity-50 hover:opacity-100"/>
          <img src={MeshImageTwo} alt="Blueish Mesh Gradient" className="w-1/2 h-2/4 rounded-bl-full opacity-50 hover:opacity-100"/>
        </div>
      </Box>
    </Box>
  );
};

export default MainText;
