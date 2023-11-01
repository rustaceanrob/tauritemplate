import React from 'react'
import { motion } from 'framer-motion';

type Props = {
    children: React.ReactNode,
    delay: number, 
    style: string,
}

function FromLeft({ children, delay, style }: Props) {
  return (
    <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: delay / 250 }}
        className={style}
      >
        {children}
    </motion.div>
  )
}

export default FromLeft;