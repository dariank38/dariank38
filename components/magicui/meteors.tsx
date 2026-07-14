'use client'

import { cn } from '@/lib/utils'

function seededValue(index: number, salt: number, max: number) {
  const value = Math.abs(Math.sin(index * 9999 + salt)) * max
  return Math.max(0, Math.min(max, value))
}

export function Meteors({ number = 20, className }: { number?: number; className?: string }) {
  const meteors = new Array(number).fill(true)

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={cn(
            'animate-meteor absolute h-0.5 w-0.5 rotate-[215deg] rounded-[9999px] bg-accent shadow-[0_0_0_1px_rgba(255,255,255,0.1)]'
          )}
          style={{
            top: `${seededValue(idx, 1, 100)}%`,
            left: `${seededValue(idx, 2, 100)}%`,
            animationDelay: `${seededValue(idx, 3, 5)}s`,
            animationDuration: `${seededValue(idx, 4, 3) + 2}s`,
          }}
        />
      ))}
    </div>
  )
}
