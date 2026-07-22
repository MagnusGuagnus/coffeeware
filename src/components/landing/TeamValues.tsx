import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'motion/react'
import { Code2, MessagesSquare, Gem, Rocket, HeartHandshake } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Value = {
  title: string
  description: string
  Icon: LucideIcon
}

const VALUES: Value[] = [
  {
    title: 'Codice su misura',
    description:
      'Niente template preconfezionati: costruiamo ogni soluzione partendo dalle reali esigenze del progetto, riga dopo riga.',
    Icon: Code2,
  },
  {
    title: 'Comunicazione diretta',
    description:
      'Parli sempre con chi scrive il codice. Nessun intermediario, nessun reparto: aggiornamenti chiari e feedback rapidi.',
    Icon: MessagesSquare,
  },
  {
    title: 'Qualità e cura dei dettagli',
    description:
      'Dalla UX al database, curiamo ogni livello dello stack. Ci ossessioniamo per le piccole cose che fanno la differenza.',
    Icon: Gem,
  },
  {
    title: 'Tecnologie moderne',
    description:
      'Lavoriamo con strumenti aggiornati e best practice attuali, così il tuo prodotto resta veloce, sicuro e manutenibile.',
    Icon: Rocket,
  },
  {
    title: 'Partnership a lungo termine',
    description:
      'Non spariamo dopo il rilascio: restiamo al tuo fianco per far crescere ed evolvere il prodotto nel tempo.',
    Icon: HeartHandshake,
  },
]

export default function TeamValues() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const lastIndex = VALUES.length - 1
  // Move the vertical strip up as the user scrolls through the pinned section.
  const stripY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${lastIndex * 100}%`],
  )

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(lastIndex, Math.max(0, Math.round(v * lastIndex)))
    setActive(idx)
  })

  return (
    <section
      ref={sectionRef}
      aria-label="Valori e punti di forza"
      className="relative bg-cream"
      style={{ height: `calc(100vh + ${lastIndex * 60}vh)` }}
    >
      {/* Pinned viewport */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
          {/* Left: title column */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-1.5 text-sm text-muted">
              <span className="text-orange">;</span>
              Perché noi
            </span>
            <h2 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] text-ink md:text-5xl">
              Valori e punti di forza
            </h2>
            <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted">
              I principi che guidano ogni progetto che facciamo. Scorri per
              scoprirli uno alla volta.
            </p>

            {/* Progress indicator */}
            <div className="mt-8 flex items-center gap-3">
              {VALUES.map((v, i) => (
                <span
                  key={v.title}
                  aria-hidden
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-8 bg-orange'
                      : 'w-3 bg-ink/15'
                  }`}
                />
              ))}
            </div>
            <p className="mt-3 text-sm font-medium text-muted">
              <span className="text-ink">{String(active + 1).padStart(2, '0')}</span>
              {' / '}
              {String(VALUES.length).padStart(2, '0')}
            </p>
          </div>

          {/* Right: vertical carousel window */}
          <div className="relative h-[360px] overflow-hidden md:h-[440px]">
            <motion.div style={{ y: stripY }} className="h-full">
              {VALUES.map((v, i) => {
                const Icon = v.Icon
                return (
                  <div
                    key={v.title}
                    className="flex h-full flex-col justify-center"
                  >
                    <motion.article
                      animate={{
                        opacity: i === active ? 1 : 0.35,
                        scale: i === active ? 1 : 0.96,
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-3xl border border-ink/10 bg-white/70 p-8 shadow-sm md:p-10"
                    >
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/15 text-orange">
                        <Icon size={26} />
                      </span>
                      <h3 className="mt-6 font-display text-2xl font-semibold text-ink md:text-3xl">
                        {v.title}
                      </h3>
                      <p className="mt-4 text-pretty text-base leading-relaxed text-muted md:text-lg">
                        {v.description}
                      </p>
                      <span className="mt-8 block font-display text-6xl font-extrabold leading-none text-orange/15">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </motion.article>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
