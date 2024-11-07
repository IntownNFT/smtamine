import { VideoPlayer } from "@/components/video-player"
import { DiscordPreview } from "@/components/discord-preview"
import { CommunityResults } from "@/components/community-results"
import { MastermindPreview } from "@/components/mastermind-preview"
import { FeatureCard } from "@/components/feature-card"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ArrowDown } from "lucide-react"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <Navigation />
      <HeroSection />

      {/* Video Section */}
      <section className="max-w-5xl mx-auto px-4">
        <VideoPlayer />
      </section>

      {/* Feature Cards */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="VIP"
            description="Daily livestreams, 1-1 mentorships, Trade Recaps, and market analysis across multiple instruments."
          />
          <FeatureCard
            title="Signals"
            description="Premium trade signals for various markets from our expert signal provider."
          />
          <FeatureCard
            title="Community"
            description="Growing community of 3,000+ traders creating an IRON MIND."
          />
        </div>
      </section>

      {/* Arrow Divider */}
      <div className="flex justify-center py-20">
        <ArrowDown className="text-[#fd6e09] w-16 h-16 animate-bounce" />
      </div>

      {/* First Discord Section */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <DiscordPreview />
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <Separator className="bg-[#2a2a2a]" />
      </div>

      {/* Community Results Section */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <CommunityResults />
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <Separator className="bg-[#2a2a2a]" />
      </div>

      {/* Mastermind Section */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <MastermindPreview />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}