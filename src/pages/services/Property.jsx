import { Button, Card, Grid, WebImage } from '../../components/ui'
import styled from 'styled-components'

const Wrap = styled.div``
const Header = styled.section`
  background: ${p => p.theme.gradients.hero};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 40px 24px; margin-bottom: 24px;
  display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; align-items: center;
  @media (max-width: ${p => p.theme.breakpoints.lg}) { grid-template-columns: 1fr; }
  h1 { margin: 0 0 8px 0; }
  p { margin: 0; color: ${p => p.theme.colors.mutedText}; }
`

export default function Property() {
  return (
    <Wrap>
      <Header>
        <div>
          <h1>Property Legal Services</h1>
          <p>Due diligence, title search, sale deed drafting, property registration, and dispute resolution by experts.</p>
        </div>
        <WebImage rounded alt="Property legal" src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop" />
      </Header>
      <Grid>
        <Card>
          <h3>Title Verification</h3>
          <p>Comprehensive title search and legal opinion to protect your property investment.</p>
          <Button>Get Quote</Button>
        </Card>
        <Card>
          <h3>Sale Deed Drafting</h3>
          <p>Legally robust drafting and on-ground registration support.</p>
          <Button>Get Quote</Button>
        </Card>
      
      </Grid>
    </Wrap>
  )
} 