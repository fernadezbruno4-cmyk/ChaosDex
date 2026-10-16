'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from './utils'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(192,192,192,0.02)_100%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-silver-500/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-90 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-silver-500/30 bg-white/5 text-silver-400 text-xs font-mono uppercase tracking-wider">
            CHAOSDEX ARENA
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight mb-6"
        >
          TWO TOKENS ENTER. ONE WINS.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-silver-400 max-w-2xl mx-auto leading-relaxed mb-10 text-balance"
        >
          CHAOSDEX is a premium crypto platform for comparing the relative
          performance of two tokens. Pick a pair, set a time period, and see
          which token outperforms the other — no trading, no contracts, just
          relative performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#how-it-works"
            className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1 focus:outline-none"
          >
            <span className="relative z-10">Explore the Arena</span>
          </Link>
          <Link
            href="#the-chaos-token"
            className="group relative px-8 py-4 border border-silver-400 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 focus:outline-none"
          >
            <span className="relative z-10">Discover $CHAOS</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-3 text-xs text-silver-500 font-mono"
        >
          <span className="h-px w-8 bg-silver-500/30" />
          <span>Coming soon — no trading engine</span>
          <span className="h-px w-8 bg-silver-500/30" />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="w-6 h-6 text-silver-400" />
      </div>
    </section>
  )
}
