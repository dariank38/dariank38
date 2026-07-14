import { ExternalLink, Mail, Heart, Clock, Check } from 'lucide-react'
import Link from 'next/link'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { BlurFade } from '@/components/magicui/blur-fade'
import { MagicCard } from '@/components/magicui/magic-card'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata = {
  title: 'Contact | Darian King',
  description: `Get in touch with ${SITE_CONFIG.name}.`,
}

const contactLinks = [
  {
    title: 'Email',
    description: 'Best way to reach me',
    href: `mailto:${SITE_CONFIG.email}`,
    icon: Mail,
  },
  {
    title: 'GitHub',
    description: 'Open source and side projects',
    href: SITE_CONFIG.github,
    icon: ExternalLink,
  },
  {
    title: 'LinkedIn',
    description: 'Professional profile',
    href: SITE_CONFIG.linkedin,
    icon: ExternalLink,
  },
  {
    title: 'Twitter',
    description: 'Random thoughts and updates',
    href: SITE_CONFIG.twitter,
    icon: ExternalLink,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 to-background pt-32 pb-12 dark:from-amber-950/10 dark:to-background">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-600/10" />
        <Container className="relative z-10">
          <BlurFade yOffset={20}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-gradient">Let&apos;s talk</span>
            </h1>
          </BlurFade>
        </Container>
      </section>

      {/* Split layout */}
      <Section className="pt-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Left — intro + email CTA */}
          <BlurFade yOffset={20}>
            <div className="space-y-8">
              <div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Whether you want to discuss a project, ask a question, or just say hi — I&apos;d genuinely love to hear from you. No project is too big or too small.
                </p>
              </div>

              {/* Email highlight card */}
              <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-8">
                <Mail className="h-8 w-8 text-white/80" />
                <p className="mt-4 text-sm font-medium uppercase tracking-wider text-white/70">
                  Direct email
                </p>
                <Link
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="mt-2 block text-xl font-bold text-white underline-offset-4 hover:underline"
                >
                  {SITE_CONFIG.email}
                </Link>
                <p className="mt-4 flex items-center gap-2 text-sm text-white/80">
                  <Clock className="h-4 w-4" />
                  I typically respond within 24 hours.
                </p>
              </div>

              {/* Trust signals */}
              <div className="space-y-3">
                {[
                  'Available for new opportunities',
                  'Open to remote or on-site',
                  'Comfortable with any stack',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                      <Check className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <p className="text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Right — contact links */}
          <BlurFade delay={0.15} yOffset={20}>
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Other channels
              </h3>
              {contactLinks.map((link) => (
                <Link key={link.title} href={link.href} target="_blank" rel="noopener noreferrer">
                  <MagicCard className="flex items-center gap-4 border-amber-200/40 p-5 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-amber-800/15">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20">
                      <link.icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base">{link.title}</CardTitle>
                      <CardDescription>{link.description}</CardDescription>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </MagicCard>
                </Link>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Bottom warmth */}
        <BlurFade className="mx-auto mt-16 max-w-2xl text-center" delay={0.3} yOffset={20}>
          <Heart className="mx-auto h-8 w-8 text-amber-500" />
          <p className="mt-4 text-lg font-medium text-foreground">
            Every conversation starts with a simple hello.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Don&apos;t hesitate — I read every message.
          </p>
        </BlurFade>
      </Section>
    </>
  )
}
