import { ArrowRight, Calendar, Heart, Clock } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { blogPosts } from '@/lib/data'

export const metadata = {
  title: 'Blog | Darian King',
  description: 'Project notes, stories, and ideas.',
}

function estimateReadTime(text: string) {
  const words = text.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export default function BlogPage() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)
  const featuredReadTime = estimateReadTime(featured.excerpt)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-100/50 to-background pt-32 pb-8 dark:from-amber-950/10 dark:to-background">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl dark:bg-amber-700/10" />
        <Container className="relative z-10">
          <BlurFade yOffset={20}>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
                Writing
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                <span className="text-gradient">Stories & lessons</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Project write-ups, career stories, and lessons learned from decades in the trenches.
              </p>
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Featured article */}
      <Section className="py-8 md:py-12">
        <BlurFade yOffset={20}>
          <Link href={featured.slug === 'story' ? '/story' : `/blog/${featured.slug}`} className="group block">
            <article className="mx-auto max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
                Featured
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground group-hover:text-amber-700 md:text-4xl dark:group-hover:text-amber-600">
                {featured.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {featuredReadTime} min read
                </span>
                <div className="flex gap-2">
                  {featured.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <span className="mt-8 inline-flex items-center text-sm font-medium text-amber-700 dark:text-amber-600">
                Read article
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="mt-10 h-px w-full bg-border" />
            </article>
          </Link>
        </BlurFade>
      </Section>

      {/* More articles */}
      {rest.length > 0 && (
        <Section className="py-0 pb-16">
          <div className="mx-auto max-w-2xl space-y-10">
            {rest.map((post, index) => (
              <BlurFade key={post.slug} delay={index * 0.06} yOffset={20}>
                <Link
                  href={post.slug === 'story' ? '/story' : `/blog/${post.slug}`}
                  className="group block"
                >
                  <article>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {estimateReadTime(post.excerpt)} min read
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-600">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="ml-auto inline-flex items-center text-sm font-medium text-amber-700 dark:text-amber-600">
                        Read
                        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              </BlurFade>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section className="py-10 pb-24" align="center">
        <BlurFade className="mx-auto max-w-xl text-center" yOffset={20}>
          <Heart className="mx-auto h-6 w-6 text-amber-700" />
          <p className="mt-3 text-base font-medium text-foreground">More posts coming soon.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Have a question or topic you&apos;d like me to write about?
          </p>
          <Button asChild variant="outline" className="mt-5 rounded-full px-6">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </BlurFade>
      </Section>
    </>
  )
}
