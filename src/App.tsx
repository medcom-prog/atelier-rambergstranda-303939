import { Nav } from './components/Nav'
import { HeroCyanotype } from './components/HeroCyanotype'
import { Epigraph } from './components/Epigraph'
import { VisionProse } from './components/VisionProse'
import { PullQuote } from './components/PullQuote'
import { ImageGridAerial } from './components/ImageGridAerial'
import { ArchitectureSplit } from './components/ArchitectureSplit'
import { CoursesCallout } from './components/CoursesCallout'
import { FestivalsEssay } from './components/FestivalsEssay'
import { ResidencyBlock } from './components/ResidencyBlock'
import { TimelineStrata } from './components/TimelineStrata'
import { ContactMinimal } from './components/ContactMinimal'
import { FooterCredits } from './components/FooterCredits'

export default function App() {
  return (
    <div className="bg-paper text-graphite antialiased">
      {/* 1. Thin navigation — transparent over hero */}
      <Nav />

      {/* 2. Full-bleed cyanotype hero (THE WEIRD THING) */}
      <HeroCyanotype />

      {/* 3. Helen Keller epigraph */}
      <Epigraph />

      {/* 4. Long-form vision prose */}
      <VisionProse />

      {/* 5. Pull-quote — dark section */}
      <PullQuote />

      {/* 6. Aerial drone image grid */}
      <ImageGridAerial />

      {/* 7. Architecture image-text pair */}
      <ArchitectureSplit />

      {/* 8. Courses callout — dark section */}
      <CoursesCallout />

      {/* 9. Festivals photo essay */}
      <FestivalsEssay />

      {/* 10. Residency text block */}
      <ResidencyBlock />

      {/* 11. Timeline as geological strata */}
      <TimelineStrata />

      {/* 12. Contact minimal */}
      <ContactMinimal />

      {/* 13. Footer credits */}
      <FooterCredits />
    </div>
  )
}
