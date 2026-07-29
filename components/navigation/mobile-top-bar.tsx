'use client'

import Link from 'next/link'
import { Flag, Search, Bell } from 'lucide-react'

export function MobileTopBar() {
  return (
    <header
      className="glass-strong sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border px-4 lg:hidden"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary glow-blue">
          <Flag className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
        </div>
        <span className="font-display text-base font-bold tracking-wide">APEX LEAGUE</span>
      </Link>

      <div className="flex items-center gap-1">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Buscar"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Notificações"
        >
          <Bell className="h-5 w-5" aria-hidden="true" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-destructive ring-2 ring-background" />
        </button>
      </div>
    </header>
  )
}
