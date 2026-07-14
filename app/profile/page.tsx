import { Brain, Target, Users, TrendingUp, Sparkles, CheckCircle2, Heart, Briefcase, TrendingUp as Growth, Users as Relationships, Fingerprint } from 'lucide-react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { MagicCard } from '@/components/magicui/magic-card'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { Badge } from '@/components/ui/badge'
import { psychometricTraits, psychometricSummary, mbtiData } from '@/lib/data'

export const metadata = {
  title: 'Profile | Darian King',
  description: 'Psychometric profile from Snaphunt and MBTI personality type from 16Personalities.',
}

const traitIcons = [Brain, Target, Users, TrendingUp]

export default function ProfilePage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-100/50 to-background pt-32 pb-2 dark:from-amber-950/10 dark:to-background">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-amber-600/15 blur-3xl dark:bg-amber-800/10" />
        <div className="pointer-events-none absolute -right-32 top-10 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl dark:bg-amber-800/10" />
        <Container className="relative z-10">
          <BlurFade yOffset={20}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
              Assessment
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-gradient">Psychometric Profile</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Insights from the Snaphunt psychometric assessment — covering thinking style, execution, collaboration, and adaptability.
            </p>
          </BlurFade>
        </Container>
      </section>

      {/* Top traits */}
      <Section className="py-2 md:py-2">
        <BlurFade yOffset={20}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Top traits:</span>
            {psychometricSummary.topTraits.map((trait) => (
              <Badge key={trait} className="bg-amber-700/15 text-amber-800 dark:bg-amber-800/20 dark:text-amber-600">
                <Sparkles className="mr-1 h-3 w-3" />
                {trait}
              </Badge>
            ))}
          </div>
        </BlurFade>
      </Section>

      {/* Trait cards */}
      <Section className="py-2 md:py-6">
        <div className="grid gap-6 md:grid-cols-2">
          {psychometricTraits.map((trait, index) => {
            const Icon = traitIcons[index] || Brain
            return (
              <BlurFade key={trait.category} delay={index * 0.08} yOffset={20}>
                <MagicCard className="h-full border-amber-200/50 p-6 dark:border-amber-950/15">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600/20 to-amber-700/20">
                      <Icon className="h-6 w-6 text-amber-700 dark:text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground">{trait.category}</h3>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {trait.traits.map((t) => (
                          <span key={t} className="rounded-md bg-amber-100/50 px-2 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-950/20 dark:text-amber-600">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {trait.description}
                  </p>
                </MagicCard>
              </BlurFade>
            )
          })}
        </div>
      </Section>

      {/* Role Fit & Organization Fit */}
      <Section className="py-2 md:py-6">
        <div className="grid gap-6 md:grid-cols-2">
          <BlurFade yOffset={20}>
            <MagicCard className="h-full border-amber-200/50 p-6 dark:border-amber-950/15">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-amber-700 dark:text-amber-600" />
                <h3 className="text-lg font-bold text-foreground">Role Fit</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Roles where I tend to thrive:
              </p>
              <ul className="mt-4 space-y-3">
                {psychometricSummary.roleFit.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </MagicCard>
          </BlurFade>
          <BlurFade delay={0.08} yOffset={20}>
            <MagicCard className="h-full border-amber-200/50 p-6 dark:border-amber-950/15">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-700 dark:text-amber-600" />
                <h3 className="text-lg font-bold text-foreground">Organization Fit</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Environments where I do my best work:
              </p>
              <ul className="mt-4 space-y-3">
                {psychometricSummary.organizationFit.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </MagicCard>
          </BlurFade>
        </div>
      </Section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* MBTI Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-amber-100/40 pt-20 pb-16 md:pt-28 md:pb-20 dark:to-amber-950/10">
        <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-amber-600/10 blur-3xl dark:bg-amber-700/8" />
        <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl dark:bg-amber-800/10" />
        <Container className="relative z-10">
        {/* MBTI Section Header */}
        <BlurFade yOffset={20}>
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
              <Fingerprint className="mr-1.5 inline h-4 w-4" />
              16Personalities
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-gradient">MBTI Personality Type</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              My Myers-Briggs result from the 16Personalities assessment — a separate personality framework from the Snaphunt psychometric profile above.
            </p>
          </div>
        </BlurFade>

        {/* MBTI Result Card */}
        <BlurFade delay={0.06} yOffset={20}>
          <div className="mb-10 rounded-2xl border border-amber-200/50 bg-amber-100/50 p-8 dark:border-amber-950/15 dark:bg-amber-950/20">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Result</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-foreground">
                  {mbtiData.type}{' '}—{' '}
                  <span className="text-gradient">{mbtiData.typeName}</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Role: {mbtiData.role}
                </p>
              </div>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600/20 to-amber-700/20">
                <Fingerprint className="h-8 w-8 text-amber-700 dark:text-amber-600" />
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Trait bars */}
        <BlurFade delay={0.08} yOffset={20}>
          <div className="mx-auto mb-8 max-w-4xl space-y-4">
            {mbtiData.traits.map((trait) => (
              <div key={trait.label}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{trait.label}</span>
                    <span className="text-xs text-muted-foreground">{trait.category}</span>
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {trait.percent}%
                  </span>
                </div>
                <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-700"
                    style={{ width: `${trait.percent}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  vs {trait.opposite} ({100 - trait.percent}%)
                </p>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* Description */}
        <BlurFade delay={0.12} yOffset={20}>
          <div className="mx-auto mb-8 max-w-4xl space-y-4">
            {mbtiData.description.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </div>
        </BlurFade>

        {/* Detail sections */}
        <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-3">
          {mbtiData.sections.map((section, index) => {
            const icons = [Briefcase, Growth, Relationships]
            const Icon = icons[index] || Heart
            return (
              <BlurFade key={section.title} delay={0.16 + index * 0.06} yOffset={20}>
                <MagicCard className="h-full border-amber-200/50 p-6 dark:border-amber-950/15">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-amber-700 dark:text-amber-600" />
                    <h3 className="text-base font-bold text-foreground">{section.title}</h3>
                  </div>
                  <div className="mt-3 space-y-2">
                    {section.paragraphs.map((para, i) => (
                      <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>
                </MagicCard>
              </BlurFade>
            )
          })}
        </div>
        </Container>
      </section>
    </>
  )
}
