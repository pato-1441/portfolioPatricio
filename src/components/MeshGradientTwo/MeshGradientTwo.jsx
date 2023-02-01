import React from "react";
import { motion } from "framer-motion";
import MeshImageTwo from "../../assets/mesh-152.png";

const MeshGradientTwo = () => {
  return (
    <motion.img
      initial={{ opacity: 0.6 }}
      animate={{ x: [-1, 1, -1], y: [-5, 5, -5] }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        type: "spring",
        duration: 4,
      }}
      whileHover={{
        opacity: 1,
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
      src={MeshImageTwo}
      alt="Blueish Mesh Gradient"
      className="w-1/3 rounded-tr-full"
    />
  );
};

export default MeshGradientTwo;
