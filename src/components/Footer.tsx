'use client'

import Link from 'next/link'
import { ArrowRight, GitHub } from 'lucide-react'
import { NAV_LINKS, X_PLACEHOLDER_URL } from './utils'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-black-deep pt-20 pb-10">
      <div className="max-w-90 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl font-mono font-light tracking-tight text-white">
                CHAOSDEX
              </span>
              <span className="text-xs font-mono font-light text-silver-500 tracking-widest uppercase">
                $CHAOS
              </span>
            </div>
            <p className="text-silver-400 text-sm leading-relaxed max-w-xs">
              CHAOSDEX is a premium crypto platform focused on comparing the
              relative performance of two tokens. Two tokens enter. One wins.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9 lg:col-span-3 lg:col-start-10">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4 lg:col-start-10">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Community
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={X_PLACEHOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-silver-400 transition-colors hover:text-white"
                >
                  <ArrowRight className="w-4 h-4" />
                  Follow us on X
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-silver-400 transition-colors hover:text-white"
                >
                  <GitHub className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-silver-500">
            <p>
              © {currentYear} CHAOSDEX. All rights reserved.
            </p>
            <p className="max-w-md text-center md:text-left leading-relaxed">
              Crypto assets carry risk. This website is for informational
              purposes only and does not constitute financial advice. All token
              data shown is illustrative. $CHAOS utilities are proposed and not
              yet implemented. No trading engine, wallet connection, or smart
              contracts are active.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
