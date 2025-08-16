import styled from 'styled-components'
import { Button, Card, Grid, Input, TextArea } from '../components/ui'
import Reveal from '../components/Reveal'

const Header = styled.section`
  background: ${p => p.theme.gradients.hero};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 32px 24px; margin-bottom: 24px;
  h1 { margin: 0 0 8px 0; }
  p { margin: 0; color: ${p => p.theme.colors.mutedText}; }
`

const FormCard = styled(Card)`
  display: grid; gap: 14px;
  label { font-weight: 600; }
`

export default function Consult() {
  return (
    <>
      <Header>
        <h1>Consult with our Experts</h1>
        <p>Get personalized legal guidance. Share your details and we’ll connect you within minutes.</p>
      </Header>

      <Grid cols="1.3fr 1fr" colsLg="1fr">
        <FormCard as={Reveal}>
          <label>Full Name</label>
          <Input placeholder="Enter your full name" />
          <label>Phone</label>
          <Input placeholder="Enter your phone number" />
          <label>Email</label>
          <Input placeholder="Enter your email" />
          <label>Choose Service</label>
          <Input placeholder="e.g. Property Due Diligence, GST" />
          <label>Brief Description</label>
          <TextArea placeholder="Describe your legal query" />
          <div style={{display:'flex', gap:12, alignItems:'center'}}>
            <Button size="lg">Request Callback</Button>
            <Button variant="secondary" size="lg">Schedule Now</Button>
          </div>
        </FormCard>
        <Card as={Reveal}>
          <h3>Why EsewaMitra?</h3>
          <ul>
            <li>1000+ verified experts</li>
            <li>Private & encrypted calls</li>
            <li>Transparent pricing</li>
            <li>Available 24/7</li>
          </ul>
        </Card>
      </Grid>
    </>
  )
} 