import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  position: boolean;
};

const cardVariants = (position: boolean) => ({
  offscreen: {
    x: position ? 500 : -500,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
});
const MotionWrapper = ({ children, position }: Props) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1}}
      style={{overflowX:'hidden'}}
    >
      <motion.div
        variants={cardVariants(position)}
        style={{ overflow: "hidden", }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default MotionWrapper;
