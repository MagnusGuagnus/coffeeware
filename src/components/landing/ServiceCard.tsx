import type { Service } from '../data/services'

type ServiceCardProps = {
  service: Service
  /** Show the longer description instead of the one-line blurb. */
  detailed?: boolean
}

export default function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  const { icon: Icon, title, blurb, detail } = service
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-cw-black/10 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cw-secondary/40 hover:shadow-lg md:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cw-primary/10 text-cw-primary transition-colors group-hover:bg-cw-secondary/15 group-hover:text-cw-secondary">
        <Icon size={22} />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-cw-black">
        {title}
      </h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-cw-gray">
        {detailed ? detail : blurb}
      </p>
    </div>
  )
}
