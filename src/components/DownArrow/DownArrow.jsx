import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const DownArrow = () => {
  return (
    <Link
      activeClass="active"
      to="projectsSection"
      spy={true}
      smooth={true}
      duration={500}
      className="cursor-pointer"
    >
      <motion.svg
        className="w-16 h-16 sm:w-20 sm:h-20"
        initial={{ opacity: 1 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          type: "spring",
          duration: 3,
        }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </motion.svg>
    </Link>
  );
};

export default DownArrow;
