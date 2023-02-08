import { Box } from "@chakra-ui/react";
import React from "react";

const ContactMe = () => {
  return (
    <Box className="px-6">
      <div className="flex justify-between">
        <h1 className="text-4xl sm:text-6xl">
          If you have any proposal
          <br />
          to offer me, please do so here
        </h1>
      </div>
      <Box
        className="text-lg sm:text-2xl grid grid-cols-1 sm:grid-cols-2"
        mt={6}
      >
        <div className="sm:w-3/4 col-span-2 sm:col-span-1 sm:h-96">
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
        <div className="flex gap-6 h-32 sm:h-96 my-12 sm:mt-0">
        </div>
        <div className="col-span-2 flex justify-center h-24 sm:h-48 items-center">
        </div>
      </Box>
    </Box>
  );
};

export default ContactMe;
