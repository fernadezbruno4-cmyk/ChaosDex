'use client'

import { motion } from 'framer-motion'
import { MapPin, Code2, Layers, Rocket } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'

interface Phase {
  title: string
  subtitle: string
  description: string
  icon: React.ElementType
}

const PHASES: Phase[] = [
  {
    title: 'Phase 1',
    subtitle: 'Brand and website',
    description:
      'CHAOSDEX brand identity and this premium marketing website. Establishing the visual foundation for the platform.',
    icon: MapPin,
  },
  {
    title: 'Phase 2',
    subtitle: 'Community and product development',
    description:
      'Building the community on X and beginning product development for the token comparison platform.',
    icon: Code2,
  },
  {
    title: 'Phase 3',
    subtitle: 'Relative-performance prototype and testing',
    description:
      'Developing and testing the relative-performance comparison prototype — the core arena experience.',
    icon: Layers,
  },
  {
    title: 'Phase 4',
    subtitle: 'Ecosystem expansion',
    description:
      'Expanding the ecosystem around CHAOSDEX, including the proposed $CHAOS token utilities.',
    icon: Rocket,
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="container-section bg-charcoal">
      <SectionHeader
        title="Roadmap"
        description="Proposed stages for CHAOSDEX. These are planned, not completed achievements."
      />

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PHASES.map((phase, index) => {
            const Icon = phase.icon
            const isLast = index === PHASES.length - 1
            return (
              <motion.div
                key={phase.title}
                whileHover={{ y: -4 }}
                className="card group relative"
              >
                {!isLast && (
                  <div className="absolute -left-1/2 top-8 -translate-y-1/2 h-full w-[1px] bg-white/5 hidden lg:block" />
                )}
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-sage group-hover:border-gold/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-ivory tracking-wider uppercase">
                    {phase.title}
                  </span>
                </div>
                <h3 className="text-lg font-light text-ivory mb-4">
                  {phase.subtitle}
                </h3>
                <p className="text-sage text-sm leading-relaxed">
                  {phase.description}
                </p>
                <span className="mt-8 inline-block text-[10px] font-bold text-sage/50 uppercase tracking-widest">
                  Proposed stage
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="mt-20 flex items-center justify-center gap-2 text-[10px] font-mono text-sage/50 uppercase tracking-widest">
        <span className="h-px w-12 bg-white/10" />
        <span>All phases are proposed, not completed</span>
        <span className="h-px w-12 bg-white/10" />
      </div>
    </section>
  )
}
