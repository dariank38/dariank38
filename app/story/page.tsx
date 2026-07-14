import { BookOpen, Cpu, Camera, CreditCard, Brain, Rocket } from 'lucide-react'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { CardContent } from '@/components/ui/card'
import { AnimatedParagraph } from '@/components/animated-paragraph'
import { BlurFade } from '@/components/magicui/blur-fade'
import { MagicCard } from '@/components/magicui/magic-card'
import { storyParagraphs, storyTitle } from '@/lib/data'

export const metadata = {
  title: 'My Story | Darian King',
  description: 'The full personal journey from Windows 95 to AI.',
}

const keyMoments = [
  { icon: Cpu, label: 'Windows 95 era', detail: 'Started with legacy OSes' },
  { icon: BookOpen, label: 'First code', detail: 'Pascal, then C/C++ at 14' },
  { icon: Camera, label: 'Startup years', detail: 'Polyglot crash course' },
  { icon: CreditCard, label: 'Fintech at scale', detail: 'Alibaba-level payments' },
  { icon: Brain, label: 'AI era', detail: 'Audiobooks & auto-completion' },
  { icon: Rocket, label: 'Present', detail: 'Still diving headfirst' },
]

export default function StoryPage() {
  const firstHalf = storyParagraphs.slice(0, 7)
  const secondHalf = storyParagraphs.slice(7, 14)
  const finalPart = storyParagraphs.slice(14)

  return (
    <>
      {/* Hero header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 to-background pt-32 pb-16 dark:from-amber-950/10 dark:to-background">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-600/10" />
        <Container className="relative z-10">
          <BlurFade yOffset={20}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              The full journey
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-gradient">{storyTitle}</span>
            </h1>
          </BlurFade>
        </Container>
      </section>

      {/* Content + sidebar */}
      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          {/* Main content */}
          <div className="min-w-0">
            <MagicCard className="border-amber-200/40 dark:border-amber-800/15">
              <CardContent className="p-6 md:p-10">
                <article className="prose">
                  {firstHalf.map((paragraph, index) => (
                    <AnimatedParagraph
                      key={index}
                      className={index === 0 ? 'first-letter' : ''}
                    >
                      {paragraph}
                    </AnimatedParagraph>
                  ))}
                </article>
              </CardContent>
            </MagicCard>

            {/* Pull quote breaker */}
            <BlurFade className="my-12" yOffset={20}>
              <blockquote className="border-l-4 border-amber-400 pl-6 text-xl font-medium italic leading-relaxed text-foreground/80">
                &ldquo;I would never claim experience I don&apos;t have, and the things I have done, I remember with precision.&rdquo;
              </blockquote>
            </BlurFade>

            <MagicCard className="border-amber-200/40 dark:border-amber-800/15">
              <CardContent className="p-6 md:p-10">
                <article className="prose">
                  {secondHalf.map((paragraph, index) => (
                    <AnimatedParagraph key={index}>
                      {paragraph}
                    </AnimatedParagraph>
                  ))}
                </article>
              </CardContent>
            </MagicCard>

            {/* Final section */}
            <BlurFade className="mt-12" yOffset={20}>
              <div className="rounded-2xl border border-amber-300/40 bg-gradient-to-br from-amber-50/80 to-rose-50/40 p-8 dark:border-amber-800/20 dark:from-amber-950/15 dark:to-rose-950/5">
                <article className="prose">
                  {finalPart.map((paragraph, index) => (
                    <AnimatedParagraph key={index}>
                      {paragraph}
                    </AnimatedParagraph>
                  ))}
                </article>
              </div>
            </BlurFade>
          </div>

          {/* Sticky sidebar */}
          <BlurFade delay={0.2} yOffset={20}>
            <div className="sticky top-24 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Key moments
              </h3>
              {keyMoments.map((moment) => (
                <div
                  key={moment.label}
                  className="flex items-start gap-3 rounded-xl border border-amber-200/40 bg-surface/60 p-3 dark:border-amber-800/10 dark:bg-surface/30"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400/20 to-orange-500/20">
                    <moment.icon className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{moment.label}</p>
                    <p className="text-xs text-muted-foreground">{moment.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </Section>
    </>
  )
}
