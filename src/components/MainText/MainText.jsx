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
        <div className="sm:w-3/4 col-span-2 sm:col-span-1 sm:h-96">
          <p>
            Web developer, trained in technologies such as C#, .NET, Javascript,
            React, Express, Mongo, Git, among others. Constant desire to learn.
            Fan of organization, team management and making socials. Looking for
            new challenges that allow me to develop new solutions.
          </p>
          <br />
          <p>
            At the moment studying a Systems University Degree at the National
            Technological University (UTN).
          </p>
        </div>
        <div className="flex gap-6 h-32 sm:h-96 my-12 sm:mt-0">
          <MeshGradientOne />
          <MeshGradientTwo />
        </div>
        <div className="col-span-2 flex justify-center h-24 sm:h-48 items-center">
          <DownArrow />
        </div>
      </Box>
    </Box>
  );
};

export default MainText;
