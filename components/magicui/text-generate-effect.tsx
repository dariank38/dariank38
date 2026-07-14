'use client'

import { useEffect } from 'react'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string
  className?: string
  filter?: boolean
  duration?: number
}) {
  const [scope, animate] = useAnimate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const wordsArray = words.split(' ')

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          opacity: 1,
          filter: filter ? 'blur(0px)' : 'none',
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      )
    }
  }, [isInView, animate, duration, filter])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div ref={ref} className={cn('text-foreground', className)}>
      {renderWords()}
    </div>
  )
}
