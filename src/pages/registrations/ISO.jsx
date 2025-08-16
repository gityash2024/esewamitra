import styled from 'styled-components'
import { Button, Card, Grid } from '../../components/ui'

const Wrap = styled.div``
const Hero = styled.section`
  background: ${p => p.theme.gradients.hero};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 40px 24px; margin-bottom: 24px; text-align: center;
`

export default function ISO() {
  return (
    <Wrap>
      <Hero>
        <h1>ISO Certification</h1>
        <p>Get ISO 9001/14001/27001 certification with gap assessment, documentation, and audit support.</p>
        <Button as="a" href="#pricing">Start Certification</Button>
      </Hero>
      <Grid cols="2fr 1fr" colsLg="1fr">
        <Card>
          <h2>Coverage</h2>
          <ul>
            <li>Gap analysis & scope definition</li>
            <li>Policy & SOP documentation</li>
            <li>Internal audit preparation</li>
            <li>Certification body coordination</li>
          </ul>
        </Card>
        <Card id="pricing">
          <h3>Pricing</h3>
          <p style={{fontSize:24, fontWeight:800, color:'#146B66'}}>Custom</p>
          <ul>
            <li>Project-based quote</li>
            <li>Dedicated consultant</li>
            <li>Timelines as per scope</li>
          </ul>
          <Button>Request Quote</Button>
        </Card>
      </Grid>
    </Wrap>
  )
} 