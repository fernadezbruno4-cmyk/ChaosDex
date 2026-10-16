'use client'

import { motion } from 'framer-motion'
import { Coin, ShieldAlert } from 'lucide-react'

export function TheChaosToken() {
  return (
    <section id="the-chaos-token" className="container-section">
      <SectionHeader
        title="The $CHAOS token"
        description="$CHAOS is the planned ecosystem token for CHAOSDEX. All utilities below are proposed and not yet implemented."
      />

      <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-silver-500/30 bg-white/5 text-silver-400 text-xs font-mono uppercase tracking-wider mb-6">
            Planned ecosystem token
          </div>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-6">
            Introducing $CHAOS
          </h2>
          <p className="text-lg text-silver-400 leading-relaxed mb-8 max-w-lg">
            $CHAOS is planned as the native ecosystem token for CHAOSDEX,
            powering the token-versus-token comparison platform. It is not yet
            live, and no contract address has been deployed.
          </p>

          <div className="space-y-4">
            {[
              {
                title: 'Proposed utilities',
                items: [
                  'Governance participation in platform decisions',
                  'Access to arena features and time periods',
                  'Community rewards and engagement incentives',
                ],
              },
              {
                title: 'Important notices',
                items: [
                  'All utilities are planned until implemented.',
                  'No contract address has been invented or deployed.',
                  '$CHAOS does not promise profits or financial returns.',
                ],
              },
            ].map((section, si) => (
              <div key={si} className="mb-8">
                <h4 className="text-sm font-medium text-silver-300 uppercase tracking-wider mb-3">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-silver-400">
                      <span className="mt-0.5 flex h-2 w-2 items-center justify-center rounded-full border border-silver-500/30 bg-white/5">
                        <span className="text-[10px]">•</span>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="card relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(192,192,192,0.03)_0%,_transparent_50%)] pointer-events-none" />
          <div className="relative z-10 p-8 lg:p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/5 mb-6 text-silver-400 group-hover:border-silver-500/50 transition-colors">
              <Coin className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-light text-white mb-4">$CHAOS</h3>
            <p className="text-silver-400 text-sm leading-relaxed mb-8">
              Planned utility token for the CHAOSDEX ecosystem. Not yet
              implemented.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 mt-0.5 text-silver-500 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Planned, not live</p>
                  <p className="text-xs text-silver-500 font-mono mt-1">
                    No smart contract has been deployed. Do not send funds to
                    any address claiming to be $CHAOS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black-deep/50 rounded-3xl border border-white/5 p-8 lg:p-12">
        <h3 className="text-xl font-light text-white mb-4">Status</h3>
        <p className="text-silver-400 text-sm leading-relaxed">
          $CHAOS is a proposed token. Utilities described here are planned
          until implemented. This is not financial advice, and no profits are
          promised.
        </p>
      </div>
    </section>
  )
}
