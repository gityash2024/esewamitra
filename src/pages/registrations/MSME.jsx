import styled from 'styled-components'
import { Button, Card, Grid } from '../../components/ui'

const Wrap = styled.div``
const Hero = styled.section`
  background: ${p => p.theme.gradients.hero};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 40px 24px; margin-bottom: 24px; text-align: center;
  h1 { margin: 0 0 8px 0; }
  p { margin: 0; color: ${p => p.theme.colors.mutedText}; }
`

export default function MSME() {
  return (
    <Wrap>
      <Hero>
        <h1>MSME Registration</h1>
        <p>Get your Udyam/MSME registration quickly with expert support and compliant documentation.</p>
        <Button as="a" href="#pricing">Start Registration</Button>
      </Hero>

      <Grid cols="2fr 1fr" colsLg="1fr">
        <Card>
          <h2>Overview</h2>
          <p>MSME registration offers government benefits including credit facilities, subsidies, and tax rebates. We provide end-to-end assistance from documentation to final certificate.</p>
          <h3>Documents Required</h3>
          <ul>
            <li>Aadhaar and PAN of proprietor/partners/directors</li>
            <li>Business address and bank details</li>
            <li>NIC code and business activity details</li>
          </ul>
          <h3>Benefits</h3>
          <ul>
            <li>Priority sector lending</li>
            <li>Subsidies and incentives</li>
            <li>ISO reimbursement and concessions</li>
          </ul>
        </Card>
        <Card id="pricing">
          <h3>Pricing</h3>
          <p style={{fontSize:24, fontWeight:800, color:'#146B66'}}>₹1,199</p>
          <ul>
            <li>Application filing</li>
            <li>Expert verification</li>
            <li>Udyam certificate</li>
          </ul>
          <Button>Register Now</Button>
        </Card>
      </Grid>
    </Wrap>
  )
} 