'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, X_PLACEHOLDER_URL } from './utils'
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
        'sticky top-0 z-40 border-b border-forest-700 bg-forest-900/90 backdrop-blur',
        scrolled ? '' : ''
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center gap-2 px-3 sm:gap-4 sm:px-6">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls="chaosdex-nav-drawer"
          className="rounded-lg border border-forest-700 p-2 text-sage transition hover:border-gold hover:text-gold"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2.5"
        >
          <span className="text-lg font-bold tracking-wide text-ivory">
            CHAOSDEX
          </span>
          <span className="hidden min-[400px]:inline text-xs font-medium text-gold">
            $CHAOS
          </span>
        </Link>

        <nav className="ml-4 hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-sage transition hover:text-ivory"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex min-w-0 items-center gap-2 sm:gap-3">
          <a
            href={X_PLACEHOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-1.5 rounded-full border border-forest-700 px-3 py-1 text-xs text-sage sm:flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-tradegreen"></span>
            X
          </a>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-forest-700/60 px-4 py-2 lg:hidden">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="rounded-lg px-3 py-1.5 text-sm text-sage"
          >
            {link.name}
          </Link>
        ))}
        <a
          href={X_PLACEHOLDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-3 py-1.5 text-sm text-sage"
        >
          X
        </a>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-forest-900 border-t border-forest-700">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-2 px-4 sm:px-6 lg:px-8 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-sage transition hover:text-ivory"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={X_PLACEHOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-sage transition hover:text-ivory"
            >
              X
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
