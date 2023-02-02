import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

const myProjects = [
  {
    id: 1,
    name: "Bornoz Bank",
    image:
      "https://user-images.githubusercontent.com/83987715/199247186-d0b2b54e-8275-4208-b85c-0aa3cb64dc96.jpeg",
    link: "https://github.com/pato-1441/bornozBank",
  },
  {
    id: 2,
    name: "Bornoz Shows",
    image:
      "https://user-images.githubusercontent.com/83987715/200133740-f27eee0c-ca5b-4518-8966-8a9943be813a.jpeg",
    link: "https://github.com/pato-1441/bornozShows",
  },
  {
    id: 3,
    name: "Bornoz Fly",
    image:
      "https://raw.githubusercontent.com/pato-1441/bornozFly/main/public/image-6.png",
    link: "https://github.com/pato-1441/bornozFly",
  },
  {
    id: 4,
    name: "Marvel Wiki",
    image:
      "https://i.annihil.us/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg",
    link: "https://github.com/TimoteoGambella/Marvel-Project-Vercel",
  },
  {
    id: 5,
    name: "Search Synonyms",
    image:
      "https://user-images.githubusercontent.com/83987715/216335172-9f0f296d-b2e9-4f12-b55f-cde59b35ef4f.png",
    link: "https://github.com/pato-1441/searchSynonyms",
  },
  {
    id: 6,
    name: "Old Portfolio",
    image:
      "https://user-images.githubusercontent.com/83987715/199248672-33f77843-bc2b-4ff1-8c10-7854e57df06d.png",
    link: "https://github.com/pato-1441/portfolio",
  },
];

const ProjectsCard = () => {
  return (
    <div>
      <motion.div className="my-5 rounded-xl">
        <Accordion defaultIndex={[0]} allowMultiple>
          {myProjects.map((e) => (
            <AccordionItem key={e.id}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontSize={24}>
                    {e.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <motion.div className="h-fit">
                  <motion.div
                    className="bg-cover bg-center opacity-20 hover:opacity-100 rounded-b-xl"
                    style={{
                      backgroundImage: `url(${e.image})`,
                    }}
                  >
                    <p className="h-48"></p>
                  </motion.div>
                  <div className="text-md w-full flex flex-col sm:flex-row justify-between sm:gap-2">
                    <a
                      className="sm:w-1/2 text-center mt-4 py-2 rounded-xl border hover:bg-gray-500 transition-all duration-700"
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github fa-xl"></i>
                    </a>
                    <a
                      className="sm:w-1/2 text-center mt-4 py-2 rounded-xl border hover:bg-cyan-900 transition-all duration-700"
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deploy
                    </a>
                  </div>
                </motion.div>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default ProjectsCard;
