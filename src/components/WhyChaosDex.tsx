'use client'

import { motion } from 'framer-motion'
import { BarChart3, Target, ShieldCheck } from 'lucide-react'

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
    <section id="why-chaosdex" className="container-section bg-black-bg">
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-white/5 mb-6 text-silver-400">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-silver-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-16 card">
        <div className="p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-6">
            Built for token matchups
          </h3>
          <p className="text-silver-400 text-sm leading-relaxed max-w-lg mb-8">
            Most crypto tools show you price charts. CHAOSDEX shows you a
            matchup. Two tokens enter the arena, and over a defined period, one
            outperforms the other. It's about relative performance — who wins,
            not how high the price goes.
          </p>
          <p className="text-xs text-silver-500 font-mono uppercase tracking-widest">
            No financial advice. No trading engine. Illustration only.
          </p>
        </div>
      </div>
    </section>
  )
}
