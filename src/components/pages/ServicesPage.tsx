import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import SiteHeader from '../landing/SiteHeader'
import SiteFooter from '../landing/SiteFooter'
import Reveal from '../landing/Reveal'
import ServiceCard from '../landing/ServiceCard'
import CtaStrip from '../landing/CtaStrip'
import { SERVICES } from '../data/services'
import { useContact } from '../contact/ContactContext'

export default function ServicesPage() {
  const { open: openContact } = useContact()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        {/* Page hero */}
        <section className="relative overflow-hidden bg-petrol-deep pt-32 pb-16 text-cream md:pt-40 md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[26rem] font-extrabold leading-none text-orange/10 md:block"
          >
            ;
          </div>
          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-sm text-cream/80">
              <span className="text-orange">;</span>
              Servizi · Food &amp; Beverage
            </span>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Cosa possiamo costruire per voi
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-cream/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </section>

        {/* Services grid (detailed) */}
        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, i) => (
                <Reveal key={service.title} delay={i * 0.06}>
                  <ServiceCard service={service} detailed />
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => openContact('info')}
                className="group inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Richiedi informazioni
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </Reveal>
          </div>
        </section>

        <CtaStrip />
      </main>
      <SiteFooter />
    </div>
  )
}
