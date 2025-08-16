import styled from 'styled-components'
import { Button, Card, Grid } from '../../components/ui'

const Wrap = styled.div``
const Hero = styled.section`
  background: ${p => p.theme.gradients.hero};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 40px 24px; margin-bottom: 24px; text-align: center;
`

export default function Trademark() {
  return (
    <Wrap>
      <Hero>
        <h1>Trademark Registration</h1>
        <p>Protect your brand name and logo with comprehensive search, filing, and monitoring.</p>
        <Button as="a" href="#pricing">Protect Your Brand</Button>
      </Hero>
      <Grid cols="2fr 1fr" colsLg="1fr">
        <Card>
          <h2>What We Do</h2>
          <ul>
            <li>Comprehensive trademark search</li>
            <li>Class selection & filing</li>
            <li>Reply to examination report</li>
            <li>Monitoring and renewal assistance</li>
          </ul>
          <h3>Documents</h3>
          <ul>
            <li>Logo/wordmark (if any)</li>
            <li>Applicant identity & address</li>
            <li>Power of attorney (on request)</li>
          </ul>
        </Card>
        <Card id="pricing">
          <h3>Pricing</h3>
          <p style={{fontSize:24, fontWeight:800, color:'#146B66'}}>₹3,999</p>
          <ul>
            <li>Search & filing</li>
            <li>Class guidance</li>
            <li>Application tracking</li>
          </ul>
          <Button>Apply Now</Button>
        </Card>
      </Grid>
    </Wrap>
  )
} 