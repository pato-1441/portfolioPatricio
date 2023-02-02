import { Box, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Projects = () => {
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box className="px-6">
      <h1 className="text-4xl">Projects</h1>
      <SimpleGrid
        mt={6}
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <motion.div
          className="menu flex flex-col col-span-1"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          whileInView={() => setIsOpen("open")}
        >
          {/* <div>ProjectsCard</div> */}
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <motion.li variants={itemVariants}>Item 1 </motion.li>
            <motion.li variants={itemVariants}>Item 2 </motion.li>
            <motion.li variants={itemVariants}>Item 3 </motion.li>
            <motion.li variants={itemVariants}>Item 4 </motion.li>
            <motion.li variants={itemVariants}>Item 5 </motion.li>
          </motion.ul>
          {/* <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        sequi dolorum labore tenetur voluptas error, animi nobis sint
        repudiandae doloremque.
      </div> */}
        </motion.div>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
