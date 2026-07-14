import {
  ArrowRight,
  Camera,
  CreditCard,
  FileText,
  Brain,
  Code,
  Cpu,
  Heart,
  Layers,
  Smartphone,
  Sparkles,
  Cloud,
  Quote,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BlurFade } from '@/components/magicui/blur-fade'
import { MagicCard } from '@/components/magicui/magic-card'
import { Hero } from '@/components/hero'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { Timeline } from '@/components/timeline'
import {
  blogPosts,
  experiences,
  projectHighlights,
  skillCategories,
  testimonials,
} from '@/lib/data'

const skillIcons = [Cpu, Code, Layers, Smartphone, Cloud, Brain]
const projectIcons: Record<string, React.ElementType> = {
  brain: Brain,
  'credit-card': CreditCard,
  camera: Camera,
  'file-text': FileText,
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400/20 to-orange-500/20">
                      <Icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{category.category}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-amber-100/50 text-xs text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
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

      {/* Projects — alternating left/right layout */}
      <Section
        eyebrow="Selected work"
        title="Projects I'm proud of"
        subtitle="From AI to hardware to fintech at scale — a few highlights from the journey."
        className="bg-surface"
      >
        <div className="space-y-12">
          {projectHighlights.map((project, index) => {
            const Icon = projectIcons[project.icon] || Sparkles
            const reversed = index % 2 === 1
            return (
              <BlurFade key={project.title} delay={index * 0.08} yOffset={30}>
                <div className={`grid items-center gap-8 md:grid-cols-2 ${reversed ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <MagicCard className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-500/20">
                      <Icon className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-amber-100/60 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </MagicCard>
                  <div className="flex flex-col gap-4">
                    <div className="rounded-2xl border border-amber-200/40 bg-gradient-to-br from-amber-100/40 to-rose-100/30 p-6 dark:border-amber-800/15 dark:from-amber-900/10 dark:to-rose-900/5">
                      <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                        <Zap className="h-4 w-4" />
                        <span className="text-xs font-semibold uppercase tracking-wider">Impact</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {index === 0 && 'Transformed a manual publishing workflow into an automated pipeline.'}
                        {index === 1 && 'Processed transactions at Alibaba-scale with blockchain-inspired security.'}
                        {index === 2 && 'Connected software to the physical world — 28 cameras, real gates, real vehicles.'}
                        {index === 3 && 'Shipped a full office suite used in production environments.'}
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            )
          })}
        </div>
      </Section>

      {/* Career — split layout: timeline left, CTA card right */}
      <Section
        eyebrow="Journey"
        title="Career phases"
        subtitle="Every phase taught me something new — and I loved every step."
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <Timeline items={experiences.slice(0, 4)} />
          <BlurFade delay={0.2} yOffset={20}>
            <div className="sticky top-24 space-y-4">
              <MagicCard className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Want the full picture?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  See the complete resume with all experience, skills, and education.
                </p>
                <Button asChild variant="outline" className="mt-4 w-full rounded-full border-amber-300/60 text-amber-700 hover:bg-amber-100/50 dark:border-amber-700/30 dark:text-amber-400 dark:hover:bg-amber-900/20">
                  <Link href="/resume">
                    View full resume
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MagicCard>
              <div className="rounded-2xl border border-amber-200/40 bg-amber-50/60 p-6 dark:border-amber-800/15 dark:bg-amber-950/10">
                <p className="text-3xl font-bold text-gradient">20+</p>
                <p className="mt-1 text-sm text-muted-foreground">Years of building software across every layer of the stack.</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </Section>

      {/* Testimonials — large featured quote */}
      <Section className="bg-surface" align="center">
        <BlurFade className="mx-auto max-w-3xl" yOffset={20}>
          <Quote className="mx-auto h-12 w-12 text-amber-400/50" />
          <blockquote className="mt-6 text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            &ldquo;{testimonials[0].quote}&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-sm font-bold text-white">
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-xs font-bold text-white">
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

      {/* Blog — featured + grid */}
      <Section
        eyebrow="Writing"
        title="Latest posts"
        subtitle="Thoughts, stories, and lessons from the trenches."
      >
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Featured post */}
          <BlurFade yOffset={20}>
            <Link href={blogPosts[0].slug === 'story' ? '/story' : '/blog'}>
              <MagicCard className="group h-full p-8">
                <div className="flex flex-wrap gap-2">
                  {blogPosts[0].tags.map((tag) => (
                    <Badge key={tag} className="bg-amber-500/90 text-white">{tag}</Badge>
                  ))}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400">
                  {blogPosts[0].title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {blogPosts[0].excerpt}
                </p>
                <span className="mt-6 inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-400">
                  Read post
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </MagicCard>
            </Link>
          </BlurFade>
          {/* Secondary posts */}
          <div className="flex flex-col gap-4">
            {blogPosts.slice(1).map((post, index) => (
              <BlurFade key={post.slug} delay={index * 0.08} yOffset={20}>
                <Link href={post.slug === 'story' ? '/story' : '/blog'}>
                  <MagicCard className="group h-full p-5">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-amber-100/60 text-xs text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </MagicCard>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA — full-width banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 py-20 md:py-28">
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
              <Button asChild size="lg" className="rounded-full bg-white px-8 text-amber-700 shadow-lg hover:bg-white/90">
                <Link href="/contact">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 px-8 text-white hover:bg-white/10">
                <Link href="/resume">View resume</Link>
              </Button>
            </div>
          </BlurFade>
        </Container>
      </section>
    </>
  )
}

