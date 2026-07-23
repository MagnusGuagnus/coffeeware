import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import Wordmark from './Wordmark'

const NAV = [
  { label: 'Servizi', to: '/servizi' },
  { label: 'Team', to: '/team' },
  { label: 'Coffee Breakers', to: '/#coffee-breakers', hash: true },
  { label: 'Contatti', to: '/contatti' },
]

const CONTACTS = [
  { icon: Mail, label: 'ciao@coffeeware.it', href: 'mailto:ciao@coffeeware.it' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
  { icon: Phone, label: '+39 000 000 0000', href: 'tel:+390000000000' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-cream py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Wordmark onLight className="text-2xl" />
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              Naviga
            </span>
            {NAV.map((item) =>
              item.hash ? (
                <a
                  key={item.to}
                  href={item.to}
                  className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              Contatti
            </span>
            {CONTACTS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                <Icon size={16} className="text-orange" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Coffeeware. Tutti i diritti riservati.</span>
          <a href="#" className="transition-colors hover:text-ink">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  )
}
