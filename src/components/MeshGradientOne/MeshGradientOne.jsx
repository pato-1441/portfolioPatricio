import React from "react";
import { motion } from "framer-motion";
import MeshImageOne from "../../assets/mesh-151.png";

const MeshGradientOne = () => {
  return (
    <motion.img
      initial={{ opacity: 0.6 }}
      animate={{ x: [-2, 2, -2], y: [-5, 5, -5] }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        type: "spring",
        duration: 3,
      }}
      whileHover={{
        opacity: 1,
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
      src={MeshImageOne}
      alt="Blueish Mesh Gradient"
      className="w-1/2 rounded-l-full"
    />
  );
};

export default MeshGradientOne;
