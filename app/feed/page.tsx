import { Rss } from 'lucide-react'
import { PlaceholderPage } from '@/components/placeholder-page'

export const metadata = { title: 'Feed' }

export default function FeedPage() {
  return (
    <PlaceholderPage
      icon={Rss}
      title="Feed da Liga"
      description="Fotos, carrosséis, pódios e bastidores das etapas, com curtidas e comentários no estilo das melhores redes sociais. Chega na próxima atualização."
    />
  )
}
