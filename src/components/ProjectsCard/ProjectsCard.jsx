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
    deploy: "https://bornozbank.netlify.app/index.html",
  },
  {
    id: 2,
    name: "Bornoz Shows",
    image:
      "https://user-images.githubusercontent.com/83987715/200133740-f27eee0c-ca5b-4518-8966-8a9943be813a.jpeg",
    link: "https://github.com/pato-1441/bornozShows",
    deploy: "https://bornozshows.netlify.app/",
  },
  {
    id: 3,
    name: "Bornoz Fly",
    image:
      "https://raw.githubusercontent.com/pato-1441/bornozFly/main/public/image-6.png",
    link: "https://github.com/pato-1441/bornozFly",
    deploy: "https://bornozfly.up.railway.app/",
  },
  {
    id: 4,
    name: "Marvel Wiki",
    image:
      "https://i.annihil.us/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg",
    link: "https://github.com/TimoteoGambella/Marvel-Project-Vercel",
    deploy: "https://marvel-project-iota.vercel.app/",
  },
  {
    id: 5,
    name: "Search Synonyms",
    image:
      "https://user-images.githubusercontent.com/83987715/216335172-9f0f296d-b2e9-4f12-b55f-cde59b35ef4f.png",
    link: "https://github.com/pato-1441/searchSynonyms",
    deploy: "https://searchsynonyms.netlify.app/",
  },
  {
    id: 6,
    name: "Old Portfolio",
    image:
      "https://user-images.githubusercontent.com/83987715/199248672-33f77843-bc2b-4ff1-8c10-7854e57df06d.png",
    link: "https://github.com/pato-1441/portfolio",
    deploy: "https://patricioalbornozold.netlify.app/",
  },
];

const ProjectsCard = () => {
  return (
    <div>
      <motion.div className="my-5 rounded-xl">
        <Accordion defaultIndex={[0]} allowMultiple>
          {myProjects.map((e) => (
            <AccordionItem key={e.id} sx={{ border: "none", marginY: "18px" }}>
              <h2>
                <AccordionButton
                  px={8}
                  sx={{ borderRadius: "50px", border: "1px solid white" }}
                >
                  <Box as="span" flex="1" textAlign="left" fontSize={24}>
                    {e.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4}>
                <motion.div className="h-fit w-full flex justify-between gap-4">
                  <motion.div
                    className="bg-cover opacity-20 hover:opacity-100 rounded-xl w-1/2"
                    style={{
                      backgroundImage: `url(${e.image})`,
                    }}
                  >
                    <p className="h-48">a</p>
                  </motion.div>
                  <div className="text-md flex flex-col w-1/2">
                    <div className="flex">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam quisquam excepturi hic ut eos fugiat reiciendis
                      eaque laborum voluptates nisi.
                    </div>
                    <div className="flex gap-2 sm:gap-4 justify-between items-center">
                      <a
                        className="w-1/2 text-center mt-4 rounded-xl py-4 hover:bg-gray-500 transition-all duration-700"
                        href={e.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-github fa-xl"></i>
                      </a>
                      <a
                        className="w-1/2 text-center mt-4 rounded-xl py-4 hover:bg-slate-900 transition-all duration-700"
                        href={e.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Deploy
                      </a>
                    </div>
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
