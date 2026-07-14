import { User } from 'lucide-react'
import { cn } from '@/lib/utils'

export type AvatarProps = {
  src?: string
  alt?: string
  fallback?: string
  className?: string
}

export function Avatar({ src, alt, fallback, className }: AvatarProps) {
  return (
    <div
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-primary text-primary-foreground',
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? 'Avatar'}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center text-sm font-medium">
          {fallback ? fallback.slice(0, 2).toUpperCase() : <User className="h-5 w-5" />}
        </span>
      )}
    </div>
  )
}
