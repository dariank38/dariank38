'use client'

import { cn } from '@/lib/utils'
import { Container } from '@/components/container'
import { BlurFade } from '@/components/magicui/blur-fade'

export type SectionProps = {
  title?: string
  subtitle?: string
  eyebrow?: string
  align?: 'left' | 'center'
  className?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

export function Section({
  title,
  subtitle,
  eyebrow,
  align = 'left',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn('py-10', className)} {...props}>
      <Container>
        {(title || subtitle || eyebrow) && (
          <BlurFade
            className={cn(
              'mb-12 max-w-2xl',
              align === 'center' && 'mx-auto text-center'
            )}
            yOffset={20}
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                <span className="text-gradient">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
            )}
          </BlurFade>
        )}
        {children}
      </Container>
    </section>
  )
}
