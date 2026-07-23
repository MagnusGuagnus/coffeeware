import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Servizi', to: '/servizi' },
  { label: 'Team', to: '/team' },
  { label: 'Contatti', to: '/contatti' },
]

type SiteHeaderProps = {
  /** When true (homepage over the dark hero), links start light and turn dark on scroll. */
  overHero?: boolean
}

export default function SiteHeader({ overHero = false }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Every header link lands at the top of its page. Re-clicking the current
  // route doesn't remount anything, so nothing would scroll on its own; from
  // another route we wait a frame so the new page is mounted first.
  const goTop = (to: string) => () => {
    setOpen(false)
    if (pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      requestAnimationFrame(() => window.scrollTo({ top: 0 }))
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On non-hero pages the header always uses the solid/dark treatment.
  const solid = scrolled || !overHero

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-cw-black/10 bg-cw-white/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <Link
          to="/"
          onClick={goTop('/')}
          className="flex items-center gap-2"
          aria-label="coffeeware home"
        >
          <img
            src="/img/coffeeware-logo.png"
            alt="coffeeware"
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principale">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={goTop(item.to)}
              className={linkClass(solid)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/prenota"
            onClick={goTop('/prenota')}
            className="hidden rounded-full bg-cw-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Prenota una call
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
              solid || open
                ? 'border-cw-black/15 text-cw-black'
                : 'border-cw-white/25 text-cw-white'
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
            className="overflow-hidden border-t border-cw-black/10 bg-cw-white md:hidden"
          >
            <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={goTop(item.to)}
                  className="border-b border-cw-black/5 py-3 text-base font-medium text-cw-black/80"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/prenota"
                onClick={goTop('/prenota')}
                className="mt-4 rounded-full bg-cw-secondary px-5 py-3 text-center text-base font-semibold text-white"
              >
                Prenota una call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function linkClass(solid: boolean) {
  return `text-sm font-medium transition-colors ${
    solid ? 'text-cw-black/70 hover:text-cw-black' : 'text-cw-white/75 hover:text-cw-white'
  }`
}
