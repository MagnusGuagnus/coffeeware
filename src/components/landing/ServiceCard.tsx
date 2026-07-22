import type { Service } from '../data/services'

type ServiceCardProps = {
  service: Service
  /** Show the longer description instead of the one-line blurb. */
  detailed?: boolean
}

export default function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  const { icon: Icon, title, blurb, detail } = service
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-lg md:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-petrol/10 text-petrol transition-colors group-hover:bg-orange/15 group-hover:text-orange">
        <Icon size={22} />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
        {detailed ? detail : blurb}
      </p>
    </div>
  )
}
