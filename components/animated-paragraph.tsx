'use client'

import { motion } from '@/components/motion'

export function AnimatedParagraph({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.p>
  )
}
