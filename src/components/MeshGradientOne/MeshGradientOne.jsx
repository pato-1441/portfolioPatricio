import React from "react";
import { motion } from "framer-motion";
import MeshImageOne from "../../assets/mesh-151.png";

const MeshGradientOne = () => {
  return (
    <motion.img
      animate={{ x: 100 }}
      transition={{ ease: "backOut", duration: 3 }}
      src={MeshImageOne}
      alt="Blueish Mesh Gradient"
      className="w-1/2 h-2/4 rounded-l-full opacity-50 hover:opacity-100"
    />
  );
};

export default MeshGradientOne;
