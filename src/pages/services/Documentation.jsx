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

const ServiceCard = styled(Card)`
  text-align: center;
  padding: 32px 24px;
  transition: all ${p => p.theme.transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${p => p.theme.shadows.lg};
  }
  
  .icon {
    font-size: 3rem;
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

export default function GovtDocuments() {
  const services = [
    {
      icon: '🆔',
      title: 'Aadhaar Services',
      description: 'Aadhaar enrollment, updates, corrections, and related services'
    },
    {
      icon: '📋',
      title: 'PAN Card Services',
      description: 'PAN card application, corrections, and updates'
    },
    {
      icon: '🗳️',
      title: 'Voter ID Services',
      description: 'Voter ID card application and corrections'
    },
    {
      icon: '🛂',
      title: 'Passport Services',
      description: 'Passport application, renewal, and corrections'
    },
    {
      icon: '🚗',
      title: 'Driving License',
      description: 'DL application, renewal, and related services'
    },
    {
      icon: '🛒',
      title: 'Ration Card',
      description: 'Ration card application and updates'
    },
    {
      icon: '🏥',
      title: 'RGHS Services',
      description: 'Railway General Health Services documentation'
    },
    {
      icon: '💳',
      title: 'Ayushman Card',
      description: 'Ayushman Bharat health insurance card services'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Document Collection',
      description: 'Submit required documents and information'
    },
    {
      step: '2',
      title: 'Verification',
      description: 'Our experts verify all documents and details'
    },
    {
      step: '3',
      title: 'Application Processing',
      description: 'Submit application to relevant government department'
    },
    {
      step: '4',
      title: 'Follow-up',
      description: 'Track progress and ensure timely completion'
    }
  ]

  return (
    <Container>
      <Hero>
        <Reveal>
          <h1>Government Document Services</h1>
          <p>Professional assistance for all government ID cards and essential documents. Fast, reliable, and hassle-free services.</p>
        </Reveal>
      </Hero>

      <Grid>
        {services.map((service, index) => (
          <Reveal key={index}>
            <ServiceCard>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          </Reveal>
        ))}
      </Grid>

      <ProcessSection>
        <Reveal>
          <h2>Our Process</h2>
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
        <Button as={Link} to="/consult" size="lg">Get Started Today</Button>
      </Reveal>
    </Container>
  )
} 