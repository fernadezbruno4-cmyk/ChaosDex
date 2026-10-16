'use client'

import Link from 'next/link'
import { ArrowRight, Github } from 'lucide-react'
import { NAV_LINKS, X_PLACEHOLDER_URL } from './utils'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-forest-700 py-8 bg-forest-900">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-2 px-4 text-sm text-sage sm:px-6 lg:px-8">
        <span className="font-bold text-ivory">
          CHAOSDEX <span className="text-gold">·</span> <span className="font-normal text-sage">Two tokens enter. One wins.</span>
        </span>
        <span>Crypto assets carry risk. This website is for informational purposes only and does not constitute financial advice. All token data shown is illustrative. $CHAOS utilities are proposed and not yet implemented. No trading engine, wallet connection, or smart contracts are active.</span>
        <span className="inline-flex items-center gap-2 mt-1">
          <a
            href={X_PLACEHOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CHAOSDEX on X"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-forest-700 text-sage transition hover:border-gold hover:text-gold"
          >
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CHAOSDEX on GitHub"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-forest-700 text-sage transition hover:border-gold hover:text-gold"
          >
            <Github className="w-4 h-4" />
          </a>
        </span>
      </div>
    </footer>
  )
}
