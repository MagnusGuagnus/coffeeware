import Reveal from './Reveal'

export default function IntroProblema() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <span className="text-sm font-semibold text-orange">;</span>
          <p className="mt-4 text-balance font-display text-2xl font-semibold leading-snug text-ink md:text-3xl lg:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
