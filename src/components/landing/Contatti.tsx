import Reveal from './Reveal'
import { ArrowRight, Mail, Clock } from 'lucide-react'

export default function Contatti() {
  return (
    <section id="contatti" className="bg-cw-primary py-20 text-cw-white md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-cw-primary p-8 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-16 select-none font-display text-[18rem] font-extrabold leading-none text-cw-secondary/10"
          >
            ;
          </div>

          <div className="relative max-w-2xl">
            <Reveal>
              <h2 className="text-balance text-3xl font-bold leading-tight md:text-5xl">
                Parliamone davanti al vostro processo
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-cw-white/75">
                Una call di 30 minuti per capire dove si perde tempo e cosa si
                può togliere subito. Parlate direttamente con chi costruisce il
                software — nessun impegno, nessun preventivo a freddo.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="mailto:ciao@coffeewaredesigns.com?subject=Prenota%20una%20call%20di%2030%20minuti"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-cw-secondary px-7 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Prenota una call di 30 minuti
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-4 text-sm text-cw-white/70 sm:flex-row sm:gap-8">
                <span className="inline-flex items-center gap-2">
                  <Mail size={16} className="text-cw-secondary" />
                  ciao@coffeewaredesigns.com
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock size={16} className="text-cw-secondary" />
                  Rispondiamo entro un giorno lavorativo
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
