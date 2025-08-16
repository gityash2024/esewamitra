import styled from 'styled-components'
import { Button, Card, Grid } from '../../components/ui'

const Wrap = styled.div``
const Hero = styled.section`
  background: ${p => p.theme.gradients.hero};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 40px 24px; margin-bottom: 24px; text-align: center;
`

export default function FSSAI() {
  return (
    <Wrap>
      <Hero>
        <h1>FSSAI Registration</h1>
        <p>Mandatory registration for food businesses in India. Fast filing with expert support.</p>
        <Button as="a" href="#pricing">Start Now</Button>
      </Hero>
      <Grid cols="2fr 1fr" colsLg="1fr">
        <Card>
          <h2>Who Needs It</h2>
          <p>All FBOs including manufacturers, traders, restaurants, small eateries, importers, exporters, etc.</p>
          <h3>Types</h3>
          <ul>
            <li>Basic (turnover up to ₹12L)</li>
            <li>State (₹12L to ₹20Cr)</li>
            <li>Central (above ₹20Cr or multi-state)</li>
          </ul>
        </Card>
        <Card id="pricing">
          <h3>Pricing</h3>
          <p style={{fontSize:24, fontWeight:800, color:'#146B66'}}>From ₹1,799</p>
          <ul>
            <li>Application preparation & filing</li>
            <li>Follow-ups with authority</li>
            <li>License delivery</li>
          </ul>
          <Button>Register</Button>
        </Card>
      </Grid>
    </Wrap>
  )
} 