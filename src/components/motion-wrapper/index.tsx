import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    children:React.ReactNode,
    position:boolean
}

const cardVariants=(position:boolean)  => ( {
    offscreen: {
      x: position ?300:-300
    },
    onscreen: {
      x: 0,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  });
const MotionWrapper = ({children,position}: Props) => {
  return (
    <motion.div variants={cardVariants(position)} style={{overflowY:'hidden'}}>{children}</motion.div>
  )
}

export default MotionWrapper