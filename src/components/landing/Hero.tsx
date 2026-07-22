import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { useContact } from '../contact/ContactContext'

export default function Hero() {
  const { open: openContact } = useContact()
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-petrol-deep pt-28 pb-20 text-cream md:pt-36 md:pb-28"
    >
      {/* subtle brand semicolon motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[26rem] font-extrabold leading-none text-orange/10 md:block"
      >
        ;
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-sm text-cream/80"
        >
          <span className="text-orange">;</span>
          Studio di sviluppo software · Nord-Est Italia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl"
        >
          Software su misura per chi produce food{' '}
          <span className="text-orange">&amp;</span> beverage
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-cream/75 md:text-xl"
        >
          Togliamo il lavoro manuale che rifate ogni settimana e costruiamo
          strumenti nuovi che fanno vendere. Partiamo dal vostro processo, non
          da un pacchetto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <button
            type="button"
            onClick={() => openContact('call')}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Prenota una call di 30 minuti
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          <a
            href="#servizi"
            className="inline-flex items-center justify-center rounded-full border border-cream/25 px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            Scopri i servizi
          </a>
        </motion.div>
      </div>
    </section>
  )
}
