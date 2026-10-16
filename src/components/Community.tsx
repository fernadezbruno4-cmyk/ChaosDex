'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Share2 } from 'lucide-react'
import { X_PLACEHOLDER_URL } from './utils'

export function Community() {
  return (
    <section id="community" className="container-section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-4">
            Join the community
          </h2>
          <p className="text-lg text-silver-400 max-w-xl mx-auto leading-relaxed">
            Follow CHAOSDEX on X for updates on the platform, the arena, and
            $CHAOS.
          </p>
        </div>

        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(192,192,192,0.02)_0%,_transparent_50%)] pointer-events-none" />
          <div className="relative z-10 p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Share2 className="w-6 h-6 text-silver-400" />
              <span className="text-xs font-mono text-silver-500 uppercase tracking-wider">
                Connect with us
              </span>
            </div>
            <a
              href={X_PLACEHOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-black font-medium rounded-full transition-all duration-300 hover:-translate-y-1 focus:outline-none"
            >
              <span className="relative z-10">Follow on X</span>
              <ArrowRight className="relative z-10 ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-8 text-xs text-silver-500 font-mono uppercase tracking-widest">
              Placeholder link — official X URL coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
