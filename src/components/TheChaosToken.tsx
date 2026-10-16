'use client'

import { motion } from 'framer-motion'
import { DollarSign, ShieldAlert } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'

export function TheChaosToken() {
  return (
    <section id="the-chaos-token" className="container-section bg-forest-900">
      <SectionHeader
        title="The $CHAOS token"
        description="$CHAOS is the planned ecosystem token for CHAOSDEX. All utilities below are proposed and not yet implemented."
      />

      <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-tradegreen/20 bg-tradegreen/5 text-tradegreen text-[10px] font-bold uppercase tracking-widest mb-8">
            Planned ecosystem token
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-ivory mb-8 leading-[1.05]">
            Introducing $CHAOS
          </h2>
          <p className="text-lg text-sage leading-relaxed mb-10 max-w-lg">
            $CHAOS is planned as the native ecosystem token for CHAOSDEX,
            powering the token-versus-token comparison platform. It is not yet
            live, and no contract address has been deployed.
          </p>

          <div className="space-y-6">
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
              <div key={si} className="mb-10">
                <h4 className="text-[10px] font-bold text-sage/70 uppercase tracking-widest mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-sage leading-relaxed">
                      <span className="mt-0.5 flex h-2 w-2 items-center justify-center rounded-full border border-white/10 bg-white/5">
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(199,205,216,0.03)_0%,_transparent_50%)] pointer-events-none" />
          <div className="relative z-10 p-10 lg:p-16">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-white/10 bg-white/5 mb-8 text-sage group-hover:border-gold/30 transition-colors">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-ivory mb-4">$CHAOS</h3>
            <p className="text-sage text-sm leading-relaxed mb-10">
              Planned utility token for the CHAOSDEX ecosystem. Not yet
              implemented.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 mt-0.5 text-sage shrink-0" />
                <div>
                  <p className="text-sm font-medium text-ivory">Planned, not live</p>
                  <p className="text-[10px] text-sage/50 font-mono uppercase tracking-widest mt-1">
                    No smart contract has been deployed. Do not send funds to
                    any address claiming to be $CHAOS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-charcoal rounded-sm border border-forest-700 p-10 lg:p-16">
        <h3 className="text-xl font-bold text-ivory mb-4">Status</h3>
        <p className="text-sage text-sm leading-relaxed">
          $CHAOS is a proposed token. Utilities described here are planned
          until implemented. This is not financial advice, and no profits are
          promised.
        </p>
      </div>
    </section>
  )
}
