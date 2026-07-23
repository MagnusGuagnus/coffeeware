import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import SiteHeader from '../landing/SiteHeader'
import SiteFooter from '../landing/SiteFooter'
import Reveal from '../landing/Reveal'
import ServicesShowcase from '../landing/ServicesShowcase'
import CtaStrip from '../landing/CtaStrip'
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
            <h1 className="max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Cosa possiamo costruire per voi
              <span className="text-orange">;</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-cream/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </section>

        {/* Services: sticky macro topics + vertical scroll of specifics */}
        <ServicesShowcase />

        <section className="bg-cream pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="flex justify-center">
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
