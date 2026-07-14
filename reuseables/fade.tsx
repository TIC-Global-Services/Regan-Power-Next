'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export default function Fade({ children, delay = 0, duration = 1 }: FadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: duration,
        ease: "easeOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}