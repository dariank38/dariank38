'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

const dockVariants = cva(
  'mx-auto flex h-[58px] items-center gap-3 rounded-2xl border border-border bg-surface/60 px-4 backdrop-blur-md',
  {
    variants: {
      direction: {
        middle: 'justify-center',
        right: 'justify-end',
        left: 'justify-start',
      },
    },
    defaultVariants: {
      direction: 'middle',
    },
  }
)

export function Dock({
  className,
  children,
  direction,
}: React.PropsWithChildren<VariantProps<typeof dockVariants> & { className?: string }>) {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(dockVariants({ direction, className }))}
    >
      {React.Children.map(children, (child) => (
        <DockItem mouseX={mouseX}>{child}</DockItem>
      ))}
    </motion.div>
  )
}

function DockItem({
  mouseX,
  children,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>
  children: React.ReactNode
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-background/80 text-foreground shadow-sm transition-colors hover:bg-accent/10 hover:text-accent"
    >
      {children}
    </motion.div>
  )
}

export { dockVariants }
