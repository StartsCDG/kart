'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowLeft, type LucideIcon } from 'lucide-react'

export function PlaceholderPage({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex min-h-[60vh] flex-col items-center justify-center text-center"
    >
      <div className="glass mb-6 flex h-16 w-16 items-center justify-center rounded-2xl glow-blue">
        <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
      </div>
      <span className="mb-3 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        Em breve
      </span>
      <h1 className="max-w-md text-balance font-display text-3xl font-bold tracking-tight">{title}</h1>
      <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <Link
        href="/"
        className="glass mt-8 inline-flex min-h-11 items-center gap-2 rounded-xl px-5 text-sm font-semibold transition-colors hover:bg-accent"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Voltar para a Home
      </Link>
    </motion.div>
  )
}
