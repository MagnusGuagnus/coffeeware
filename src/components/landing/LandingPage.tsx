import SiteHeader from './SiteHeader'
import Hero from './Hero'
import StatusQuo from './StatusQuo'
import CosaFacciamo from './CosaFacciamo'
import Lavori from './Lavori'
import ComeLavoriamo from './ComeLavoriamo'
import Contatti from './Contatti'
import SiteFooter from './SiteFooter'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cw-white">
      <SiteHeader />
      <main>
        <Hero />
        <StatusQuo />
        <CosaFacciamo />
        <Lavori />
        <ComeLavoriamo />
        <Contatti />
      </main>
      <SiteFooter />
    </div>
  )
}
