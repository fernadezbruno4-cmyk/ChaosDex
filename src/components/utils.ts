import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const NAV_LINKS = [
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'The Arena', href: '#the-arena' },
  { name: 'Why CHAOSDEX', href: '#why-chaosdex' },
  { name: '$CHAOS Token', href: '#the-chaos-token' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Community', href: '#community' },
] as const

export const X_PLACEHOLDER_URL = '#'
