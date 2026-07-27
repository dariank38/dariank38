import Link from 'next/link'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Orb } from '@/components/orb'
import { Portrait } from '@/components/portrait'
import { Reveal } from '@/components/reveal'
import { WorkList, type WorkItem } from '@/components/work-list'
import { experiences, projectHighlights, skillCategories, testimonials } from '@/lib/data'
import { SITE_CONFIG } from '@/lib/constants'

const selectedWork: WorkItem[] = [
  { title: 'Supakon', role: 'AI expert marketplace · 4-model evaluation', year: '2024', href: 'https://supakon.com', external: true, image: '/projects/supakon.jpg' },
  { title: 'HindSight', role: 'Sub-second on-chain analytics', year: '2024', href: 'https://hindsight.vip', external: true, image: '/projects/hindsight.jpg' },
  { title: 'Author Wizard', role: 'AI book-writing pipelines', year: '2023', href: 'https://bookwiz.io', external: true, image: '/projects/author-wizard.jpg' },
  { title: 'Audie.ai', role: 'Automated audiobook generation', year: '2023', href: 'https://audie.ai', external: true, image: '/projects/audie-ai.jpg' },
  { title: 'StrongGate', role: '280-camera vision · PLC gate control', year: '2021', href: '/projects', image: '/projects/stronggate.jpg' },
  { title: 'MR Pay', role: 'Alipay-scale payments · signed transactions', year: '2020', href: '/projects', image: '/projects/mr-pay.jpg' },
]

const storyMoments = [
  { year: '1994', text: 'born; Windows 95 arrives a year later' },
  { year: 'age 14', text: 'C/C++, Win32, a VNC-style remote tool' },
  { year: '2015', text: 'the power outage; main.cpp lost, lesson permanent' },
  { year: '2017', text: 'LibreOffice docs covering three office walls' },
  { year: '2020', text: '280 cameras opening real gates' },
  { year: '2024', text: 'a nine-year promise, finally shipped' },
]

const exploreLinks = [
  { href: '/resume', title: 'Resume', note: 'Experience, skills, education — printable' },
  { href: '/blog', title: 'Blog', note: 'Nine Years, and Uncle — and more' },
  { href: '/profile', title: 'Profile', note: 'Psychometrics & ENFJ-T, if you like data on people' },
]

export default function Home() {
  const technologiesCount = skillCategories.reduce((acc, c) => acc + c.skills.length, 0)

  return (
    <>
      {/* ================= HERO ================= */}
      <header className="relative flex min-h-svh items-center overflow-hidden">
        <Orb />
        <div className="hero-fade pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-16 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <Portrait size={56} priority />
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/60 px-4 py-2 font-mono text-[0.72rem] tracking-[0.14em] text-dim">
              <i className="status-dot" />
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </div>
          <h1 className="display mt-7 text-5xl sm:text-7xl lg:text-[6.4rem]">
            {SITE_CONFIG.name}
            <br />
            <span className="text-faint">builds what others call impossible.</span>
          </h1>
          <p className="mt-7 max-w-[44ch] text-lg leading-relaxed text-dim">
            Software engineer since before it was a job —{' '}
            <b className="font-semibold text-foreground">
              Windows internals to multi-model AI pipelines
            </b>
            , with payments platforms, 280-camera vision systems, and eighteen shipped products in
            between.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-bright"
            >
              Selected work <ArrowDown className="h-4 w-4" />
            </Link>
            <Link
              href="/story"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-dim transition-colors hover:border-faint hover:text-foreground"
            >
              Read the story
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 z-10">
          <div className="mx-auto flex max-w-6xl justify-between px-5 font-mono text-[0.68rem] tracking-[0.18em] text-faint sm:px-8 lg:px-10">
            <span>EST. 1994 — FIRST LINE OF PASCAL</span>
            <span>SCROLL ↓</span>
          </div>
        </div>
      </header>

      {/* ================= STATS ================= */}
      <div className="border-y border-line bg-background-2">
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {[
            { value: '10', plus: true, label: 'years professional' },
            { value: String(projectHighlights.length), label: 'products shipped' },
            { value: String(technologiesCount), label: 'technologies' },
            { value: '280', label: 'cameras, one gate' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={
                'px-4 py-9 text-center sm:border-l sm:border-line ' +
                (i === 0 ? 'sm:border-l-0 ' : '') +
                (i % 2 === 1 ? 'max-sm:border-l max-sm:border-line ' : '')
              }
            >
              <b className="block text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">
                {stat.value}
                {stat.plus && <em className="not-italic text-gold">+</em>}
              </b>
              <span className="mono-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= WORK ================= */}
      <section id="work" className="py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="mb-12 flex items-baseline justify-between gap-4">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 className="display mt-2 text-3xl sm:text-5xl">Built, shipped, in production.</h2>
              </div>
              <span className="mono-label shrink-0">06 / {projectHighlights.length}</span>
            </div>
          </Reveal>
          <Reveal>
            <WorkList items={selectedWork} />
          </Reveal>
          <Reveal>
            <p className="mt-8 text-dim">
              + twelve more, from a LibreOffice HWP module to a Rust lottery backend holding 100k
              concurrent buyers —{' '}
              <Link href="/projects" className="font-medium text-gold hover:text-gold-bright">
                all projects →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= STORY BAND ================= */}
      <section className="border-y border-line bg-background-2 py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-10">
          <Reveal>
            <p className="eyebrow">The story · 23 paragraphs</p>
            <p className="mt-5 text-2xl font-medium leading-normal tracking-tight text-balance sm:text-3xl">
              “Born a year before the release of Windows 95, I can&apos;t quite pinpoint when my
              fascination with computers began.{' '}
              <span className="text-gold">It just always seemed to be there.</span>”
            </p>
            <Link
              href="/story"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-dim transition-colors hover:border-faint hover:text-foreground"
            >
              Read all of it — 12 min <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="font-mono text-[0.8rem] leading-[2.1] text-dim">
              {storyMoments.map((m) => (
                <div key={m.year + m.text}>
                  <span className="text-gold">{m.year}</span> — {m.text}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="mb-12">
              <p className="eyebrow">Experience</p>
              <h2 className="display mt-2 text-3xl sm:text-5xl">Five chapters of it.</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="border-t border-line">
              {experiences
                .slice()
                .reverse()
                .map((xp) => (
                  <div
                    key={xp.title + xp.period}
                    className="grid gap-2 border-b border-line px-1 py-8 sm:grid-cols-[11rem_1fr] sm:gap-8"
                  >
                    <span className="mono-label pt-1.5">{xp.period}</span>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {xp.title} <span className="font-medium text-gold">· {xp.company}</span>
                      </h3>
                      <p className="mt-2 max-w-[64ch] leading-relaxed text-dim">{xp.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </Reveal>
          <Reveal>
            <Link
              href="/resume"
              className="mt-8 inline-flex items-center gap-2 font-medium text-gold hover:text-gold-bright"
            >
              Full resume with details <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">What colleagues say</p>
              <p className="mt-6 text-2xl font-medium leading-normal tracking-tight text-balance sm:text-3xl">
                “{testimonials[0].quote}”
              </p>
              <p className="mono-label mt-7">
                {testimonials[0].author} — {testimonials[0].role}
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-2">
              {testimonials.slice(1).map((t) => (
                <figure key={t.role}>
                  <blockquote className="leading-relaxed text-dim">“{t.quote}”</blockquote>
                  <figcaption className="mono-label mt-4">
                    {t.author} — {t.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= EXPLORE ================= */}
      <section className="border-t border-line py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div>
              {exploreLinks.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group grid grid-cols-[2.4rem_1fr_auto] items-baseline gap-4 border-b border-line px-1 py-6 transition-[padding,background-color] duration-300 first:border-t hover:bg-background-2 hover:pl-4"
                >
                  <span className="mono-label pt-1">0{i + 1}</span>
                  <span>
                    <span className="text-xl font-semibold tracking-tight transition-colors group-hover:text-gold">
                      {l.title}
                    </span>
                    <span className="ml-4 hidden text-sm text-dim sm:inline">{l.note}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-faint transition-colors group-hover:text-gold" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="border-t border-line bg-background-2 py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="display mt-3 text-4xl sm:text-6xl lg:text-7xl">
              Have a problem nobody
              <br />
              else can figure out?
            </h2>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="mt-10 inline-block border-b-2 border-gold pb-1 text-xl font-semibold tracking-tight transition-colors hover:text-gold sm:text-3xl"
            >
              {SITE_CONFIG.email}
            </a>
            <p className="mt-5 text-sm text-dim">Usually responds within two hours. Seriously.</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
