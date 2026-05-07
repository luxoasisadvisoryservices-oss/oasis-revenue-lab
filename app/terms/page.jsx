export const metadata = {
  title: 'Terms and Conditions — Oasis Revenue Lab',
  description: 'Terms and Conditions for Oasis Revenue Lab, a division of Lux Oasis Advisory & Services LLC.',
}

export default function TermsAndConditions() {
  return (
    <main style={{ background: '#faf8f5', minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632', margin: '0 0 12px' }}>Legal</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 16px' }}>Terms and Conditions</h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#8a8076', margin: 0 }}>Last updated: May 2026 · Lux Oasis Advisory &amp; Services LLC</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

          {[
            {
              title: '1. About These Terms',
              content: `These Terms and Conditions govern your use of Oasis Revenue Lab services, including the AI Revenue Agent, revenue management consultancy, and related products and tools.\n\nOasis Revenue Lab is a division of Lux Oasis Advisory & Services LLC, registered in the Sharjah Free Zone, United Arab Emirates (TRN 104722180700003).\n\nBy using our services, you agree to these terms. If you do not agree, please do not use our services.\n\nThese terms should be read alongside our Privacy Policy.`,
            },
            {
              title: '2. Our Services',
              content: `Oasis Revenue Lab provides:\n\n• AI Revenue Agent — automated daily intelligence briefings, pricing signal monitoring, and revenue recommendations delivered via Telegram or Slack\n• Revenue Management Consultancy — strategic pricing advice, PriceLabs configuration, and revenue management guidance\n• Hybrid Revenue Management — combined AI and human revenue management support\n• Free Tools — STR pricing floor calculators shared for informational purposes\n\nAll services are advisory only. We do not make pricing changes to your listings without your explicit approval. Our AI agent operates in read-only mode.`,
            },
            {
              title: '3. Service Fees and Payment',
              content: `Service fees are agreed in writing before any engagement begins. Current pricing is available on our website and may be subject to change.\n\n• AI Revenue Agent fees are charged monthly per listing\n• Consultancy fees are agreed on a per-engagement basis\n• Hybrid management fees are agreed based on portfolio size\n• VAT applies where required by UAE law\n\nPayment is due as specified in your service agreement. Late payment may result in suspension of services.\n\nAll fees are in UAE Dirhams (AED) unless otherwise agreed.`,
            },
            {
              title: '4. Free Tools and Calculators',
              content: `The STR Pricing Floor Calculator and Multi-Unit Portfolio Calculator are provided free of charge for informational purposes only.\n\nThese tools are provided "as is". Results are estimates based on inputs you provide. They do not constitute financial or investment advice.\n\nWe make no guarantees about the accuracy of calculator outputs. You are responsible for verifying all figures and making your own pricing decisions.`,
            },
            {
              title: '5. Advisory Nature of Services',
              content: `All recommendations, signals, alerts, and briefings provided by Oasis Revenue Lab are advisory only.\n\n• We do not guarantee specific revenue outcomes\n• We do not guarantee occupancy levels or booking volumes\n• Market conditions, platform algorithms, and external factors are outside our control\n• Past performance signals do not guarantee future results\n\nYou remain solely responsible for all pricing decisions made on your listings. We provide intelligence and recommendations — the decision to act is always yours.`,
            },
            {
              title: '6. Intellectual Property',
              content: `All content, tools, AI systems, algorithms, reports, and materials produced by Oasis Revenue Lab remain the intellectual property of Lux Oasis Advisory & Services LLC.\n\nYou may not:\n• Reproduce or distribute our reports or tools without permission\n• Reverse-engineer or copy our AI systems\n• Use our brand, logo, or materials without written consent\n\nYou retain ownership of all data you provide to us about your own listings and operations.`,
            },
            {
              title: '7. Confidentiality',
              content: `Both parties agree to keep confidential any non-public information shared during the service relationship.\n\nWe will not share your portfolio data, performance metrics, or business information with third parties except as described in our Privacy Policy.\n\nYou agree not to share our proprietary systems, methodologies, or reports with competitors or use them to build competing products.`,
            },
            {
              title: '8. Limitation of Liability',
              content: `To the maximum extent permitted by applicable law:\n\n• Our total liability to you for any claim arising from our services is limited to the fees paid by you in the 3 months preceding the claim\n• We are not liable for any indirect, consequential, or loss of profit claims\n• We are not liable for losses arising from your own pricing decisions made based on our advisory recommendations\n• We are not liable for platform changes, market disruptions, or external events outside our control\n\nNothing in these terms limits liability for fraud, gross negligence, or any liability that cannot be excluded by law.`,
            },
            {
              title: '9. Termination',
              content: `Either party may terminate a service agreement with 30 days written notice unless a different notice period is specified in your service agreement.\n\nWe may terminate services immediately if:\n• Payment obligations are not met\n• These terms are materially breached\n• Continuing the service would violate applicable law\n\nUpon termination, your access to the AI agent will be removed. Any outstanding fees remain payable.`,
            },
            {
              title: '10. Governing Law',
              content: `These terms are governed by the laws of the United Arab Emirates.\n\nAny disputes arising from these terms or our services will be subject to the jurisdiction of the courts of the United Arab Emirates.\n\nWe will always attempt to resolve disputes informally before any formal proceedings.`,
            },
            {
              title: '11. Changes to These Terms',
              content: `We may update these terms from time to time. We will notify active clients of material changes with at least 14 days notice.\n\nContinued use of our services after the effective date of any changes constitutes acceptance of the revised terms.`,
            },
            {
              title: '12. Contact',
              content: `For any questions about these terms:\n\nLux Oasis Advisory & Services LLC\nEmail: info@luxoasisadvisory.com\nWhatsApp: +971 52 760 4550\nSharjah Free Zone, United Arab Emirates\nTRN: 104722180700003`,
            },
          ].map((section) => (
            <div key={section.title} style={{ paddingBottom: '36px', borderBottom: '1px solid #e8dfd0' }}>
              <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 600, color: '#1a1a1a', margin: '0 0 12px' }}>{section.title}</h2>
              {section.content.split('\n').map((line, i) => (
                <p key={i} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 300, lineHeight: 1.75, color: '#5a5248', margin: line === '' ? '8px 0' : '0 0 6px' }}>
                  {line}
                </p>
              ))}
            </div>
          ))}

        </div>

        <div style={{ marginTop: '48px', padding: '20px 24px', background: '#f4f0e8', border: '1px solid #d5c5aa', borderRadius: '10px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#5a5248', margin: 0, lineHeight: 1.65 }}>
            For our privacy practices, please read our{' '}
            <a href="/privacy" style={{ color: '#c49632', textDecoration: 'none', fontWeight: 500 }}>Privacy Policy</a>.
            {' '}These documents together govern your relationship with Oasis Revenue Lab.
          </p>
        </div>

      </div>
    </main>
  )
}
