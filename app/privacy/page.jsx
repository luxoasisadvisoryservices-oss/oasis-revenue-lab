export const metadata = {
  title: 'Privacy Policy — Oasis Revenue Lab',
  description: 'Privacy Policy for Oasis Revenue Lab, a division of Lux Oasis Advisory & Services LLC.',
}

export default function PrivacyPolicy() {
  return (
    <main style={{ background: '#faf8f5', minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632', margin: '0 0 12px' }}>Legal</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 16px' }}>Privacy Policy</h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#8a8076', margin: 0 }}>Last updated: May 2026 · Lux Oasis Advisory &amp; Services LLC</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

          {[
            {
              title: '1. Who We Are',
              content: `Oasis Revenue Lab is a division of Lux Oasis Advisory & Services LLC, a company registered in the Sharjah Free Zone, United Arab Emirates (TRN 104722180700003). We provide AI-powered revenue intelligence and revenue management consultancy services for short-term rental operators.\n\nWhen this policy refers to "we", "us", or "our", it means Lux Oasis Advisory & Services LLC operating under the Oasis Revenue Lab brand.\n\nContact: info@luxoasisadvisory.com`,
            },
            {
              title: '2. What Information We Collect',
              content: `We collect information you provide directly to us, including:\n\n• Name and contact details (email address, phone number, WhatsApp number)\n• Business information (portfolio size, listing locations, operational details)\n• Communication records (WhatsApp messages, emails, enquiry forms)\n• Technical data (if you use our AI agent, usage patterns and query data)\n\nWe do not collect payment card details directly. Any financial transactions are handled through separate secure platforms.\n\nWe do not knowingly collect personal data from individuals under the age of 18.`,
            },
            {
              title: '3. How We Use Your Information',
              content: `We use the information we collect to:\n\n• Deliver the AI Revenue Agent service and daily intelligence briefings\n• Provide revenue management consultancy and advisory services\n• Respond to enquiries and communicate about our services\n• Send the free floor price calculators you request\n• Improve our AI systems and service quality\n• Comply with legal and regulatory obligations\n\nWe do not sell your personal data to third parties. We do not use your data for advertising purposes.`,
            },
            {
              title: '4. How We Share Your Information',
              content: `We may share your information with:\n\n• Service providers who help us operate our business (e.g. cloud hosting, analytics tools) — only under strict confidentiality agreements\n• Our technical partners involved in running the AI Revenue Agent infrastructure\n• Legal or regulatory authorities where required by law\n\nWe require all third parties to respect the security of your personal data and treat it in accordance with applicable law.`,
            },
            {
              title: '5. Data Retention',
              content: `We retain your personal data for as long as necessary to provide our services and comply with our legal obligations.\n\n• Client data is retained for the duration of the service agreement plus 3 years\n• Enquiry and communication data is retained for 2 years\n• You may request deletion of your data at any time by contacting us at info@luxoasisadvisory.com`,
            },
            {
              title: '6. Your Rights',
              content: `Depending on your location, you may have the following rights regarding your personal data:\n\n• Right to access — request a copy of the data we hold about you\n• Right to rectification — request correction of inaccurate data\n• Right to erasure — request deletion of your data\n• Right to restriction — request we limit how we use your data\n• Right to portability — request your data in a portable format\n• Right to object — object to our processing of your data\n\nTo exercise any of these rights, contact us at info@luxoasisadvisory.com. We will respond within 30 days.`,
            },
            {
              title: '7. Cookies and Tracking',
              content: `Our website may use minimal cookies for analytics and performance purposes. We do not use advertising or tracking cookies.\n\nYou can control cookie settings through your browser. Disabling cookies will not affect your ability to access our website content.`,
            },
            {
              title: '8. Data Security',
              content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. Our AI infrastructure is hosted on secure European cloud servers (Hetzner, Germany) with SSH key authentication and encrypted connections.\n\nNo method of transmission over the internet is 100% secure. We cannot guarantee absolute security but we are committed to protecting your data to a high standard.`,
            },
            {
              title: '9. International Data Transfers',
              content: `We operate from the United Arab Emirates. If you are located outside the UAE, your data may be transferred to and processed in the UAE. By using our services, you consent to this transfer.\n\nWhere we use service providers outside the UAE, we ensure appropriate safeguards are in place.`,
            },
            {
              title: '10. Changes to This Policy',
              content: `We may update this privacy policy from time to time. We will notify active clients of any material changes by email. The date at the top of this policy reflects when it was last updated.\n\nContinued use of our services after updates constitutes acceptance of the revised policy.`,
            },
            {
              title: '11. Contact Us',
              content: `For any privacy-related questions or requests:\n\nLux Oasis Advisory & Services LLC\nEmail: info@luxoasisadvisory.com\nWhatsApp: +971 52 760 4550\nSharjah Free Zone, United Arab Emirates\nTRN: 104722180700003`,
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
            This privacy policy applies to Oasis Revenue Lab services operated by Lux Oasis Advisory &amp; Services LLC. For our terms of service, please visit our{' '}
            <a href="/terms" style={{ color: '#c49632', textDecoration: 'none', fontWeight: 500 }}>Terms and Conditions</a>.
          </p>
        </div>

      </div>
    </main>
  )
}
