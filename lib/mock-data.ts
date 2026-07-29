export type Driver = {
  id: string
  name: string
  nickname: string
  team: string
  number: number
  photo: string
  points: number
  wins: number
  rating: number
}

export const topDrivers: Driver[] = [
  {
    id: '1',
    name: 'Rafael Moretti',
    nickname: 'The Hammer',
    team: 'Velocità Racing',
    number: 7,
    photo: '/driver-1.png',
    points: 284,
    wins: 6,
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Marina Costa',
    nickname: 'Lightning',
    team: 'Apex Motorsport',
    number: 22,
    photo: '/driver-2.png',
    points: 271,
    wins: 5,
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Bruno Salles',
    nickname: 'El Toro',
    team: 'Redline Team',
    number: 11,
    photo: '/driver-3.png',
    points: 259,
    wins: 4,
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Diego Farias',
    nickname: 'Rookie King',
    team: 'Nitro Squad',
    number: 44,
    photo: '/driver-4.png',
    points: 233,
    wins: 3,
    rating: 4.6,
  },
  {
    id: '5',
    name: 'Lucas Prado',
    nickname: 'Iceman',
    team: 'Velocità Racing',
    number: 9,
    photo: '/driver-5.png',
    points: 218,
    wins: 2,
    rating: 4.5,
  },
]

export type Winner = {
  id: string
  driver: string
  team: string
  stage: string
  photo: string
  date: string
}

export const latestWinners: Winner[] = [
  {
    id: '1',
    driver: 'Rafael Moretti',
    team: 'Velocità Racing',
    stage: 'Etapa 8 — Interlagos Kart',
    photo: '/winner-podium.png',
    date: '12 Jul 2026',
  },
  {
    id: '2',
    driver: 'Marina Costa',
    team: 'Apex Motorsport',
    stage: 'Etapa 7 — Granja Viana',
    photo: '/driver-2.png',
    date: '28 Jun 2026',
  },
  {
    id: '3',
    driver: 'Bruno Salles',
    team: 'Redline Team',
    stage: 'Etapa 6 — Aldeia da Serra',
    photo: '/driver-3.png',
    date: '14 Jun 2026',
  },
]

export const galleryPhotos = [
  { id: '1', src: '/gallery-1.png', alt: 'Karts disputando uma curva' },
  { id: '2', src: '/gallery-2.png', alt: 'Kart no grid antes da largada' },
  { id: '3', src: '/gallery-3.png', alt: 'Vista aérea do kartódromo ao entardecer' },
  { id: '4', src: '/winner-podium.png', alt: 'Piloto comemorando no pódio' },
]

/** Próxima etapa: usada para a contagem regressiva */
export const nextStage = {
  name: 'Etapa 9 — Kartódromo San Marino',
  city: 'São Paulo, SP',
  round: 9,
  /** data fixa relativa à sessão para demonstração do countdown */
  daysAhead: 6,
  hoursAhead: 8,
  time: '19:00',
  track: 'Kartódromo San Marino — Traçado Internacional',
}

export const championshipSummary = {
  totalDrivers: 24,
  totalStages: 12,
  bestDriver: 'Rafael Moretti',
  bestLap: '00:42.318',
  bestLapDriver: 'Marina Costa',
}
