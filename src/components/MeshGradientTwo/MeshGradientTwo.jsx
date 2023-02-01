import React from "react";
import { motion } from "framer-motion";
import MeshImageTwo from "../../assets/mesh-152.png";

const MeshGradientTwo = () => {
  return (
    <motion.img
      initial={{ opacity: 0.6 }}
      whileHover={{
        opacity: 1,
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      src={MeshImageTwo}
      alt="Blueish Mesh Gradient"
      className="w-1/2 h-2/4 rounded-tl-full"
    />
  );
};

export default MeshGradientTwo;
