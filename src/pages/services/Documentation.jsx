import { Button, Card, Grid } from '../../components/ui'
import styled from 'styled-components'

const Wrap = styled.div``
const Header = styled.section`
  background: ${p => p.theme.gradients.hero};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 40px 24px; margin-bottom: 24px;
  h1 { margin: 0 0 8px 0; }
  p { margin: 0; color: ${p => p.theme.colors.mutedText}; }
`

export default function Documentation() {
  return (
    <Wrap>
      <Header>
        <h1>Document Drafting</h1>
        <p>Contracts, NDAs, Terms, Privacy, Employment, Service Agreements and more — drafted and reviewed by experts.</p>
      </Header>
      <Grid>
        <Card>
          <h3>Business Contracts</h3>
          <p>Founders Agreements, Shareholders Agreements, Vendor Contracts, SaaS Agreements, and licensing.</p>
          <Button>Get Started</Button>
        </Card>
        <Card>
          <h3>Policies</h3>
          <p>Privacy Policy, Terms & Conditions, Cookie Policy, Return & Refund Policy tailored for your business.</p>
          <Button>Get Started</Button>
        </Card>
        <Card>
          <h3>Employment Docs</h3>
          <p>Offer Letters, Employment Agreements, Non-Compete, Non-Disclosure, and contractor agreements.</p>
          <Button>Get Started</Button>
        </Card>
      </Grid>
    </Wrap>
  )
} 