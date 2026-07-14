import { ArrowLeft, ArrowRight, Calendar, ExternalLink, Heart } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BlurFade } from '@/components/magicui/blur-fade'
import { MagicCard } from '@/components/magicui/magic-card'
import { Section } from '@/components/section'
import { Container } from '@/components/container'
import { blogPosts, blogPostContents } from '@/lib/data'

export function generateStaticParams() {
  return blogPosts
    .filter((post) => post.slug !== 'story')
    .map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((resolvedParams) => {
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug)
    if (!post) return { title: 'Post not found' }
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: `/blog/${post.slug}` },
      openGraph: {
        type: 'article',
        title: `${post.title} | Darian King`,
        description: post.excerpt,
        publishedTime: post.date,
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${post.title} | Darian King`,
        description: post.excerpt,
      },
    }
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  const content = blogPostContents.find((c) => c.slug === slug)

  if (!post) notFound()

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-100/50 to-background pt-32 pb-12 dark:from-amber-950/10 dark:to-background">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-amber-600/15 blur-3xl dark:bg-amber-800/10" />
        <Container className="relative z-10">
          <BlurFade yOffset={20}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-amber-700 dark:hover:text-amber-700">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} className="bg-amber-700/15 text-amber-800 dark:bg-amber-800/20 dark:text-amber-600">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-gradient">{post.title}</span>
            </h1>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-3 w-3" />
              {post.date}
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Content */}
      <Section className="pt-8">
        <div className="mx-auto max-w-2xl">
          {content ? (
            <article className="space-y-8">
              {content.sections.map((section, sIndex) => (
                <BlurFade key={sIndex} delay={sIndex * 0.05} yOffset={20}>
                  <div>
                    {section.heading && (
                      <h2 className="mb-4 text-xl font-bold text-foreground">{section.heading}</h2>
                    )}
                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-base leading-relaxed text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </BlurFade>
              ))}
            </article>
          ) : (
            <MagicCard className="p-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </MagicCard>
          )}

          {/* Uncle links */}
          {slug === 'nine-years-and-uncle' && (
            <BlurFade className="mt-12" yOffset={20}>
              <div className="rounded-2xl border border-amber-200/50 bg-amber-100/40 p-8 dark:border-amber-950/15 dark:bg-amber-950/20">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-amber-700 dark:text-amber-600" />
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-600">
                    About Uncle
                  </h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  The marriage and couples-counseling service he runs, and the work he stands behind:
                </p>
                <div className="mt-5 space-y-3">
                  <a href="https://retrouvaille.info/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 rounded-xl border border-amber-200/50 bg-background p-4 transition-all hover:shadow-md dark:border-amber-950/15">
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-700">Retrouvaille</p>
                      <p className="text-xs text-muted-foreground">A lifeline for marriages — the program that started it all</p>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-amber-700 dark:group-hover:text-amber-700" />
                  </a>
                  <a href="https://dialoguedaily.app/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 rounded-xl border border-amber-200/50 bg-background p-4 transition-all hover:shadow-md dark:border-amber-950/15">
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-700">Dialogue Daily</p>
                      <p className="text-xs text-muted-foreground">A daily conversation app for couples — the project we built together</p>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-amber-700 dark:group-hover:text-amber-700" />
                  </a>
                  <a href="https://advancedwebstrategies.com/about-us/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 rounded-xl border border-amber-200/50 bg-background p-4 transition-all hover:shadow-md dark:border-amber-950/15">
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-700">Advanced Web Strategies</p>
                      <p className="text-xs text-muted-foreground">His team and company — where I work alongside him today</p>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-amber-700 dark:group-hover:text-amber-700" />
                  </a>
                </div>
              </div>
            </BlurFade>
          )}

          {/* CTA */}
          <BlurFade className="mt-12" yOffset={20}>
            <div className="rounded-2xl bg-gradient-to-br from-amber-700 to-amber-800 p-8 text-center">
              <p className="text-lg font-medium text-white">
                Thanks for reading
              </p>
              <p className="mt-1 text-sm text-white/80">
                Want to talk about your project?
              </p>
              <Button asChild size="lg" className="mt-6 rounded-full bg-white px-8 text-amber-800 shadow-lg hover:bg-white/90">
                <Link href="/contact">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </Section>
    </>
  )
}
