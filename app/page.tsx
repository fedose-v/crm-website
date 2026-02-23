import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { CtaSection } from "@/components/home/cta-section"
import { RequestForm } from "@/components/home/request-form"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
      <RequestForm />
    </>
  )
}
