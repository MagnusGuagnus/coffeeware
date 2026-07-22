import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Cosa facciamo', href: '#cosa-facciamo' },
  { label: 'Lavori', href: '#lavori' },
  { label: 'Come lavoriamo', href: '#come-lavoriamo' },
  { label: 'Contatti', href: '#contatti' },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink/10 bg-cream/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="coffeeware home">
          <img
            src="/img/coffeeware-logo.png"
            alt="coffeeware"
            className="h-7 w-auto md:h-8"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principale">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-ink/70 hover:text-ink'
                  : 'text-cream/75 hover:text-cream'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contatti"
            className="hidden rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Prenota una call
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
              scrolled || open
                ? 'border-ink/15 text-ink'
                : 'border-cream/25 text-cream'
            }`}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink/10 bg-cream md:hidden"
          >
            <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink/5 py-3 text-base font-medium text-ink/80"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contatti"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-orange px-5 py-3 text-center text-base font-semibold text-white"
              >
                Prenota una call
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
