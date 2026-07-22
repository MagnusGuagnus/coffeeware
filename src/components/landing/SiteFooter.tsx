import Wordmark from './Wordmark'

const NAV = [
  { label: 'Cosa facciamo', href: '#cosa-facciamo' },
  { label: 'Lavori', href: '#lavori' },
  { label: 'Come lavoriamo', href: '#come-lavoriamo' },
  { label: 'Contatti', href: '#contatti' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-cream py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-8 border-t border-ink/10 pt-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark onLight className="text-2xl" />
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Studio di sviluppo software su misura per i produttori del food
              &amp; beverage del Nord-Est Italia.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Coffeeware. Tutti i diritti riservati.
          </span>
          <span>Nord-Est Italia · Trentino &amp; Veneto</span>
        </div>
      </div>
    </footer>
  )
}
