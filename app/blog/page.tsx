import { ArrowRight, Calendar, Heart, Clock } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BlurFade } from '@/components/magicui/blur-fade'
import { MagicCard } from '@/components/magicui/magic-card'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { blogPosts } from '@/lib/data'

export const metadata = {
  title: 'Blog | Darian King',
  description: 'Project notes, stories, and ideas.',
}

export default function BlogPage() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <>
      {/* Hero header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 to-background pt-32 pb-12 dark:from-amber-950/10 dark:to-background">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-rose-300/20 blur-3xl dark:bg-rose-600/10" />
        <Container className="relative z-10">
          <BlurFade yOffset={20}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Writing
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-gradient">Stories & lessons</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              A collection of project write-ups, career stories, and lessons learned from decades in the trenches.
            </p>
          </BlurFade>
        </Container>
      </section>

      {/* Featured post */}
      <Section className="pt-8">
        <BlurFade yOffset={20}>
          <Link href={featured.slug === 'story' ? '/story' : '/blog'}>
            <MagicCard className="group overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[240px] bg-gradient-to-br from-amber-400 to-orange-500 p-8">
                  <div className="pointer-events-none absolute inset-0 bg-noise" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex flex-wrap gap-2">
                      {featured.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div>
                      <Clock className="h-5 w-5 text-white/70" />
                      <p className="mt-2 text-xs text-white/70">Featured post</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {featured.date}
                  </div>
                  <h2 className="mt-3 text-2xl font-bold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-400">
                    Read post
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </MagicCard>
          </Link>
        </BlurFade>
      </Section>

      {/* Grid of remaining posts */}
      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((post, index) => (
            <BlurFade key={post.slug} delay={index * 0.08} yOffset={20}>
              <Link href={post.slug === 'story' ? '/story' : '/blog'}>
                <MagicCard className="group h-full border-amber-200/40 transition-all hover:shadow-lg dark:border-amber-800/15">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-amber-100/60 text-xs text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
                          {tag}
                        </Badge>
                      ))}
                      <span className="ml-auto flex items-center text-xs text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {post.date}
                      </span>
                    </div>
                    <CardTitle className="mt-2 text-lg group-hover:text-amber-600 dark:group-hover:text-amber-400">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-400">
                      Read
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </MagicCard>
              </Link>
            </BlurFade>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pt-0 pb-24" align="center">
        <BlurFade className="mx-auto max-w-xl" yOffset={20}>
          <div className="rounded-2xl border border-amber-300/40 bg-amber-50/60 p-8 text-center dark:border-amber-800/20 dark:bg-amber-950/10">
            <Heart className="mx-auto h-8 w-8 text-amber-500" />
            <p className="mt-4 text-lg font-medium text-foreground">More posts coming soon.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Have a question or topic you&apos;d like me to write about?
            </p>
            <Button asChild variant="outline" className="mt-6 rounded-full border-amber-300/60 px-6 text-amber-700 hover:bg-amber-100/50 dark:border-amber-700/30 dark:text-amber-400 dark:hover:bg-amber-900/20">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </BlurFade>
      </Section>
    </>
  )
}
