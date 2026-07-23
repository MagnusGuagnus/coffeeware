import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import {
  ShoppingCart,
  LayoutTemplate,
  AppWindow,
  Gauge,
  Smartphone,
  Bell,
  Wifi,
  Cloud,
  Plug,
  Wrench,
  ShieldCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type SubService = {
  title: string
  description: string
  Icon: LucideIcon
}

type Topic = {
  kicker: string
  title: string
  description: string
  items: SubService[]
}

const TOPICS: Topic[] = [
  {
    kicker: 'Web Dev',
    title: 'Sviluppo web',
    description:
      'Costruiamo prodotti web su misura, dal primo pixel al deploy. Scorri per vedere cosa possiamo realizzare.',
    items: [
      {
        title: 'E-Commerce',
        description:
          'Negozi online completi con catalogo, carrello, pagamenti e gestione ordini, pensati per vendere davvero.',
        Icon: ShoppingCart,
      },
      {
        title: 'Sito vetrina',
        description:
          'Siti di presentazione veloci e curati per raccontare il tuo brand e convertire i visitatori in clienti.',
        Icon: LayoutTemplate,
      },
      {
        title: 'Web app',
        description:
          'Applicazioni web complesse e interattive, con logiche custom e integrazioni con i tuoi strumenti.',
        Icon: AppWindow,
      },
      {
        title: 'Dashboard & gestionali',
        description:
          'Pannelli di controllo e gestionali su misura per monitorare dati e automatizzare i processi interni.',
        Icon: Gauge,
      },
    ],
  },
  {
    kicker: 'Mobile',
    title: 'App & mobile',
    description:
      'Esperienze mobile native e cross-platform che stanno nella tasca dei tuoi clienti.',
    items: [
      {
        title: 'App iOS & Android',
        description:
          'Applicazioni mobile performanti e curate, pubblicate su App Store e Google Play.',
        Icon: Smartphone,
      },
      {
        title: 'Notifiche & engagement',
        description:
          'Push notification e flussi di engagement per riportare gli utenti dentro l’app al momento giusto.',
        Icon: Bell,
      },
      {
        title: 'PWA & offline',
        description:
          'Progressive web app installabili e funzionanti anche senza connessione, senza passare dagli store.',
        Icon: Wifi,
      },
    ],
  },
  {
    kicker: 'Cloud',
    title: 'Cloud & consulenza',
    description:
      'Mettiamo in piedi e manteniamo l’infrastruttura che fa girare tutto, e ti affianchiamo nelle scelte tecniche.',
    items: [
      {
        title: 'Infrastruttura & deploy',
        description:
          'Setup cloud, CI/CD e deploy automatici per rilasciare in sicurezza e senza downtime.',
        Icon: Cloud,
      },
      {
        title: 'Integrazioni & API',
        description:
          'Colleghiamo i tuoi sistemi con API custom e integrazioni con servizi di terze parti.',
        Icon: Plug,
      },
      {
        title: 'Manutenzione evolutiva',
        description:
          'Assistenza continua, aggiornamenti e nuove funzionalità per far crescere il prodotto nel tempo.',
        Icon: Wrench,
      },
      {
        title: 'Sicurezza & performance',
        description:
          'Audit, ottimizzazioni e best practice per mantenere il prodotto veloce, stabile e sicuro.',
        Icon: ShieldCheck,
      },
    ],
  },
]

function TopicBlock({ topic, index }: { topic: Topic; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })
  // Progress bar fills as the right column scrolls through the sub-services.
  const fill = useTransform(scrollYProgress, [0, 1], ['8%', '100%'])
  // Fade the sticky title in as the block enters and out as it leaves.
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.85, 1],
    [0, 1, 1, 0],
  )
  const titleY = useTransform(scrollYProgress, [0, 0.12], [24, 0])

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-8 border-t border-ink/10 py-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16 md:py-20"
    >
      {/* Left: sticky title column */}
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="md:sticky md:top-28 md:h-fit md:self-start"
      >
        <h3 className="text-balance font-display text-4xl font-bold leading-[1.05] text-ink md:text-5xl">
          {topic.title}
          <span className="text-orange">;</span>
        </h3>
        <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted">
          {topic.description}
        </p>

        <div className="mt-8 flex items-center gap-4">
          <span className="font-display text-6xl font-extrabold leading-none text-orange/20">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="h-1.5 w-full max-w-[180px] overflow-hidden rounded-full bg-ink/10">
            <motion.span
              style={{ width: fill }}
              className="block h-full rounded-full bg-orange"
            />
          </div>
        </div>
      </motion.div>

      {/* Right: vertical scroll of specific services */}
      <div className="flex flex-col gap-5">
        {topic.items.map((item) => (
          <FadeCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  )
}

function FadeCard({ item }: { item: SubService }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // Fade each card in as it enters the viewport and out as it leaves.
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0],
  )
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [40, 0, 0, -40])
  const Icon = item.Icon

  return (
    <motion.article
      ref={ref}
      style={{ opacity, y }}
      className="group rounded-3xl border border-ink/10 bg-white/70 p-7 shadow-sm transition-colors hover:border-orange/40 md:p-8"
    >
      <div className="flex items-start gap-5">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange/15 text-orange">
          <Icon size={26} />
        </span>
        <div>
          <h4 className="font-display text-xl font-semibold text-ink md:text-2xl">
            {item.title}
          </h4>
          <p className="mt-3 text-pretty text-base leading-relaxed text-muted">
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default function ServicesShowcase() {
  return (
    <section aria-label="I nostri servizi" className="bg-cream py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {TOPICS.map((topic, i) => (
          <TopicBlock key={topic.title} topic={topic} index={i} />
        ))}
      </div>
    </section>
  )
}
