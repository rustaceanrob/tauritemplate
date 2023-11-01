import React from 'react'
import { motion } from 'framer-motion';

type Props = {
    children: React.ReactNode,
    delay: number, 
    style: string,
}

function Fades({ children, delay, style }: Props) {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay: delay / 1000}} className={style}>
        {children}
    </motion.div>
  )
}

export default Fades;