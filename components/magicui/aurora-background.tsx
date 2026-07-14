'use client'

import { cn } from '@/lib/utils'

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
}: {
  className?: string
  children?: React.ReactNode
  showRadialGradient?: boolean
}) {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center bg-background transition-colors',
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            'absolute -inset-[10px] opacity-50',
            'bg-aurora blur-3xl',
            showRadialGradient &&
              'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops),_transparent)]'
          )}
        />
        <div className="absolute inset-0 bg-dot opacity-50" />
        <div className="absolute inset-0 bg-noise" />
      </div>
      {children}
    </div>
  )
}
