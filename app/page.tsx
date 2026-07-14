import {
  ArrowRight,
  Brain,
  Code,
  Cpu,
  Heart,
  Layers,
  Smartphone,
  Cloud,
  Quote,
  Network,
  Blocks,
  Terminal,
  Wrench,
  Database,
  Briefcase,
  FileText,
  PenLine,
} from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BlurFade } from '@/components/magicui/blur-fade'
import { MagicCard } from '@/components/magicui/magic-card'
import { Hero } from '@/components/hero'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import {
  projectHighlights,
  skillCategories,
  testimonials,
} from '@/lib/data'

const skillIcons = [Code, Brain, Network, Cpu, Terminal, Layers, Cloud, Database, Blocks, Smartphone, Wrench]

export const metadata = {
  title: {
    absolute: 'Darian King | Software Engineer — AI, Full-Stack & Windows Programming',
  },
  description: 'Darian King is a software engineer specializing in AI engineering, full-stack development, and Windows programming. From LLM orchestration to Alibaba-scale payments to computer vision systems.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Darian King | Software Engineer — AI, Full-Stack & Windows Programming',
    description: 'Darian King is a software engineer specializing in AI engineering, full-stack development, and Windows programming. From LLM orchestration to Alibaba-scale payments to computer vision systems.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Skills — compact pill layout, left-aligned with eyebrow */}
      <Section
        eyebrow="Capabilities"
        title="What I bring to the table"
        subtitle="A toolkit forged across decades of shipping real software to real users."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = skillIcons[index] || Code
            return (
              <BlurFade key={category.category} delay={index * 0.06} yOffset={20}>
                <MagicCard className="h-full p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-600/20 to-amber-700/20">
                      <Icon className="h-5 w-5 text-amber-700 dark:text-amber-600" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{category.category}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-amber-100/50 text-xs text-amber-900 dark:bg-amber-950/20 dark:text-amber-600">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </MagicCard>
              </BlurFade>
            )
          })}
        </div>
      </Section>

      {/* Explore — compact 3-card hub */}
      <Section
        eyebrow="Explore"
        title="Dig deeper"
        subtitle="Projects, writing, and the full resume — all in one place."
        className="bg-surface"
      >
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          <BlurFade yOffset={20}>
            <Link href="/projects" className="group block h-full">
              <MagicCard className="flex h-full flex-col gap-3 p-6 transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600/20 to-amber-700/20">
                  <Briefcase className="h-6 w-6 text-amber-700 dark:text-amber-600" />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-600">Projects</p>
                  <p className="mt-1 text-sm text-muted-foreground">{projectHighlights.length} projects with challenges, solutions & techniques</p>
                </div>
                <span className="mt-auto inline-flex items-center text-sm font-medium text-amber-700 dark:text-amber-600">
                  Browse projects
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </MagicCard>
            </Link>
          </BlurFade>
          <BlurFade delay={0.08} yOffset={20}>
            <Link href="/blog" className="group block h-full">
              <MagicCard className="flex h-full flex-col gap-3 p-6 transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600/20 to-amber-700/20">
                  <PenLine className="h-6 w-6 text-amber-700 dark:text-amber-600" />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-600">Blog</p>
                  <p className="mt-1 text-sm text-muted-foreground">Stories, lessons, and write-ups from the trenches</p>
                </div>
                <span className="mt-auto inline-flex items-center text-sm font-medium text-amber-700 dark:text-amber-600">
                  Read posts
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </MagicCard>
            </Link>
          </BlurFade>
          <BlurFade delay={0.16} yOffset={20}>
            <Link href="/resume" className="group block h-full">
              <MagicCard className="flex h-full flex-col gap-3 p-6 transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600/20 to-amber-700/20">
                  <FileText className="h-6 w-6 text-amber-700 dark:text-amber-600" />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-600">Resume</p>
                  <p className="mt-1 text-sm text-muted-foreground">Full experience timeline, skills & education</p>
                </div>
                <span className="mt-auto inline-flex items-center text-sm font-medium text-amber-700 dark:text-amber-600">
                  View resume
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </MagicCard>
            </Link>
          </BlurFade>
        </div>
      </Section>

      {/* Testimonials — large featured quote */}
      <Section className="bg-surface" align="center">
        <BlurFade className="mx-auto max-w-3xl" yOffset={20}>
          <Quote className="mx-auto h-12 w-12 text-amber-600/50" />
          <blockquote className="mt-6 text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            &ldquo;{testimonials[0].quote}&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-amber-700 text-sm font-bold text-white">
              {testimonials[0].author.charAt(0)}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">{testimonials[0].author}</p>
              <p className="text-xs text-muted-foreground">{testimonials[0].role}</p>
            </div>
          </div>
        </BlurFade>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {testimonials.slice(1).map((t, index) => (
            <BlurFade key={t.author} delay={index * 0.1} yOffset={20}>
              <MagicCard className="h-full p-6">
                <p className="text-sm italic leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-amber-700 text-xs font-bold text-white">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </Section>

      {/* CTA — full-width banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-700 to-amber-800 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-noise" />
        <Container className="relative z-10 text-center">
          <BlurFade className="mx-auto max-w-2xl" yOffset={20}>
            <Heart className="mx-auto h-10 w-10 text-white/80" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Let&apos;s create something meaningful
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Whether you need a technical lead, a full-stack builder, or someone who can dive into any codebase and ship — I&apos;m ready.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-white px-8 text-amber-800 shadow-lg hover:bg-white/90">
                <Link href="/contact">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-white/10 px-8 text-white border border-white/40 hover:bg-white/20">
                <Link href="/resume">View resume</Link>
              </Button>
            </div>
          </BlurFade>
        </Container>
      </section>
    </>
  )
}

