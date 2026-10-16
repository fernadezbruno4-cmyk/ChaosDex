'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from './utils'
import { cn } from './utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-black-deep/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-90 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-mono font-light tracking-tight text-white">
              CHAOSDEX
            </span>
            <span className="text-xs font-mono font-light text-silver-500 tracking-widest uppercase">
              $CHAOS
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-silver-400 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={X_PLACEHOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-silver-400 transition-colors hover:text-white flex items-center gap-1.5"
            >
              X <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-silver-400 hover:text-white focus:outline-none"
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black-deep border-t border-white/5">
          <div className="max-w-90 mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-white py-3 transition-colors hover:text-silver-300"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={X_PLACEHOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-white py-3 transition-colors hover:text-silver-300 flex items-center gap-1.5"
            >
              X <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
