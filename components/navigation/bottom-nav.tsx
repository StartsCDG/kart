'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { primaryNavItems } from '@/lib/nav-items'

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="glass-strong fixed inset-x-0 bottom-0 z-40 border-t border-border lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Navegação principal"
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-between px-2">
        {primaryNavItems.map((item) => {
          const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
          const Icon = item.icon
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className="relative flex min-h-[56px] flex-col items-center justify-center gap-1 py-2 text-[11px] font-medium"
                aria-current={active ? 'page' : undefined}
              >
                {active && (
                  <motion.span
                    layoutId="bottom-active"
                    className="absolute top-0 h-0.5 w-8 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                  />
                )}
                <Icon
                  className={cn(
                    'h-5 w-5 transition-colors',
                    active ? 'text-primary' : 'text-muted-foreground',
                  )}
                  aria-hidden="true"
                />
                <span className={cn('transition-colors', active ? 'text-foreground' : 'text-muted-foreground')}>
                  {item.label}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
