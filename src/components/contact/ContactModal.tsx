import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  X,
  CalendarDays,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Check,
} from 'lucide-react'

type ContactMode = 'call' | 'info'

type ContactModalProps = {
  isOpen: boolean
  mode: ContactMode
  onModeChange: (mode: ContactMode) => void
  onClose: () => void
}

const WEEKDAYS = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom']
const MONTHS = [
  'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
  'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre',
]
const CONTACT_PREFS = ['WhatsApp', 'E-mail', 'Telefono', 'SMS']

export default function ContactModal({
  isOpen,
  mode,
  onModeChange,
  onClose,
}: ContactModalProps) {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [pref, setPref] = useState('WhatsApp')

  // Lock body scroll + close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // Reset transient state when closed
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setSubmitted(false)
        setSelectedDay(null)
      }, 250)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  const firstWeekday = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7 // Mon-first
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day)
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return d < start
  }

  const changeMonth = (delta: number) => {
    setSelectedDay(null)
    const next = new Date(viewYear, viewMonth + delta, 1)
    setViewYear(next.getFullYear())
    setViewMonth(next.getMonth())
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Contatta Coffeeware"
            className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-cream shadow-2xl sm:rounded-3xl"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink/70 transition-colors hover:bg-ink/10"
              aria-label="Chiudi"
            >
              <X size={18} />
            </button>

            <div className="overflow-y-auto px-6 pb-6 pt-7 sm:px-8 sm:pb-8">
              {submitted ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-orange/15 text-orange">
                    <Check size={26} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                    Grazie, ci sentiamo presto
                  </h3>
                  <p className="mt-2 max-w-sm text-pretty text-sm leading-relaxed text-muted">
                    Questa è un&apos;anteprima, quindi non è stato inviato nulla.
                    Nella versione online ti ricontattiamo entro un giorno
                    lavorativo.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 rounded-full bg-petrol px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
                  >
                    Chiudi
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="mt-1 font-display text-2xl font-bold text-ink">
                    Scambiamo due chiacchiere
                  </h2>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
                    Raccontaci cosa vi fa perdere tempo o cosa vorreste
                    provare. Da lì partiamo, davanti a un caffè.
                  </p>

                  {/* Mode switch */}
                  <div className="mt-5 grid grid-cols-2 gap-2 rounded-full bg-ink/5 p-1">
                    <button
                      type="button"
                      onClick={() => onModeChange('call')}
                      className={`inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-colors ${
                        mode === 'call'
                          ? 'bg-cream text-ink shadow-sm'
                          : 'text-ink/60 hover:text-ink'
                      }`}
                    >
                      <CalendarDays size={16} /> Prenota una call
                    </button>
                    <button
                      type="button"
                      onClick={() => onModeChange('info')}
                      className={`inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-colors ${
                        mode === 'info'
                          ? 'bg-cream text-ink shadow-sm'
                          : 'text-ink/60 hover:text-ink'
                      }`}
                    >
                      <MessageSquare size={16} /> Richiedi info
                    </button>
                  </div>

                  {mode === 'call' ? (
                    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                      {/* Calendar */}
                      <div className="rounded-2xl border border-ink/10 bg-white/60 p-4">
                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => changeMonth(-1)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/5"
                            aria-label="Mese precedente"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <span className="text-sm font-semibold text-ink">
                            {MONTHS[viewMonth]} {viewYear}
                          </span>
                          <button
                            type="button"
                            onClick={() => changeMonth(1)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/5"
                            aria-label="Mese successivo"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </div>

                        <div className="mt-3 grid grid-cols-7 gap-1 text-center">
                          {WEEKDAYS.map((w) => (
                            <span key={w} className="py-1 text-xs font-medium text-muted">
                              {w}
                            </span>
                          ))}
                          {Array.from({ length: firstWeekday }).map((_, i) => (
                            <span key={`pad-${i}`} />
                          ))}
                          {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1
                            const disabled = isPast(day)
                            const active = selectedDay === day
                            return (
                              <button
                                key={day}
                                type="button"
                                disabled={disabled}
                                onClick={() => setSelectedDay(day)}
                                className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors ${
                                  active
                                    ? 'bg-orange font-semibold text-white'
                                    : disabled
                                      ? 'cursor-not-allowed text-ink/25'
                                      : 'text-ink/80 hover:bg-ink/5'
                                }`}
                              >
                                {day}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <Field label="Nome" name="nome" />
                        <Field label="Cognome" name="cognome" />
                      </div>
                      <Field label="Telefono" name="telefono" type="tel" />

                      <button
                        type="submit"
                        className="mt-1 inline-flex items-center justify-center rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                      >
                        {selectedDay
                          ? `Conferma per il ${selectedDay} ${MONTHS[viewMonth]}`
                          : 'Conferma la call'}
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <Field label="Nome" name="nome" />
                        <Field label="Cognome" name="cognome" />
                      </div>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <Field label="E-mail" name="email" type="email" />
                        <Field label="Telefono" name="telefono" type="tel" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="messaggio"
                          className="text-sm font-medium text-ink/80"
                        >
                          Messaggio
                        </label>
                        <textarea
                          id="messaggio"
                          name="messaggio"
                          rows={3}
                          className="rounded-xl border border-ink/15 bg-white/60 px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-petrol"
                          placeholder="Cosa vorreste risolvere o provare?"
                        />
                      </div>

                      <fieldset className="flex flex-col gap-2">
                        <legend className="text-sm font-medium text-ink/80">
                          Come preferisci essere contattato
                        </legend>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {CONTACT_PREFS.map((p) => (
                            <button
                              key={p}
                              type="button"
                              onClick={() => setPref(p)}
                              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                                pref === p
                                  ? 'border-petrol bg-petrol text-cream'
                                  : 'border-ink/15 text-ink/70 hover:border-ink/30'
                              }`}
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      </fieldset>

                      <button
                        type="submit"
                        className="mt-1 inline-flex items-center justify-center rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                      >
                        Invia richiesta
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Field({
  label,
  name,
  type = 'text',
}: {
  label: string
  name: string
  type?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-ink/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="rounded-xl border border-ink/15 bg-white/60 px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-petrol"
      />
    </div>
  )
}
