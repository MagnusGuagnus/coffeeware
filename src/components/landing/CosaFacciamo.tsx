import Reveal from './Reveal'
import { Workflow, Sparkles, LineChart, ArrowRight } from 'lucide-react'

const CARDS = [
  {
    icon: Workflow,
    tag: 'La porta d\u2019ingresso',
    title: 'Automatizzare il processo',
    body: 'Togliamo il lavoro manuale ripetitivo: ordini, schede, passaggi tra reparti. Meno ricopiature a mano, meno errori, più tempo per il lavoro che conta.',
    featured: false,
  },
  {
    icon: Sparkles,
    tag: 'La bandiera',
    title: 'Capacità nuove',
    body: 'Strumenti che prima non esistevano. Ad esempio un configuratore di prodotto che arriva fino al cliente finale e lo aiuta a scegliere e ordinare da solo.',
    featured: true,
  },
  {
    icon: LineChart,
    tag: 'Il risultato',
    title: 'Strumenti che fanno vendere',
    body: 'Software che genera ricavo, non solo report. Costruito attorno a come vendete davvero, così i vostri clienti lo usano — e non finisce nel cassetto.',
    featured: false,
  },
]

export default function CosaFacciamo() {
  return (
    <section id="cosa-facciamo" className="bg-cw-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal delay={0.05}>
            <h2 className="text-balance text-3xl font-bold leading-tight text-cw-black md:text-4xl">
              Partiamo dal vostro processo reale, non da un pacchetto
              preconfezionato
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <div
                  className={`flex h-full flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                    card.featured
                      ? 'bg-cw-primary text-cw-white shadow-xl shadow-cw-primary/20 ring-2 ring-cw-secondary'
                      : 'border border-cw-black/10 bg-white text-cw-black'
                  }`}
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                      card.featured
                        ? 'bg-cw-secondary text-white'
                        : 'bg-cw-cream text-cw-primary'
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    className={`mt-6 text-xs font-semibold uppercase tracking-wider ${
                      card.featured ? 'text-cw-secondary' : 'text-cw-secondary'
                    }`}
                  >
                    {card.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{card.title}</h3>
                  <p
                    className={`mt-3 text-pretty leading-relaxed ${
                      card.featured ? 'text-cw-white/80' : 'text-cw-gray'
                    }`}
                  >
                    {card.body}
                  </p>
                  {card.featured && (
                    <a
                      href="#lavori"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cw-secondary hover:text-white"
                    >
                      Vedi un esempio
                      <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
