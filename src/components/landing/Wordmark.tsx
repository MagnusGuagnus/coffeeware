type WordmarkProps = {
  className?: string
  onLight?: boolean
}

/**
 * Text-rendered "coffeeware;" wordmark.
 * The semicolon is always the orange brand accent.
 */
export default function Wordmark({ className = '', onLight = false }: WordmarkProps) {
  return (
    <span
      className={`font-display font-bold lowercase tracking-tight ${
        onLight ? 'text-cw-black' : 'text-cw-white'
      } ${className}`}
    >
      coffeeware<span className="text-cw-secondary">;</span>
    </span>
  )
}
