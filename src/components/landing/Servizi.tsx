import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import ServiceCard from './ServiceCard'
import { SERVICES } from '../data/services'

export default function Servizi() {
  return (
    <section id="servizi" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold text-orange">;</span>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold text-ink md:text-4xl">
            Cosa possiamo costruire per voi
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Link
            to="/servizi"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink/30"
          >
            Vedi tutti i servizi
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
