import { ArrowRight, Brain, Cloud, Code, Cpu, Layers, Smartphone, Mail, FolderGit2, Network, Blocks, Terminal, Wrench, Database, Lightbulb } from 'lucide-react'
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

const skillIcons = [Code, Brain, Network, Cpu, Terminal, Layers, Cloud, Database, Blocks, Smartphone, Wrench]

export const metadata = {
  title: 'Resume | Darian King',
  description: 'Experience, skills, and career highlights.',
}

export default function ResumePage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-100/50 to-background pt-32 pb-12 dark:from-amber-950/10 dark:to-background">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-amber-600/15 blur-3xl dark:bg-amber-800/10" />
        <Container className="relative z-10">
          <BlurFade yOffset={20}>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
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
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
                  Skills
                </h3>
                <div className="space-y-4">
                  {skillCategories.map((category, index) => {
                    const Icon = skillIcons[index] || Code
                    return (
                      <div key={category.category}>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-amber-700 dark:text-amber-600" />
                          <p className="text-sm font-medium text-foreground">{category.category}</p>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {category.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-amber-100/50 text-xs text-amber-900 dark:bg-amber-950/20 dark:text-amber-600">
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
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
                  Education
                </h3>
                <MagicCard className="p-4">
                  <div className="">
                    <p className="text-sm font-medium text-foreground">BSc Computer Science</p>
                    <p className="text-xs text-muted-foreground">James Cook University, Singapore · 2011–2014</p>
                  </div>
                </MagicCard>
              </div>

              {/* Contact */}
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
                  Contact
                </h3>
                <div className="space-y-2">
                  <Link href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-amber-700 dark:hover:text-amber-700">
                    <Mail className="h-4 w-4" />
                    {SITE_CONFIG.email}
                  </Link>
                  <Link href={SITE_CONFIG.github} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-amber-700 dark:hover:text-amber-700">
                    <FolderGit2 className="h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Main content — experience timeline */}
          <div className="min-w-0">
            <BlurFade yOffset={20}>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
                Experience
              </h3>
            </BlurFade>
            <Timeline items={experiences} />

            {/* Link to psychometrics page */}
            <BlurFade className="mt-12" yOffset={20}>
              <Link href="/profile" className="group block">
                <MagicCard className="flex items-center justify-between gap-4 border-amber-200/50 p-6 transition-all hover:shadow-md dark:border-amber-950/15">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600/20 to-amber-700/20">
                      <Lightbulb className="h-5 w-5 text-amber-700 dark:text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-700">Psychometric Profile</p>
                      <p className="text-xs text-muted-foreground">Thinking style, execution, collaboration & adaptability</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-amber-700 dark:group-hover:text-amber-700" />
                </MagicCard>
              </Link>
            </BlurFade>

            <BlurFade className="mt-12" yOffset={20}>
              <div className="rounded-2xl bg-gradient-to-br from-amber-700 to-amber-800 p-8 text-center">
                <p className="text-lg font-medium text-white">
                  Let&apos;s work together
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Available for new opportunities
                </p>
                <Button asChild size="lg" className="mt-6 rounded-full bg-white px-8 text-amber-800 shadow-lg hover:bg-white/90">
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
