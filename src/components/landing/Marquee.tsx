const WORDS = [
  'Ristoranti',
  'Cantine',
  'Bar',
  'Distillerie',
  'Enoteche',
  'Birrifici',
  'Pasticcerie',
  'Agriturismi',
  'Caseifici',
]

export default function Marquee() {
  // Duplicated once so the -50% → 0 loop is seamless.
  const sequence = [...WORDS, ...WORDS]

  return (
    <section
      className="overflow-hidden border-y border-cw-black/10 bg-cw-primary py-6 md:py-8"
      aria-label="Settori che serviamo"
    >
      <div className="relative flex w-max animate-marquee-right">
        {sequence.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center whitespace-nowrap px-6 font-display text-2xl font-semibold text-cw-white md:text-4xl"
          >
            {word}
            <span className="ml-6 text-cw-secondary" aria-hidden>
              ;
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
