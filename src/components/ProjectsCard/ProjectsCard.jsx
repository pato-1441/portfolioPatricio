import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectsCard = ({name, image, link}) => {
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
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="my-5 rounded-xl"
    >
      <motion.button
        className="text-xl flex items-center w-full justify-between border border-dashed hover:border-solid rounded-xl px-6 py-2"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{
          boxShadow: "0px 0px 16px rgb(155,155,155)",
        }}
      >
        {name}
        <motion.div
          variants={{
            open: { rotate: 180, y: -2 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </motion.div>
      </motion.button>
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
        <motion.li className="my-3 text-lg" variants={itemVariants}>
          <motion.div className="h-fit">
            <motion.div
              className="bg-cover opacity-25"
              style={{
                backgroundImage:
                  `url(${image})`,
              }}
            >
              <p className="h-48"></p>
              
            </motion.div>
          </motion.div>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default ProjectsCard;
