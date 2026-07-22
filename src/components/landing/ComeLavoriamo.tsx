import Reveal from './Reveal'
import { MapPin, MessagesSquare, Rocket } from 'lucide-react'

const STEPS = [
  {
    icon: MapPin,
    step: '01',
    title: 'Veniamo da voi',
    body: 'Guardiamo il processo dal vero: dove nascono gli ordini, dove si perde tempo, dove tornano gli errori. Il software parte da lì.',
  },
  {
    icon: MessagesSquare,
    step: '02',
    title: 'Parlate con chi costruisce',
    body: 'Niente account manager, niente ticket. Siamo in due e siamo noi a scrivere il software. Una linea diretta, sempre.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Primo pezzo in poche settimane',
    body: 'Non progetti da dodici mesi. Un primo pezzo funzionante in poche settimane, poi si costruisce sopra a ciò che serve davvero.',
  },
]

export default function ComeLavoriamo() {
  return (
    <section id="come-lavoriamo" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-orange">
              Come lavoriamo
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-ink md:text-4xl">
              {'Uno studio di due persone, non un\u2019agenzia'}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
              Meno intermediari, più risultato. Chi disegna la soluzione è la
              stessa persona che la costruisce e che risponde al telefono.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.step} delay={i * 0.1}>
                <div className="relative">
                  <span className="font-display text-5xl font-extrabold text-ink/10">
                    {s.step}
                  </span>
                  <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-petrol text-cream">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
