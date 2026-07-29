import type { ReactNode } from 'react'
import { Sidebar } from './sidebar'
import { BottomNav } from './bottom-nav'
import { MobileTopBar } from './mobile-top-bar'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh carbon-fiber">
      <Sidebar />
      <MobileTopBar />
      <div className="lg:pl-64">
        <main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-4 sm:px-6 lg:px-8 lg:pb-12 lg:pt-8">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  )
}
