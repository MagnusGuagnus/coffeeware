import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CoffeeBreakers() {
  return (
    <section id="coffee-breakers" className="scroll-mt-24 bg-cream-dim py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-bold text-ink md:text-4xl">
            Chi sono i Coffee Breakers
            <span className="text-orange">;</span>
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <Link
            to="/team"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-petrol px-7 py-3.5 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            Conosci il team
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-ink/10">
            <img
              src="/img/coffee-breakers.png"
              alt="I due fondatori di Coffeeware al lavoro nello studio"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-6 -right-4 select-none font-display text-[10rem] font-extrabold leading-none text-orange/20"
            >
              ;
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
