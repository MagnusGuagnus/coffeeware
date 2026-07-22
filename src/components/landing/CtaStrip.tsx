import { Coffee } from 'lucide-react'
import Reveal from './Reveal'
import { useContact } from '../contact/ContactContext'

export default function CtaStrip() {
  const { open: openContact } = useContact()
  return (
    <section id="contatti" className="relative scroll-mt-24 overflow-hidden">
      <img
        src="/img/cta-coffee.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div aria-hidden className="absolute inset-0 bg-petrol-deep/85" />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-bold leading-tight text-cream md:text-5xl">
            Facciamo due chiacchiere, beviamoci un caffè insieme
            <span className="text-orange">;</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-cream/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <button
            type="button"
            onClick={() => openContact('call')}
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Coffee size={20} />
            Prenota una call
          </button>
        </Reveal>
      </div>
    </section>
  )
}
