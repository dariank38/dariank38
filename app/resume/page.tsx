import { ArrowRight, Brain, Cloud, Code, Cpu, Layers, Smartphone, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BlurFade } from '@/components/magicui/blur-fade'
import { MagicCard } from '@/components/magicui/magic-card'
import { PrintButton } from '@/components/print-button'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { Timeline } from '@/components/timeline'
import { experiences, skillCategories } from '@/lib/data'
import { SITE_CONFIG } from '@/lib/constants'

const skillIcons = [Cpu, Code, Layers, Smartphone, Cloud, Brain]

export const metadata = {
  title: 'Resume | Darian King',
  description: 'Experience, skills, and career highlights.',
}

export default function ResumePage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 to-background pt-32 pb-12 dark:from-amber-950/10 dark:to-background">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-600/10" />
        <Container className="relative z-10">
          <BlurFade yOffset={20}>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  Resume
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  <span className="text-gradient">{SITE_CONFIG.name}</span>
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  {SITE_CONFIG.title} · {SITE_CONFIG.tagline}
                </p>
                <p className="mt-4 max-w-xl text-muted-foreground">{SITE_CONFIG.summary}</p>
              </div>
              <PrintButton />
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Two-column layout */}
      <Section className="pt-8">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <BlurFade delay={0.1} yOffset={20}>
            <div className="sticky top-24 space-y-6">
              {/* Skills */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  Skills
                </h3>
                <div className="space-y-4">
                  {skillCategories.map((category, index) => {
                    const Icon = skillIcons[index] || Code
                    return (
                      <div key={category.category}>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                          <p className="text-sm font-medium text-foreground">{category.category}</p>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {category.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-amber-100/50 text-xs text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  Education
                </h3>
                <MagicCard className="p-4">
                  <p className="text-sm font-medium text-foreground">Self-driven, continuous learning</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Shipping real projects across dozens of stacks and domains. I learn by building, breaking, and rebuilding.
                  </p>
                </MagicCard>
              </div>

              {/* Contact */}
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  Contact
                </h3>
                <div className="space-y-2">
                  <Link href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                    <Mail className="h-4 w-4" />
                    {SITE_CONFIG.email}
                  </Link>
                  <Link href={SITE_CONFIG.github} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                    <ExternalLink className="h-4 w-4" />
                    GitHub
                  </Link>
                  <Link href={SITE_CONFIG.linkedin} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                    <ExternalLink className="h-4 w-4" />
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Main content — experience timeline */}
          <div className="min-w-0">
            <BlurFade yOffset={20}>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Experience
              </h3>
            </BlurFade>
            <Timeline items={experiences} />

            <BlurFade className="mt-12" yOffset={20}>
              <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-center">
                <p className="text-lg font-medium text-white">
                  Let&apos;s work together
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Available for new opportunities
                </p>
                <Button asChild size="lg" className="mt-6 rounded-full bg-white px-8 text-amber-700 shadow-lg hover:bg-white/90">
                  <Link href="/contact">
                    Start a conversation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </Section>
    </>
  )
}
