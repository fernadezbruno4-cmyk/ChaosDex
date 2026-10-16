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
    title: 'Select two tokens',
    description:
      'Choose any two tokens you want to compare head-to-head.',
  },
  {
    number: '02',
    title: 'Set the timeframe',
    description:
      'Pick a defined period — 24 hours, 7 days, 30 days, or a custom range.',
  },
  {
    number: '03',
    title: 'Compare performance',
    description:
      'See which token outperformed the other on a relative basis.',
  },
]

const EXAMPLE = {
  tokenA: 'PEPE',
  changeA: '+8.2%',
  tokenB: 'DOGE',
  changeB: '+3.1%',
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="container-section bg-charcoal">
      <div className="mx-auto max-w-[1600px]">
        <div className="section-header">
          <span className="section-kicker">How it works</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-ivory mb-6 leading-[1.05]">
            Two tokens. One period. One winner.
          </h2>
          <p className="text-lg text-sage max-w-2xl mx-auto leading-relaxed">
            Pick a pair, set a timeframe, and compare their relative
            performance. No trading. No contracts. Just pure comparison.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              whileHover={{ y: -4 }}
              className="card group"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-ivory font-mono text-sm">
                  {step.number}
                </span>
                <h3 className="text-lg font-medium text-ivory group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
              </div>
              <p className="text-sage text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="card mb-24">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-sage" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-sage/50">
                illustrative example
              </span>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-sm border border-tradegreen/20 bg-tradegreen/5 text-tradegreen text-[10px] font-bold uppercase">
              Not live market data
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end p-8">
            <div className="text-center">
              <span className="block text-[10px] font-bold text-sage/50 uppercase tracking-widest mb-2">
                Token A
              </span>
              <span className="block text-3xl font-light text-ivory mono">
                {EXAMPLE.tokenA}
              </span>
              <span className="block mt-2 text-sm font-mono text-tradegreen">
                {EXAMPLE.changeA}
              </span>
            </div>
            <div className="flex items-end justify-center gap-2">
              <span className="text-xl font-light text-sage mono">vs</span>
            </div>
            <div className="text-center">
              <span className="block text-[10px] font-bold text-sage/50 uppercase tracking-widest mb-2">
                Token B
              </span>
              <span className="block text-3xl font-light text-ivory mono">
                {EXAMPLE.tokenB}
              </span>
              <span className="block mt-2 text-sm font-mono text-sage">
                {EXAMPLE.changeB}
              </span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-forest-700">
            <p className="text-sm text-sage leading-relaxed">
              In this illustrative example, <strong>PEPE</strong> is up{' '}
              <strong>+8.2%</strong> while <strong>DOGE</strong> is up{' '}
              <strong>+3.1%</strong> over the selected period — meaning PEPE
              outperformed DOGE on a relative basis.
            </p>
            <p className="mt-2 text-xs text-sage/50 font-mono uppercase tracking-widest">
              This is illustrative example data only. Not live market data.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
