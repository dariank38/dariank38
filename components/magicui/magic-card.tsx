'use client'

import * as React from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface MagicCardProps extends React.ComponentProps<typeof Card> {
  gradientColor?: string
  gradientOpacity?: number
  gradientSize?: number
}

export function MagicCard({
  children,
  className,
  gradientColor = '#f59e0b',
  gradientOpacity = 0.15,
  gradientSize = 600,
  ...props
}: MagicCardProps) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <Card
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ['--x' as string]: `${position.x}px`,
        ['--y' as string]: `${position.y}px`,
      }}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${gradientSize}px circle at var(--x) var(--y), ${gradientColor}${Math.round(
            gradientOpacity * 255
          )
            .toString(16)
            .padStart(2, '0')}, transparent 40%)`,
        }}
      />
      {children}
    </Card>
  )
}
