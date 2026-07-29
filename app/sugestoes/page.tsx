import { Lightbulb } from 'lucide-react'
import { PlaceholderPage } from '@/components/placeholder-page'

export const metadata = { title: 'Sugestões' }

export default function SugestoesPage() {
  return (
    <PlaceholderPage
      icon={Lightbulb}
      title="Sugestões de Melhorias"
      description="Envie ideias para o campeonato, curta, comente e vote nas melhores. As mais votadas aparecem primeiro. Em breve."
    />
  )
}
