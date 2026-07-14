'use client'

import * as React from 'react'
import Link from 'next/link'
import { MagicCard } from './magic-card'
import { cn } from '@/lib/utils'

export function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr',
        className
      )}
    >
      {children}
    </div>
  )
}

export function BentoCard({
  name,
  className,
  background,
  icon,
  description,
  href,
  cta,
}: {
  name?: string
  className?: string
  background?: React.ReactNode
  icon?: React.ReactNode
  description?: React.ReactNode
  href?: string
  cta?: string
}) {
  const content = (
    <MagicCard
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6',
        className
      )}
    >
      {background && (
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden opacity-60 transition-transform duration-500 group-hover:scale-110">
          {background}
        </div>
      )}
      <div className="flex flex-col gap-3">
        {icon}
        {name && <h3 className="text-lg font-semibold text-foreground">{name}</h3>}
        {description && (
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
      {href && cta && (
        <Link
          href={href}
          className="mt-4 inline-flex items-center text-sm font-medium text-accent transition-colors hover:underline"
        >
          {cta}
        </Link>
      )}
    </MagicCard>
  )

  return content
}
