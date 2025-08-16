import styled from 'styled-components'
import StaticPage from './StaticPage'

const Section = styled.section`
  margin: 24px 0;
  h2 { margin: 0 0 10px 0; font-size: 22px; }
  p { margin: 0 0 12px 0; line-height: 1.7; }
  ul { margin: 12px 0; padding-left: 20px; }
  li { margin: 6px 0; }
`

export default function Privacy() {
  return (
    <StaticPage title="Privacy Policy" subtitle="Your privacy is important to us.">
      <Section>
        <h2>1. Overview</h2>
        <p>We collect minimal personal data required to provide and improve our services. We do not sell your personal data. This policy explains what we collect, how we use it, and your rights.</p>
      </Section>

      <Section>
        <h2>2. Data We Collect</h2>
        <ul>
          <li>Account information (name, email, phone)</li>
          <li>Service details (consultation preferences, case description)</li>
          <li>Payment information (processed by secure third-party gateways)</li>
          <li>Technical data (IP address, device information, usage analytics)</li>
        </ul>
      </Section>

      <Section>
        <h2>3. How We Use Data</h2>
        <ul>
          <li>Provide and personalize services, connect you with experts</li>
          <li>Process payments and send service-related communications</li>
          <li>Improve platform performance and user experience</li>
          <li>Comply with legal obligations and prevent misuse</li>
        </ul>
      </Section>

      <Section>
        <h2>4. Data Sharing</h2>
        <p>We share data with independent legal professionals for service delivery and with trusted service providers (hosting, analytics, payments) under strict confidentiality and security obligations.</p>
      </Section>

      <Section>
        <h2>5. Security</h2>
        <p>We implement industry-standard security measures including encryption, access controls, and regular audits to protect your data against unauthorized access, alteration, or disclosure.</p>
      </Section>

      <Section>
        <h2>6. Data Retention</h2>
        <p>We retain data only as long as necessary to provide services, comply with legal requirements, resolve disputes, and enforce agreements. When no longer needed, data is securely deleted or anonymized.</p>
      </Section>

      <Section>
        <h2>7. Your Rights</h2>
        <ul>
          <li>Access, correct, or delete your personal data</li>
          <li>Withdraw consent and object to certain processing</li>
          <li>Request data portability where technically feasible</li>
          <li>File a complaint with a supervisory authority</li>
        </ul>
      </Section>

      <Section>
        <h2>8. Children’s Privacy</h2>
        <p>Our services are not directed to individuals under 18. We do not knowingly collect data from children. If we become aware, we will promptly delete such information.</p>
      </Section>

      <Section>
        <h2>9. International Transfers</h2>
        <p>When we transfer data across borders, we implement appropriate safeguards in compliance with applicable laws to ensure equivalent protection.</p>
      </Section>

      <Section>
        <h2>10. Changes</h2>
        <p>We may update this Privacy Policy from time to time. Material changes will be notified on this page. Continued use of the platform implies acceptance of the updated policy.</p>
      </Section>

      <Section>
        <h2>11. Contact</h2>
        <p>For privacy-related questions or requests, please reach out via the Contact page.</p>
      </Section>
    </StaticPage>
  )
} 