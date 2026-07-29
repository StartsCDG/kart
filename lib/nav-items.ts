import {
  Home,
  Rss,
  Users,
  Trophy,
  Flag,
  CalendarDays,
  Shield,
  Lightbulb,
  User,
  Gauge,
  type LucideIcon,
} from 'lucide-react'

export type NavItem = {
  label: string
  href: string
  icon: LucideIcon
  /** aparece na barra inferior mobile */
  primary?: boolean
  /** acesso restrito a administradores */
  admin?: boolean
}

export const navItems: NavItem[] = [
  { label: 'Início', href: '/', icon: Home, primary: true },
  { label: 'Feed', href: '/feed', icon: Rss, primary: true },
  { label: 'Pilotos', href: '/pilotos', icon: Users },
  { label: 'Ranking', href: '/ranking', icon: Trophy, primary: true },
  { label: 'Campeonato', href: '/campeonato', icon: Flag },
  { label: 'Etapas', href: '/etapas', icon: CalendarDays, primary: true },
  { label: 'Liga', href: '/liga', icon: Shield },
  { label: 'Sugestões', href: '/sugestoes', icon: Lightbulb },
  { label: 'Perfil', href: '/perfil', icon: User, primary: true },
  { label: 'Administração', href: '/admin', icon: Gauge, admin: true },
]

export const primaryNavItems = navItems.filter((item) => item.primary)
