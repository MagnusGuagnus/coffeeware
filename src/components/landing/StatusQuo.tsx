import Reveal from './Reveal'

export default function StatusQuo() {
  return (
    <section className="bg-cw-primary py-16 text-cw-white md:py-20">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-balance text-xl font-medium leading-relaxed md:text-2xl">
            Ordini ricopiati a mano, informazioni nella testa di una persona
            sola, errori che nascono sempre nello stesso punto.{' '}
            <span className="text-cw-white/70">
              Funziona — finché i volumi crescono
              <span className="text-cw-secondary">.</span>
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
