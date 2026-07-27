import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-line bg-background-2">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-6 font-mono text-[0.7rem] tracking-[0.14em] text-faint sm:px-8 lg:px-10">
        <span>© 2026 DARIAN KING</span>
        <span className="flex gap-4">
          <Link href={`mailto:${SITE_CONFIG.email}`} className="transition-colors hover:text-gold">
            EMAIL
          </Link>
          <Link
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            GITHUB
          </Link>
          <Link
            href={SITE_CONFIG.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            TWITTER
          </Link>
        </span>
        <span>PASCAL → AI, 1994 → ∞</span>
      </div>
    </footer>
  )
}
