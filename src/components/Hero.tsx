'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 bg-grid"
    >
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 flex-grow flex items-center">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="section-kicker">Two tokens enter. One wins.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-3 max-w-2xl font-bold text-ivory leading-[1.05] tracking-tight sm:text-6xl mb-6"
          >
            THE MARKET IS A BATTLEFIELD.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-xl text-sage leading-relaxed mb-10"
          >
            Stop watching tokens move. Compare their performance. Find out
            which one wins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="#the-arena"
              className="btn-gold group"
            >
              ENTER THE ARENA
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#the-chaos-token"
              className="btn-ghost group"
            >
              EXPLORE $CHAOS
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-2 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="rounded-full border border-forest-700 bg-forest-900 px-3 py-1 text-sage">
                <span className="mr-1.5 text-gold">1</span>Pick two tokens
              </span>
              <ArrowRight className="w-3 h-3 text-sage/50" />
            </span>
            <span className="flex items-center gap-2">
              <span className="rounded-full border border-forest-700 bg-forest-900 px-3 py-1 text-sage">
                <span className="mr-1.5 text-gold">2</span>Set a timeframe
              </span>
              <ArrowRight className="w-3 h-3 text-sage/50" />
            </span>
            <span className="flex items-center gap-2">
              <span className="rounded-full border border-forest-700 bg-forest-900 px-3 py-1 text-sage">
                <span className="mr-1.5 text-gold">3</span>Compare performance
              </span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-2 text-xs text-sage/50 font-mono uppercase tracking-widest"
          >
            <span className="h-px w-12 bg-white/10" />
            <span>Illustrative preview — no live trading</span>
            <span className="h-px w-12 bg-white/10" />
          </motion.div>
        </div>

        <div className="lg:w-1/2 lg:pl-12 mt-16 lg:mt-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] w-full"
          >
            <div className="absolute inset-0 border border-forest-700 bg-charcoal/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(199,205,216,0.03)_25%,transparent_50%,transparent_75%,transparent_100%)] pointer-events-none" />
            </div>

            <div className="absolute inset-0 flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-4 border-b border-forest-700 bg-charcoal/50">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-tradegreen animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sage">
                    LIVE COMPARISON
                  </span>
                </div>
                <span className="text-[10px] font-mono text-sage/50 uppercase">
                  Illustrative data
                </span>
              </div>

              <div className="flex-1 flex items-center justify-between p-6 relative overflow-hidden">
                <div className="flex flex-col items-end gap-2 w-1/2 pr-8 border-r border-forest-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white/5 text-tradegreen text-xs font-bold border border-tradegreen/30">
                      P
                    </span>
                    <span className="text-sm font-medium text-ivory">PEPE</span>
                  </div>
                  <span className="text-2xl font-light text-ivory mono">+8.2%</span>
                  <div className="w-full h-[1px] bg-tradegreen/20 mt-2">
                    <div className="h-full bg-tradegreen w-[82%]"></div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 w-1/2 pl-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white/5 text-sage text-xs font-bold border border-white/10">
                      D
                    </span>
                    <span className="text-sm font-medium text-ivory">DOGE</span>
                  </div>
                  <span className="text-2xl font-light text-ivory mono">+3.1%</span>
                  <div className="w-full h-[1px] bg-white/10 mt-2">
                    <div className="h-full bg-white/20 w-[31%]"></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-forest-700" />
              <div className="absolute bottom-4 left-6 flex gap-4 text-[10px] font-mono text-sage uppercase tracking-widest">
                <span>PEPE VS DOGE</span>
                <span>30D PERIOD</span>
                <span className="text-tradegreen">WINNER: PEPE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="w-5 h-5 text-sage" />
      </div>
    </section>
  )
}
