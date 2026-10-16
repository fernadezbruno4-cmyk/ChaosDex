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
    <section id="the-arena" className="container-section bg-forest-900">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="section-header text-left mb-0">
            <span className="section-kicker">The arena</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-ivory mb-6 leading-[1.05]">
              Token versus token comparison
            </h2>
            <p className="text-lg text-sage max-w-xl leading-relaxed">
              A preview of the comparison interface. Two tokens enter — one
              outperforms the other over your chosen period.
            </p>
          </div>
          <div className="flex items-center gap-3 px-3 py-1 rounded-full border border-forest-700 bg-white/5">
            <RefreshCw className="w-4 h-4 text-sage animate-pulse-slow" />
            <span className="text-[10px] font-bold text-sage uppercase tracking-widest">
              Coming soon
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart2 className="w-5 h-5 text-sage" />
              <span className="text-sm font-medium text-sage/70 uppercase tracking-wider">
                Select token pair
              </span>
            </div>
            <div className="space-y-3">
              {PAIRS.slice(0, 3).map((pair) => (
                <button
                  key={pair.id}
                  className="flex items-center justify-between w-full px-5 py-4 rounded-sm border border-white/5 bg-charcoal text-left hover:border-gold/30 hover:bg-charcoal/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/5 text-ivory text-xs font-bold border border-white/10"
                      style={{ color: pair.color }}
                    >
                      {pair.symbol.slice(0, 1)}
                    </span>
                    <div>
                      <span className="text-sm font-light text-ivory">
                        {pair.name}
                      </span>
                      <span className="text-[10px] font-mono text-sage/50 uppercase">
                        {pair.symbol}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-sage group-hover:text-ivory transition-colors mono">
                    {pair.change}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="card relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(199,205,216,0.03)_0%,_transparent_40%)] pointer-events-none" />

              <div className="relative z-10 p-8 lg:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-sage" />
                    <span className="text-sm font-light text-sage/70 uppercase tracking-wider">
                      Time period
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {TIME_PERIODS.map((period) => (
                      <button
                        key={period}
                        className="w-10 h-10 rounded-sm border border-white/5 text-[10px] font-mono text-sage hover:border-gold/30 hover:text-ivory transition-colors"
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 items-stretch mb-8">
                  <div className="flex flex-col items-end gap-2 border-r border-forest-700 pr-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white/5 text-tradegreen text-xs font-bold border border-tradegreen/30">
                        P
                      </span>
                      <div className="text-right">
                        <span className="text-sm font-light text-ivory">PEPE</span>
                        <span className="text-[10px] font-mono text-sage/50 uppercase">Token A</span>
                      </div>
                    </div>
                    <span className="text-3xl font-light text-ivory mono">+8.0%</span>
                  </div>
                  <div className="flex flex-col items-start gap-2 pl-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white/5 text-sage text-xs font-bold border border-white/10">
                        D
                      </span>
                      <div className="text-left">
                        <span className="text-sm font-light text-ivory">DOGE</span>
                        <span className="text-[10px] font-mono text-sage/50 uppercase">Token B</span>
                      </div>
                    </div>
                    <span className="text-3xl font-light text-ivory mono">+3.0%</span>
                  </div>
                </div>

                <div className="aspect-[16/9] rounded-sm border border-forest-700 bg-forest-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono text-sage/50">Max</span>
                      <span className="text-[10px] font-mono text-sage/50">+12%</span>
                      <span className="text-[10px] font-mono text-sage/50">0%</span>
                      <span className="text-[10px] font-mono text-sage/50">-12%</span>
                      <span className="text-[10px] font-mono text-sage/50">Min</span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    {['Day 1', 'Day 8', 'Day 15', 'Day 22', 'Day 30'].map((label, i) => (
                      <span key={label} className="text-[10px] font-mono text-sage/50">
                        {label}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-end justify-between gap-1 px-6 pb-14">
                    {[15, 40, 25, 70, 50, 90, 60, 85, 45, 95, 55, 100].map(
                      (height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: i * 0.05, duration: 0.6 }}
                          className="w-full bg-white/10 rounded-t-sm group-hover:bg-tradegreen/20 transition-colors"
                        />
                      )
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-tradegreen" />
                    <span className="text-[10px] font-mono text-sage">PEPE</span>
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="text-[10px] font-mono text-sage">DOGE</span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[PAIRS[0], PAIRS[1]].map((pair) => (
                    <div
                      key={pair.id}
                      className="flex items-center gap-3 px-4 py-3 rounded-sm border border-white/5 bg-charcoal/50"
                    >
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-sm bg-white/5 text-[10px] font-bold"
                        style={{ color: pair.color }}
                      >
                        {pair.symbol.slice(0, 1)}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-light text-ivory mono">
                          {pair.symbol}
                        </span>
                        <span className="text-[10px] text-sage font-mono uppercase">
                          {pair.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-mono text-sage uppercase tracking-widest">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/10 text-sage">
                !
              </span>
              <span>
                UI preview only. No real trading, wallet connection, or live
                market data is implemented.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
