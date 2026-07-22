import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import ContactModal from './ContactModal'

type ContactMode = 'call' | 'info'

type ContactContextValue = {
  open: (mode?: ContactMode) => void
  close: () => void
}

const ContactContext = createContext<ContactContextValue | null>(null)

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<ContactMode>('call')

  const open = useCallback((next: ContactMode = 'call') => {
    setMode(next)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => ({ open, close }), [open, close])

  return (
    <ContactContext.Provider value={value}>
      {children}
      <ContactModal isOpen={isOpen} mode={mode} onModeChange={setMode} onClose={close} />
    </ContactContext.Provider>
  )
}

export function useContact() {
  const ctx = useContext(ContactContext)
  if (!ctx) {
    throw new Error('useContact must be used within a ContactProvider')
  }
  return ctx
}
