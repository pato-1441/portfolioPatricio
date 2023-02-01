import React from "react";
import { motion } from "framer-motion";

const DownArrow = () => {
  return (
    <motion.svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
        />
      </svg>
    </motion.svg>
  );
};

export default DownArrow;
