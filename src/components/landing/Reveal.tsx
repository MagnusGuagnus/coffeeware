import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'span'
}

const MotionMap = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  span: motion.span,
}

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as = 'div',
}: RevealProps) {
  const Comp = MotionMap[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  )
}
