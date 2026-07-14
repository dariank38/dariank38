'use client'

import { Badge } from '@/components/ui/badge'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from '@/components/motion'
import { MagicCard } from '@/components/magicui/magic-card'
import type { Experience } from '@/lib/data'

export type TimelineProps = {
  items: Experience[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-border md:before:left-[15px]">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' as const }}
          className="relative pl-8 md:pl-12"
        >
          <span className="absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-amber-600 to-amber-700 md:top-1.5 md:h-8 md:w-8" />
          <MagicCard className="border-l-4 border-l-amber-400/60 transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <Badge variant="secondary" className="w-fit bg-amber-100/60 text-amber-900 dark:bg-amber-950/20 dark:text-amber-600">
                  {item.period}
                </Badge>
              </div>
              <CardDescription className="text-base leading-relaxed">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </MagicCard>
        </motion.div>
      ))}
    </div>
  )
}
