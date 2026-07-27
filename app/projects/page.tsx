import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
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

const companyOrder = ['NeuralBridge', 'NovaCircuit', 'Freelance']

export default function ProjectsPage() {
  const grouped = companyOrder
    .map((company) => ({
      company,
      projects: projectHighlights.filter((p) => p.company === company),
    }))
    .filter((g) => g.projects.length > 0)
    .reduce<{ company: string; projects: typeof projectHighlights; start: number }[]>(
      (acc, g) => {
        const prev = acc[acc.length - 1]
        const start = prev ? prev.start + prev.projects.length : 0
        return [...acc, { ...g, start }]
      },
      []
    )

  return (
    <>
      {/* Header */}
      <section className="border-b border-line pb-14 pt-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="eyebrow">Portfolio</p>
                <h1 className="display mt-3 text-4xl sm:text-6xl">All projects.</h1>
              </div>
              <span className="mono-label shrink-0">{String(projectHighlights.length).padStart(2, '0')} TOTAL</span>
            </div>
            <p className="mt-5 max-w-2xl leading-relaxed text-dim">
              {projectHighlights.length} projects across AI, fintech, e-commerce, computer vision,
              blockchain, and enterprise systems.
            </p>
            <p className="mt-6 max-w-2xl border-l-2 border-gold pl-5 text-sm leading-relaxed text-dim">
              This is a curated selection. Many projects are under NDA and can&apos;t be listed here,
              and some older work predates this portfolio. The full experience timeline is available
              on the{' '}
              <Link href="/resume" className="font-medium text-gold underline-offset-2 hover:underline">
                resume page
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects grouped by company */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl space-y-24 px-5 sm:px-8 lg:px-10">
          {grouped.map((group) => (
            <div key={group.company}>
              <Reveal>
                <div className="mb-2 flex items-center gap-4">
                  <h2 className="mono-label text-gold">{group.company.toUpperCase()}</h2>
                  <div className="h-px flex-1 bg-line" />
                  <span className="mono-label">{group.projects.length} PROJECTS</span>
                </div>
              </Reveal>
              <div>
                {group.projects.map((project, projectIndex) => {
                  const no = String(group.start + projectIndex + 1).padStart(2, '0')
                  return (
                    <Reveal key={project.title}>
                      <article className="grid gap-8 border-b border-line py-12 lg:grid-cols-[1fr_20rem]">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                            <span className="mono-label">{no}</span>
                            <h3 className="text-2xl font-semibold tracking-tight">
                              {project.url ? (
                                <a
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                                >
                                  {project.title}
                                  <ArrowUpRight className="h-4 w-4 text-faint" />
                                </a>
                              ) : (
                                project.title
                              )}
                            </h3>
                          </div>
                          <p className="mt-4 max-w-[68ch] leading-relaxed text-dim">
                            {project.description}
                          </p>

                          {(project.challenge || project.solution) && (
                            <div className="mt-7 grid gap-6 sm:grid-cols-2">
                              {project.challenge && (
                                <div>
                                  <p className="mono-label mb-2 text-gold">CHALLENGE</p>
                                  <p className="text-[0.9rem] leading-relaxed text-dim">
                                    {project.challenge}
                                  </p>
                                </div>
                              )}
                              {project.solution && (
                                <div>
                                  <p className="mono-label mb-2 text-gold">SOLUTION</p>
                                  <p className="text-[0.9rem] leading-relaxed text-dim">
                                    {project.solution}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}

                          {project.techniques && project.techniques.length > 0 && (
                            <div className="mt-7">
                              <p className="mono-label mb-2 text-gold">TECHNIQUES</p>
                              <ul className="space-y-1.5">
                                {project.techniques.map((t) => (
                                  <li key={t} className="flex gap-3 text-[0.9rem] leading-relaxed text-dim">
                                    <span className="select-none pt-px text-gold">—</span>
                                    {t}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <p className="mt-7 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-faint">
                            {project.tags.join(' · ')}
                          </p>
                        </div>

                        {project.image && (
                          <div className="order-first lg:order-none">
                            <div className="overflow-hidden rounded-xl border border-line lg:sticky lg:top-24">
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={560}
                                height={420}
                                className="h-auto w-full"
                              />
                            </div>
                          </div>
                        )}
                      </article>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-background-2 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="eyebrow">Next</p>
            <h2 className="display mt-3 text-3xl sm:text-5xl">Want one of these for yourself?</h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-bright"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
