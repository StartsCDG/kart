import { User } from 'lucide-react'
import { PlaceholderPage } from '@/components/placeholder-page'

export const metadata = { title: 'Perfil' }

export default function PerfilPage() {
  return (
    <PlaceholderPage
      icon={User}
      title="Seu Perfil"
      description="Histórico, etapas participadas, avaliações feitas, sugestões enviadas e configurações. Login e conta chegam com a integração do Supabase."
    />
  )
}
