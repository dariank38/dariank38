import Link from 'next/link'
import { ExternalLink, Mail } from 'lucide-react'
import { Container } from '@/components/container'
import { Dock } from '@/components/magicui/dock'
import { SITE_CONFIG } from '@/lib/constants'

const socialLinks = [
  { href: SITE_CONFIG.github, icon: ExternalLink, label: 'GitHub' },
  { href: SITE_CONFIG.linkedin, icon: ExternalLink, label: 'LinkedIn' },
  { href: SITE_CONFIG.twitter, icon: ExternalLink, label: 'Twitter' },
  { href: `mailto:${SITE_CONFIG.email}`, icon: Mail, label: 'Email' },
]

export function Footer() {
  return (
    <footer className="border-t border-amber-200/40 bg-gradient-to-b from-surface to-amber-50/40 dark:border-amber-800/15 dark:from-surface dark:to-amber-950/5">
      <Container className="flex flex-col items-center gap-8 py-12">
        <div className="text-center">
          <p className="text-lg font-medium text-foreground">
            Let&apos;s build something great together.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-block text-sm font-medium text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
          >
            Get in touch →
          </Link>
        </div>
        <Dock>
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center justify-center text-muted-foreground transition-colors hover:text-amber-600 dark:hover:text-amber-400"
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </Dock>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. Built with passion and caffeine.
        </p>
      </Container>
    </footer>
  )
}
