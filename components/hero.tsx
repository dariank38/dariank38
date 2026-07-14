'use client'

import { ArrowRight, Heart, Sparkles, Zap } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/container'
import { BlurFade } from '@/components/magicui/blur-fade'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { SITE_CONFIG } from '@/lib/constants'
import { experiences, skillCategories, testimonials } from '@/lib/data'

const trustBadges = [
  { icon: Zap, label: 'Ships fast' },
  { icon: Heart, label: 'Loves the craft' },
  { icon: Sparkles, label: 'Polyglot engineer' },
]

export function Hero() {
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-background to-background dark:from-amber-950/10 dark:via-background dark:to-background">
      <div className="pointer-events-none absolute inset-0 bg-aurora opacity-50" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-600/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-rose-300/20 blur-3xl dark:bg-rose-600/10" />

      <Container className="relative z-10 flex flex-col items-center justify-center py-24 text-center md:py-36">
        <BlurFade delay={0.05} className="inline-flex">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-100/70 px-4 py-1.5 text-sm font-medium text-amber-800 backdrop-blur-sm dark:border-amber-700/30 dark:bg-amber-900/20 dark:text-amber-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            Available for new opportunities
          </div>
        </BlurFade>

        <BlurFade delay={0.15} className="mt-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m{' '}
            <span className="text-gradient">Darian</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.3} className="mt-4 text-xl font-medium text-foreground/80 sm:text-2xl md:text-3xl">
          {SITE_CONFIG.title} who turns ideas into shipped products
        </BlurFade>

        <BlurFade delay={0.45} className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {SITE_CONFIG.summary}
        </BlurFade>

        <BlurFade delay={0.6} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 text-white shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:brightness-110">
            <Link href="/story">
              Read my story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-amber-300/60 px-8 text-amber-700 hover:bg-amber-100/50 dark:border-amber-700/30 dark:text-amber-400 dark:hover:bg-amber-900/20">
            <Link href="/contact">Let&apos;s talk</Link>
          </Button>
        </BlurFade>

        <BlurFade delay={0.75} className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <badge.icon className="h-4 w-4 text-amber-500" />
              {badge.label}
            </div>
          ))}
        </BlurFade>

        <BlurFade delay={0.9} className="mt-16 grid grid-cols-3 gap-8 sm:gap-16">
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-bold text-gradient">
              <NumberTicker value={10} />+
            </span>
            <span className="text-xs text-muted-foreground sm:text-sm">Years coding</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-bold text-gradient">
              <NumberTicker value={totalSkills} />+
            </span>
            <span className="text-xs text-muted-foreground sm:text-sm">Technologies</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-bold text-gradient">
              <NumberTicker value={experiences.length} />
            </span>
            <span className="text-xs text-muted-foreground sm:text-sm">Career phases</span>
          </div>
        </BlurFade>

        <BlurFade delay={1.05} className="mt-16 max-w-2xl">
          <blockquote className="rounded-2xl border border-amber-300/40 bg-amber-50/60 p-6 text-left shadow-sm dark:border-amber-800/20 dark:bg-amber-950/10">
            <p className="text-sm italic leading-relaxed text-muted-foreground sm:text-base">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <footer className="mt-3 text-xs font-medium text-amber-700 dark:text-amber-400">
              — {testimonials[0].author}, {testimonials[0].role}
            </footer>
          </blockquote>
        </BlurFade>
      </Container>
    </section>
  )
}
