import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function SectionHeader({
  title,
  subtitle,
  href,
  actionLabel,
}: {
  title: string
  subtitle?: string
  href?: string
  actionLabel?: string
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{title}</h2>
        {subtitle && <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {href && actionLabel && (
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-0.5 text-sm font-semibold text-primary transition-colors hover:text-foreground"
        >
          <span className="hidden sm:inline">{actionLabel}</span>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
