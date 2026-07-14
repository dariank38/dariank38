import { Mail, Heart, Clock, Check, FolderGit2, Bird, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata = {
  title: 'Contact',
  description: `Get in touch with ${SITE_CONFIG.name} — software engineer specializing in AI, full-stack, and Windows programming. Every conversation starts with a simple hello.`,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contact | ${SITE_CONFIG.name}`,
    description: `Get in touch with ${SITE_CONFIG.name} — software engineer specializing in AI, full-stack, and Windows programming.`,
  },
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
    icon: FolderGit2,
  },
  {
    title: 'Twitter',
    description: 'Random thoughts and updates',
    href: SITE_CONFIG.twitter,
    icon: Bird,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-100/50 to-background pt-32 pb-8 dark:from-amber-950/10 dark:to-background">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-amber-600/15 blur-3xl dark:bg-amber-800/10" />
        <div className="pointer-events-none absolute -right-32 top-10 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl dark:bg-amber-800/10" />
        <Container className="relative z-10">
          <BlurFade yOffset={20}>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
                Contact
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                <span className="text-gradient">Let&apos;s talk</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Whether your concerns are related to software development or everyday life, please feel free to contact me anytime if you&apos;re facing any difficulties.
              </p>
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Email CTA */}
      <Section className="py-6 md:py-8">
        <BlurFade yOffset={20}>
          <Link
            href={`mailto:${SITE_CONFIG.email}`}
            className="group relative mx-auto block max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-br from-amber-700 to-amber-800 p-8 text-center transition-all hover:shadow-xl hover:shadow-amber-700/20 md:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            <div className="relative z-10">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <Mail className="h-7 w-7 text-white" />
              </div>
              <p className="text-sm font-medium uppercase tracking-wider text-white/70">
                Direct email
              </p>
              <p className="mt-2 text-2xl font-bold text-white md:text-3xl">
                {SITE_CONFIG.email}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm">
                <Clock className="h-3.5 w-3.5" />
                I typically respond within 2 hours
              </div>
            </div>
          </Link>
        </BlurFade>

        <BlurFade className="mx-auto mt-6 max-w-2xl text-center" delay={0.08} yOffset={20}>
          <Heart className="mx-auto h-6 w-6 text-amber-700" />
          <p className="mt-2 text-base font-medium text-foreground">
            Every conversation starts with a simple hello.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Don&apos;t hesitate — I read every message.
          </p>
        </BlurFade>
      </Section>

      {/* Social channels */}
      <Section className="py-4 md:py-6">
        <BlurFade delay={0.08} yOffset={20}>
          <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-3">
            {contactLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-amber-200/50 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-amber-600/60 hover:shadow-md dark:border-amber-900/20 dark:hover:border-amber-700/40"
              >
                <link.icon className="h-4 w-4 text-amber-700 dark:text-amber-600" />
                {link.title}
                <ArrowRight className="h-3 w-3 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </BlurFade>
      </Section>

      {/* Trust signals */}
      <Section className="py-4 md:py-6">
        <BlurFade delay={0.12} yOffset={20}>
          <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-3">
            {[
              'Available for new opportunities',
              'Open to remote or on-site',
              'Comfortable with any stack',
            ].map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-amber-50/80 px-4 py-1.5 text-sm text-foreground dark:bg-amber-950/20"
              >
                <Check className="h-3.5 w-3.5 text-amber-700 dark:text-amber-600" />
                {item}
              </div>
            ))}
          </div>
        </BlurFade>
      </Section>

    </>
  )
}
