import React from 'react'
import styled from 'styled-components'
import { Container, Button, Card, Grid, WebImage } from '../../components/ui'
import Reveal from '../../components/Reveal'
import { Link } from 'react-router-dom'

const Hero = styled.div`
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, ${p => p.theme.colors.primary}15 0%, ${p => p.theme.colors.accent}10 100%);
  border-radius: ${p => p.theme.radii.lg};
  margin-bottom: 48px;
  
  h1 {
    font-size: 2.8rem;
    color: ${p => p.theme.colors.text};
    margin-bottom: 16px;
  }
  
  p {
    font-size: 1.2rem;
    color: ${p => p.theme.colors.mutedText};
    max-width: 600px;
    margin: 0 auto;
  }
`

const StampCard = styled(Card)`
  text-align: center;
  padding: 32px 24px;
  transition: all ${p => p.theme.transitions.base};
  border: 2px solid ${p => p.theme.colors.border};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${p => p.theme.shadows.lg};
    border-color: ${p => p.theme.colors.primary};
  }
  
  .stamp-value {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${p => p.theme.colors.primary};
    margin-bottom: 16px;
    font-family: ${p => p.theme.typography.heading};
  }
  
  .stamp-icon {
    font-size: 4rem;
    margin-bottom: 16px;
  }
  
  h3 {
    color: ${p => p.theme.colors.text};
    margin-bottom: 12px;
  }
  
  p {
    color: ${p => p.theme.colors.mutedText};
    line-height: 1.6;
  }
  
  .availability {
    background: ${p => p.theme.colors.success}10;
    color: ${p => p.theme.colors.success};
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    margin-top: 12px;
    display: inline-block;
  }
`

const InfoSection = styled.div`
  margin: 48px 0;
  
  h2 {
    text-align: center;
    margin-bottom: 32px;
    color: ${p => p.theme.colors.text};
  }
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`

const InfoCard = styled.div`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 24px;
  
  h4 {
    color: ${p => p.theme.colors.primary};
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  ul {
    margin: 0;
    padding-left: 20px;
    color: ${p => p.theme.colors.mutedText};
    
    li {
      margin-bottom: 6px;
    }
  }
`

const ProcessSection = styled.div`
  margin: 48px 0;
  
  h2 {
    text-align: center;
    margin-bottom: 32px;
    color: ${p => p.theme.colors.text};
  }
`

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`

const ProcessCard = styled.div`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 24px;
  text-align: center;
  
  .step {
    background: ${p => p.theme.colors.primary};
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px auto;
    font-weight: 600;
  }
  
  h4 {
    color: ${p => p.theme.colors.text};
    margin-bottom: 8px;
  }
  
  p {
    color: ${p => p.theme.colors.mutedText};
    font-size: 14px;
  }
`

export default function EStampService() {
  const stamps = [
    {
      value: '₹50',
      icon: '🏷️',
      title: '50 Rupee Stamps',
      description: 'Standard denomination for general documentation and agreements',
      availability: 'Available'
    },
    {
      value: '₹100',
      icon: '🏷️',
      title: '100 Rupee Stamps',
      description: 'Common denomination for legal documents and contracts',
      availability: 'Available'
    },
    {
      value: '₹500',
      icon: '🏷️',
      title: '500 Rupee Stamps',
      description: 'High-value denomination for important legal documents',
      availability: 'Available'
    },
    {
      value: 'Other',
      icon: '🏷️',
      title: 'Custom Denominations',
      description: 'Special denominations available on request for specific requirements',
      availability: 'On Request'
    }
  ]

  const info = [
    {
      icon: '📋',
      title: 'What are E-Stamps?',
      items: [
        'Digital equivalent of physical stamps',
        'Legally valid for all official purposes',
        'Secure and tamper-proof',
        'Instant generation and delivery'
      ]
    },
    {
      icon: '✅',
      title: 'Benefits',
      items: [
        'No need to visit stamp vendors',
        'Available 24/7 online',
        'Secure digital verification',
        'Cost-effective and convenient'
      ]
    },
    {
      icon: '📄',
      title: 'Common Uses',
      items: [
        'Legal agreements and contracts',
        'Property documents',
        'Business registrations',
        'Government applications'
      ]
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Select Denomination',
      description: 'Choose the required stamp value'
    },
    {
      step: '2',
      title: 'Upload Document',
      description: 'Upload the document that needs stamping'
    },
    {
      step: '3',
      title: 'Payment',
      description: 'Make secure online payment'
    },
    {
      step: '4',
      title: 'Download',
      description: 'Download stamped document instantly'
    }
  ]

  return (
    <Container>
      <Hero>
        <Reveal>
          <h1>E-Stamp Services</h1>
          <p>Digital stamping solutions for all your legal documentation needs. Fast, secure, and legally valid e-stamps available 24/7.</p>
        </Reveal>
      </Hero>

      <Grid>
        {stamps.map((stamp, index) => (
          <Reveal key={index}>
            <StampCard>
              <div className="stamp-icon">{stamp.icon}</div>
              <div className="stamp-value">{stamp.value}</div>
              <h3>{stamp.title}</h3>
              <p>{stamp.description}</p>
              <div className="availability">{stamp.availability}</div>
            </StampCard>
          </Reveal>
        ))}
      </Grid>

      <InfoSection>
        <Reveal>
          <h2>About E-Stamps</h2>
          <InfoGrid>
            {info.map((item, index) => (
              <InfoCard key={index}>
                <h4>
                  <span>{item.icon}</span>
                  {item.title}
                </h4>
                <ul>
                  {item.items.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </InfoCard>
            ))}
          </InfoGrid>
        </Reveal>
      </InfoSection>

      <ProcessSection>
        <Reveal>
          <h2>How It Works</h2>
          <ProcessGrid>
            {process.map((step, index) => (
              <ProcessCard key={index}>
                <div className="step">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </ProcessCard>
            ))}
          </ProcessGrid>
        </Reveal>
      </ProcessSection>

      <Reveal style={{textAlign: 'center', marginTop: '48px'}}>
        <Button as={Link} to="/consult" size="lg">Get E-Stamps Now</Button>
      </Reveal>
    </Container>
  )
}
