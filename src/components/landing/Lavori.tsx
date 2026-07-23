import Reveal from './Reveal'

const WORKS = [
  {
    img: '/img/lavoro-cantina.png',
    sector: 'Cantina',
    title: 'Configuratore di prodotto fino al cliente finale',
    body: 'Un configuratore online che porta agenti e clienti a comporre la propria fornitura — formati, etichette, quantità — e a inviare l\u2019ordine pronto. Meno telefonate, meno email, ordini corretti al primo colpo.',
    results: ['Ordini corretti al primo invio', 'Vendita anche fuori orario', 'Listino sempre aggiornato'],
  },
  {
    img: '/img/lavoro-distilleria.png',
    sector: 'Distilleria',
    title: 'Dal foglio Excel al gestionale su misura',
    body: 'Abbiamo sostituito fogli di calcolo e quaderni con un unico strumento per lotti, giacenze e spedizioni. Le informazioni non vivono più nella testa di una persona sola.',
    results: ['Ricopiature a mano azzerate', 'Tracciabilità dei lotti', 'Un\u2019unica fonte dei dati'],
  },
]

export default function Lavori() {
  return (
    <section id="lavori" className="bg-cw-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal delay={0.05}>
            <h2 className="text-balance text-3xl font-bold leading-tight text-cw-black md:text-4xl">
              Software che i clienti usano davvero
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {WORKS.map((work, i) => (
            <Reveal key={work.title} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cw-black/10 bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={work.img || '/placeholder.svg'}
                    alt={`Progetto per ${work.sector}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cw-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cw-primary backdrop-blur">
                    {work.sector}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold text-cw-black">{work.title}</h3>
                  <p className="mt-3 text-pretty leading-relaxed text-cw-gray">
                    {work.body}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2">
                    {work.results.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-cw-black">
                        <span className="mt-1 font-display font-bold leading-none text-cw-secondary">
                          ;
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
