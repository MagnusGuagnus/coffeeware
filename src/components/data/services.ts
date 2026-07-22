import {
  SlidersHorizontal,
  CalendarCheck,
  PackageSearch,
  Tag,
  ShoppingBag,
  Globe,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  icon: LucideIcon
  title: string
  blurb: string
  detail: string
}

export const SERVICES: Service[] = [
  {
    icon: SlidersHorizontal,
    title: 'Configuratore di prodotto',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    icon: CalendarCheck,
    title: 'Gestione prenotazioni',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    icon: PackageSearch,
    title: 'Portale ordini B2B',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    icon: Tag,
    title: 'E-label UE',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    icon: Globe,
    title: 'Presenza digitale',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
]
