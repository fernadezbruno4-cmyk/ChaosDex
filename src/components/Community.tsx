'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Share2 } from 'lucide-react'
import { X_PLACEHOLDER_URL } from './utils'

export function Community() {
  return (
    <section id="community" className="container-section bg-forest-900">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-ivory mb-6 leading-[1.05]">
            Join the community
          </h2>
          <p className="text-lg text-sage max-w-xl mx-auto leading-relaxed">
            Follow CHAOSDEX on X for updates on the platform, the arena, and
            $CHAOS.
          </p>
        </div>

        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(199,205,216,0.02)_0%,_transparent_50%)] pointer-events-none" />
          <div className="relative z-10 p-12 lg:p-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-10">
              <Share2 className="w-5 h-5 text-sage" />
              <span className="text-[10px] font-bold text-sage/50 uppercase tracking-widest">
                Connect with us
              </span>
            </div>
            <a
              href={X_PLACEHOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold group mb-6 inline-block"
            >
              Follow on X
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-sage/50 font-mono uppercase tracking-widest">
              Placeholder link — official X URL coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
