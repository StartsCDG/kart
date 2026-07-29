'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'
import { Flag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems } from '@/lib/nav-items'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-border carbon-fiber lg:flex">
      <div className="flex h-16 items-center gap-3 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary glow-blue">
          <Flag className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
        </div>
        <div className="leading-tight">
          <p className="font-display text-lg font-bold tracking-wide">APEX LEAGUE</p>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Kart Championship</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4 no-scrollbar">
        {navItems.map((item) => {
          const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                active
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50',
              )}
            >
              {active && (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl bg-primary/15 ring-1 ring-primary/40"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <Icon
                className={cn(
                  'relative h-5 w-5 shrink-0 transition-colors',
                  active ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground',
                )}
                aria-hidden="true"
              />
              <span className="relative">{item.label}</span>
              {item.admin && (
                <span className="relative ml-auto rounded-md bg-destructive/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-destructive">
                  Admin
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-border p-4">
        <div className="glass flex items-center gap-3 rounded-xl p-3">
          <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-primary to-chart-3" />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-medium">Temporada 2026</p>
            <p className="truncate text-xs text-muted-foreground">Liga em andamento</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
