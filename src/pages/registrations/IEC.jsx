import styled from 'styled-components'
import { Button, Card, Grid } from '../../components/ui'

const Wrap = styled.div``
const Hero = styled.section`
  background: ${p => p.theme.gradients.hero};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 40px 24px; margin-bottom: 24px; text-align: center;
`

export default function IEC() {
  return (
    <Wrap>
      <Hero>
        <h1>IEC Registration</h1>
        <p>Import Export Code for businesses dealing in international trade. Quick filing and delivery.</p>
        <Button as="a" href="#pricing">Get IEC</Button>
      </Hero>
      <Grid cols="2fr 1fr" colsLg="1fr">
        <Card>
          <h2>Requirements</h2>
          <ul>
            <li>PAN and Aadhaar</li>
            <li>Business address & bank details</li>
            <li>Firm/Company documents</li>
          </ul>
          <h3>Benefits</h3>
          <ul>
            <li>Global market access</li>
            <li>Availing export incentives</li>
            <li>No return filings required</li>
          </ul>
        </Card>
        <Card id="pricing">
          <h3>Pricing</h3>
          <p style={{fontSize:24, fontWeight:800, color:'#146B66'}}>₹1,999</p>
          <ul>
            <li>Application preparation</li>
            <li>Online filing</li>
            <li>IEC delivery</li>
          </ul>
          <Button>Apply Now</Button>
        </Card>
      </Grid>
    </Wrap>
  )
} 