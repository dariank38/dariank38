'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export type WorkItem = {
  title: string
  role: string
  year: string
  href: string
  external?: boolean
  image?: string
}

/**
 * Numbered work rows with a cursor-following image preview on hover
 * (pointer devices only — touch devices just get the rows).
 */
export function WorkList({ items }: { items: WorkItem[] }) {
  const previewRef = useRef<HTMLDivElement>(null)
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const pos = useRef({ px: 0, py: 0, tx: 0, ty: 0 })
  const raf = useRef(0)

  useEffect(() => {
    const loop = () => {
      const p = pos.current
      p.px += (p.tx - p.px) * 0.14
      p.py += (p.ty - p.py) * 0.14
      const el = previewRef.current
      if (el) {
        el.style.left = `${p.px + 26}px`
        el.style.top = `${p.py - 110}px`
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf.current)
  }, [])

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const inner = (
          <>
            <span className="mono-label pt-1">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-xl font-semibold tracking-tight transition-colors group-hover:text-gold sm:text-2xl">
              {item.title}
            </span>
            <span className="hidden text-sm text-dim sm:block">{item.role}</span>
            <span className="mono-label pt-1">{item.year}</span>
          </>
        )
        const rowClass = cn(
          'group grid grid-cols-[2.4rem_1fr_auto] items-baseline gap-4 border-b border-line px-1 py-6',
          'transition-[padding,background-color] duration-300 hover:bg-background-2 hover:pl-4',
          'sm:grid-cols-[3rem_1fr_auto_auto] sm:gap-6'
        )
        const events = {
          onMouseEnter: () => setActiveImage(item.image ?? null),
          onMouseLeave: () => setActiveImage(null),
          onMouseMove: (e: React.MouseEvent) => {
            pos.current.tx = e.clientX
            pos.current.ty = e.clientY
          },
        }
        return item.external ? (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={rowClass}
            {...events}
          >
            {inner}
          </a>
        ) : (
          <Link key={item.title} href={item.href} className={rowClass} {...events}>
            {inner}
          </Link>
        )
      })}

      <div
        ref={previewRef}
        aria-hidden="true"
        className={cn(
          'pointer-events-none fixed z-40 hidden aspect-[4/3] w-76 overflow-hidden rounded-xl border border-foreground/15 shadow-2xl shadow-black/50 transition-[opacity,transform] duration-200 [@media(hover:hover)]:block',
          activeImage ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        )}
      >
        {items
          .filter((item) => item.image)
          .map((item) => (
            <Image
              key={item.image}
              src={item.image as string}
              alt=""
              fill
              sizes="304px"
              className={cn(
                'object-cover transition-opacity duration-150',
                activeImage === item.image ? 'opacity-100' : 'opacity-0'
              )}
            />
          ))}
      </div>
    </div>
  )
}
