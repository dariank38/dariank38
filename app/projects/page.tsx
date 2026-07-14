import { Brain, CreditCard, Camera, FileText, ExternalLink, ArrowRight, Lightbulb, Wrench, AlertTriangle, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BlurFade } from '@/components/magicui/blur-fade'
import { MagicCard } from '@/components/magicui/magic-card'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { projectHighlights } from '@/lib/data'

export const metadata = {
  title: 'Projects',
  description: 'All projects by Darian King — AI platforms, payment systems, e-commerce, computer vision, blockchain, and more. From Supakon to HindSight to Author Wizard.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects | Darian King',
    description: 'All projects by Darian King — AI platforms, payment systems, e-commerce, computer vision, blockchain, and more.',
  },
}

const projectIcons: Record<string, React.ElementType> = {
  brain: Brain,
  'credit-card': CreditCard,
  camera: Camera,
  'file-text': FileText,
}

const companyOrder = ['NeuralBridge', 'NovaCircuit', 'Freelance']

export default function ProjectsPage() {
  const grouped = companyOrder.map((company) => ({
    company,
    projects: projectHighlights.filter((p) => p.company === company),
  })).filter((g) => g.projects.length > 0)

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-100/50 to-background pt-32 pb-12 dark:from-amber-950/10 dark:to-background">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-amber-600/15 blur-3xl dark:bg-amber-800/10" />
        <Container className="relative z-10">
          <BlurFade yOffset={20}>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
                Portfolio
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                <span className="text-gradient">All Projects</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {projectHighlights.length} projects across AI, fintech, e-commerce, computer vision, blockchain, and enterprise systems.
              </p>
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Projects grouped by company */}
      <Section className="pt-8 pb-24">
        <Container>
          <div className="mx-auto max-w-5xl space-y-16">
            {grouped.map((group, groupIndex) => (
              <div key={group.company}>
                <BlurFade yOffset={20} delay={groupIndex * 0.05}>
                  <div className="mb-6 flex items-center gap-3">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
                      {group.company}
                    </h2>
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-xs text-muted-foreground">{group.projects.length} projects</span>
                  </div>
                </BlurFade>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.projects.map((project, index) => {
                    const Icon = projectIcons[project.icon] || Brain
                    return (
                      <BlurFade key={project.title} delay={index * 0.04} yOffset={20}>
                        <MagicCard className="group flex h-full flex-col overflow-hidden p-0 transition-all hover:shadow-lg">
                          {/* Project image */}
                          {project.image && (
                            <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                                  <Icon className="h-4 w-4 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white drop-shadow">
                                  {project.title}
                                </h3>
                              </div>
                              {project.url && (
                                <Link
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </Link>
                              )}
                            </div>
                          )}

                          {/* Content */}
                          <div className="flex flex-1 flex-col p-5">
                            {!project.image && (
                              <div className="mb-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600/20 to-amber-700/20">
                                    <Icon className="h-5 w-5 text-amber-700 dark:text-amber-600" />
                                  </div>
                                  <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                                </div>
                                {project.url && (
                                  <Link
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground transition-colors hover:text-amber-700 dark:hover:text-amber-600"
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                  </Link>
                                )}
                              </div>
                            )}

                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {project.description}
                            </p>

                            {/* Challenge */}
                            {project.challenge && (
                              <div className="mt-4 rounded-lg bg-rose-100/40 p-3 dark:bg-rose-950/10">
                                <div className="flex items-center gap-1.5 text-rose-700 dark:text-rose-500">
                                  <AlertTriangle className="h-3.5 w-3.5" />
                                  <span className="text-xs font-semibold uppercase tracking-wider">Challenge</span>
                                </div>
                                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                                  {project.challenge}
                                </p>
                              </div>
                            )}

                            {/* Solution */}
                            {project.solution && (
                              <div className="mt-3 rounded-lg bg-amber-100/40 p-3 dark:bg-amber-950/10">
                                <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-600">
                                  <Lightbulb className="h-3.5 w-3.5" />
                                  <span className="text-xs font-semibold uppercase tracking-wider">Solution</span>
                                </div>
                                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                                  {project.solution}
                                </p>
                              </div>
                            )}

                            {/* Techniques */}
                            {project.techniques && project.techniques.length > 0 && (
                              <div className="mt-3">
                                <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-600">
                                  <Wrench className="h-3.5 w-3.5" />
                                  <span className="text-xs font-semibold uppercase tracking-wider">Techniques</span>
                                </div>
                                <ul className="mt-1.5 space-y-1">
                                  {project.techniques.map((tech, i) => (
                                    <li key={i} className="flex gap-1.5 text-xs text-muted-foreground">
                                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-amber-600/60" />
                                      {tech}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Tags */}
                            <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
                              {project.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="bg-amber-100/50 text-xs text-amber-900 dark:bg-amber-950/20 dark:text-amber-600">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </MagicCard>
                      </BlurFade>
                    )
                  })}
                </div>
              </div>
            ))}

            {/* NDA note */}
            <BlurFade className="mx-auto max-w-2xl" yOffset={20}>
              <div className="flex items-start gap-3 rounded-2xl border border-amber-200/50 bg-amber-100/30 p-5 dark:border-amber-950/15 dark:bg-amber-950/10">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-600" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  This is a curated selection. Many projects are under NDA and can&apos;t be listed here, and some older work predates this portfolio. The full experience timeline is available on the resume page.
                </p>
              </div>
            </BlurFade>

            {/* CTA */}
            <BlurFade className="mx-auto max-w-xl text-center" yOffset={20}>
              <div className="rounded-2xl bg-gradient-to-br from-amber-700 to-amber-800 p-8">
                <p className="text-lg font-medium text-white">
                  Want the full resume?
                </p>
                <p className="mt-1 text-sm text-white/80">
                  See complete experience timeline with detailed bullet points.
                </p>
                <Button asChild size="lg" className="mt-6 rounded-full bg-white px-8 text-amber-800 shadow-lg hover:bg-white/90">
                  <Link href="/resume">
                    View Resume
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </BlurFade>
          </div>
        </Container>
      </Section>
    </>
  )
}
