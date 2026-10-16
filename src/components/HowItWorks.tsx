'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Scale } from 'lucide-react'

interface Step {
  number: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Pick two tokens',
    description:
      'Choose any two tokens you want to compare — for example, PEPE and DOGE.',
  },
  {
    number: '02',
    title: 'Set a time period',
    description:
      'Select a defined period — 24 hours, 7 days, 30 days, or a custom range.',
  },
  {
    number: '03',
    title: 'Compare performance',
    description:
      'See which token outperformed the other over that period, expressed as a percentage change.',
  },
]

const EXAMPLE = {
  tokenA: 'PEPE',
  changeA: '+8%',
  tokenB: 'DOGE',
  changeB: '+3%',
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="container-section">
      <SectionHeader
        title="How it works"
        description="Compare two tokens and see which one outperforms the other over a defined period."
      />

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {STEPS.map((step) => (
          <motion.div
            key={step.number}
            whileHover={{ y: -4 }}
            className="card group"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-silver-500/30 bg-white/5 text-silver-300 font-mono text-sm">
                {step.number}
              </span>
              <h3 className="text-xl font-light text-white group-hover:text-silver-300 transition-colors">
                {step.title}
              </h3>
            </div>
            <p className="text-silver-400 text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="card mb-20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-silver-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-silver-500">
              illustrative example
            </span>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-silver-500/30 bg-white/5 text-silver-400 text-[10px] font-mono uppercase">
            Not live market data
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6 items-end p-4">
          <div className="text-center">
            <span className="block text-xs font-mono text-silver-500 uppercase tracking-wider mb-2">
              Token A
            </span>
            <span className="block text-2xl font-light text-white">
              {EXAMPLE.tokenA}
            </span>
            <span className="block mt-1 text-sm font-mono text-emerald-400">
              {EXAMPLE.changeA}
            </span>
          </div>
          <div className="flex items-end justify-center gap-2">
            <span className="text-xl font-light text-silver-500">vs</span>
          </div>
          <div className="text-center">
            <span className="block text-xs font-mono text-silver-500 uppercase tracking-wider mb-2">
              Token B
            </span>
            <span className="block text-2xl font-light text-white">
              {EXAMPLE.tokenB}
            </span>
            <span className="block mt-1 text-sm font-mono text-silver-400">
              {EXAMPLE.changeB}
            </span>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/5">
          <p className="text-sm text-silver-400 leading-relaxed">
            In this illustrative example, <strong>PEPE</strong> is up <strong>+8%</strong>
            while <strong>DOGE</strong> is up <strong>+3%</strong> over the
            selected period — meaning PEPE outperformed DOGE on a relative
            basis.
          </p>
          <p className="mt-2 text-xs text-silver-500 font-mono">
            This is illustrative example data only, not live market data. No
            real prices are used.
          </p>
        </div>
      </div>
    </section>
  )
}
