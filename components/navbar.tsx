'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetClose, SheetTrigger } from '@/components/ui/sheet'
import { ModeToggle } from '@/components/mode-toggle'
import { cn } from '@/lib/utils'
import { BASE_PATH, SITE_CONFIG } from '@/lib/constants'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/story', label: 'Story' },
  { href: '/resume', label: 'Resume' },
  { href: '/profile', label: 'Profile' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname() ?? ''
  const normalized = (pathname.replace(BASE_PATH, '') || '/')

  const linkClass = (active: boolean) =>
    cn(
      'rounded-full px-4 py-2 text-sm font-medium transition-all',
      active
        ? 'bg-amber-100/80 text-amber-800 dark:bg-amber-950/30 dark:text-amber-600'
        : 'text-muted-foreground hover:text-foreground hover:bg-amber-100/40 dark:hover:bg-amber-900/15'
    )

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-amber-200/50 bg-background/70 backdrop-blur-xl dark:border-amber-950/15">
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground transition-colors hover:text-amber-700 dark:hover:text-amber-700"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 text-sm font-bold text-white shadow-sm">
            DK
          </span>
          <span className="hidden sm:inline">{SITE_CONFIG.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-amber-200/50 bg-surface/60 p-1 backdrop-blur-md dark:border-amber-950/15 md:flex">
          {navLinks.map((link) => {
            const active = link.href === '/' ? normalized === '/' : normalized.startsWith(link.href)
            return (
              <li key={link.href}>
                <Link href={link.href} className={linkClass(active)}>
                  {link.label}
                </Link>
              </li>
            )
          })}
          <li>
            <ModeToggle />
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const active = link.href === '/' ? normalized === '/' : normalized.startsWith(link.href)
                  return (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                          active
                            ? 'bg-surface text-accent'
                            : 'text-muted-foreground hover:bg-surface hover:text-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  )
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
