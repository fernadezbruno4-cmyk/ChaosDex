'use client'

import { motion } from 'framer-motion'
import { BarChart2, Clock, RefreshCw } from 'lucide-react'

interface TokenPair {
  id: string
  name: string
  symbol: string
  change: string
  color: string
}

const PAIRS: TokenPair[] = [
  { id: '1', name: 'Bitcoin', symbol: 'BTC', change: '+5.2%', color: '#f7931a' },
  { id: '2', name: 'Ethereum', symbol: 'ETH', change: '+3.1%', color: '#627eea' },
  { id: '3', name: 'Pepe', symbol: 'PEPE', change: '+8.0%', color: '#4ecdc4' },
  { id: '4', name: 'Dogecoin', symbol: 'DOGE', change: '+3.0%', color: '#c2a633' },
  { id: '5', name: 'Solana', symbol: 'SOL', change: '+1.8%', color: '#14f195' },
  { id: '6', name: 'Cardano', symbol: 'ADA', change: '-0.4%', color: '#0033ad' },
]

const TIME_PERIODS = ['24H', '7D', '30D', '90D']

export function TheArena() {
  return (
    <section id="the-arena" className="container-section">
      <div className="max-w-90 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-3">
              The Arena
            </h2>
            <p className="text-lg text-silver-400 max-w-md">
              A premium preview of the token comparison interface. Select a pair
              and a time period to see relative performance.
            </p>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-silver-500/30 bg-white/5">
            <RefreshCw className="w-4 h-4 text-silver-400 animate-pulse-slow" />
            <span className="text-xs font-mono text-silver-400 uppercase tracking-wider">
              Coming soon
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <BarChart2 className="w-5 h-5 text-silver-400" />
              <span className="text-sm font-medium text-silver-300 uppercase tracking-wider">
                Select token pair
              </span>
            </div>
            <div className="space-y-3">
              {PAIRS.slice(0, 3).map((pair) => (
                <button
                  key={pair.id}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-white/5 bg-black-card/50 text-left hover:border-silver-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white text-xs font-bold"
                      style={{ color: pair.color }}
                    >
                      {pair.symbol.slice(0, 1)}
                    </span>
                    <div>
                      <span className="text-sm font-medium text-white">
                        {pair.name}
                      </span>
                      <span className="text-xs text-silver-500 font-mono">
                        {pair.symbol}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-silver-400 group-hover:text-white transition-colors">
                    {pair.change}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-silver-400" />
                  <span className="text-sm font-medium text-silver-300 uppercase tracking-wider">
                    Time period
                  </span>
                </div>
                <div className="flex gap-1">
                  {TIME_PERIODS.map((period) => (
                    <button
                      key={period}
                      className="w-10 h-10 rounded-full border border-silver-500/30 text-xs font-mono text-silver-400 hover:border-silver-500/50 hover:text-white transition-colors"
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart preview area */}
              <div className="aspect-video rounded-3xl border border-white/5 bg-black-deep p-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(192,192,192,0.03)_0%,_transparent_40%)] pointer-events-none" />
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-silver-500">Max</span>
                    <span className="text-[10px] font-mono text-silver-500">+12%</span>
                    <span className="text-[10px] font-mono text-silver-500">0%</span>
                    <span className="text-[10px] font-mono text-silver-500">-12%</span>
                    <span className="text-[10px] font-mono text-silver-500">Min</span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  {['Day 1', 'Day 8', 'Day 15', 'Day 22', 'Day 30'].map((label, i) => (
                    <span key={label} className="text-[10px] font-mono text-silver-500">
                      {label}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-end justify-between gap-1 px-6 pb-12">
                  {[15, 40, 25, 70, 50, 90, 60, 85, 45, 95, 55, 100].map(
                    (height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.05, duration: 0.6 }}
                        className="w-full bg-white/10 rounded-t-sm hover:bg-white/30 transition-colors group"
                      />
                    )
                  )}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4ecdc4' }} />
                  <span className="text-[10px] font-mono text-silver-400">PEPE</span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#c2a633' }} />
                  <span className="text-[10px] font-mono text-silver-400">DOGE</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[PAIRS[0], PAIRS[1]].map((pair) => (
                  <div
                    key={pair.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl border border-white/5 bg-black-card/50"
                  >
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded bg-white/5 text-[10px] font-bold"
                      style={{ color: pair.color }}
                    >
                      {pair.symbol.slice(0, 1)}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-white">
                        {pair.symbol}
                      </span>
                      <span className="text-[10px] text-silver-500 font-mono">
                        {pair.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-xs text-silver-500 font-mono">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-silver-500/30 text-silver-400">
            !
          </span>
          <span>
            This is a UI preview only. No real trading, wallet connection, or
            live market data is implemented.
          </span>
        </div>
      </div>
    </section>
  )
}
