import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { TheArena } from '@/components/TheArena'
import { WhyChaosDex } from '@/components/WhyChaosDex'
import { TheChaosToken } from '@/components/TheChaosToken'
import { Roadmap } from '@/components/Roadmap'
import { Community } from '@/components/Community'

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col select-none bg-forest-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <TheArena />
        <WhyChaosDex />
        <TheChaosToken />
        <Roadmap />
        <Community />
      </main>
      <Footer />
    </div>
  )
}
