'use client'

import { motion } from 'framer-motion'
import { BarChart3, Target, ShieldCheck } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'

interface Feature {
  icon: React.ElementType
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: Target,
    title: 'Relative performance',
    description:
      'CHAOSDEX focuses purely on how one token performs against another — not absolute price, but who wins the matchup.',
  },
  {
    icon: BarChart3,
    title: 'Competitive predictions',
    description:
      'Make market predictions by picking the token you believe will outperform over a chosen period.',
  },
  {
    icon: ShieldCheck,
    title: 'Minimal by design',
    description:
      'No trading engine, no wallet connection, no smart contracts — just clean token-versus-token comparison.',
  },
]

export function WhyChaosDex() {
  return (
    <section id="why-chaosdex" className="container-section bg-charcoal">
      <SectionHeader
        title="Why CHAOSDEX"
        description="A different way to look at crypto — focused on head-to-head token comparison and relative performance."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {FEATURES.map((feature) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              whileHover={{ y: -4 }}
              className="card"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/5 mb-8 text-sage">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-ivory mb-4">
                {feature.title}
              </h3>
              <p className="text-sage text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-20 card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(199,205,216,0.03)_0%,_transparent_50%)] pointer-events-none" />
        <div className="relative z-10 p-10 lg:p-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-ivory mb-6">
            Built for token matchups
          </h3>
          <p className="text-lg text-sage leading-relaxed max-w-lg mb-8">
            Most crypto tools show you price charts. CHAOSDEX shows you a
            matchup. Two tokens enter the arena, and over a defined period, one
            outperforms the other. It's about relative performance — who wins,
            not how high the price goes.
          </p>
          <p className="text-xs text-sage/50 font-mono uppercase tracking-widest">
            No financial advice. No trading engine. Illustration only.
          </p>
        </div>
      </div>
    </section>
  )
}
