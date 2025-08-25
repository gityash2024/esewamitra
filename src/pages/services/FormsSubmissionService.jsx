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
  
  .highlight {
    background: ${p => p.theme.colors.primary}10;
    color: ${p => p.theme.colors.primary};
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    margin-top: 12px;
    display: inline-block;
  }
`

const FeaturesSection = styled.div`
  margin: 48px 0;
  
  h2 {
    text-align: center;
    margin-bottom: 32px;
    color: ${p => p.theme.colors.text};
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`

const FeatureCard = styled.div`
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

export default function FormsSubmissionService() {
  const services = [
    {
      icon: '⚡',
      title: 'Electricity Connection',
      description: 'Complete file preparation and submission for new electricity connections',
      highlight: 'File Ready & Submit'
    },
    {
      icon: '💧',
      title: 'Water Connection',
      description: 'Water connection application with complete documentation support',
      highlight: 'File Ready & Submit'
    },
    {
      icon: '📰',
      title: 'Gazette for Name Change',
      description: 'Official name change publication in government gazette',
      highlight: 'Legal Documentation'
    },
    {
      icon: '👴',
      title: 'Pension Forms',
      description: 'Old age, disability, widow, and Palanhar pension applications',
      highlight: 'Government Benefits'
    },
    {
      icon: '📱',
      title: 'Jeevan Pramaan',
      description: 'Digital Life Certificate - Home services available',
      highlight: 'Home Services Available'
    },
    {
      icon: '📄',
      title: 'Birth/Marriage/Death Certificates',
      description: 'Complete documentation for vital records and certificates',
      highlight: 'Vital Records'
    },
    {
      icon: '👮',
      title: 'Police Verification',
      description: 'Police verification and reports for lost and stolen items',
      highlight: 'Legal Reports'
    },
    {
      icon: '🏛️',
      title: 'Domicile/Caste/EWS',
      description: 'Certificate applications for domicile, caste, and EWS status',
      highlight: 'Government Certificates'
    }
  ]

  const features = [
    {
      icon: '🚀',
      title: 'Fast Processing',
      items: [
        'Same day file preparation',
        'Quick submission to departments',
        'Real-time status tracking',
        'Priority handling for urgent cases'
      ]
    },
    {
      icon: '✅',
      title: 'Complete Support',
      items: [
        'Document verification',
        'Form filling assistance',
        'Follow-up with departments',
        'Issue resolution support'
      ]
    },
    {
      icon: '🏠',
      title: 'Home Services',
      items: [
        'Jeevan Pramaan at home',
        'Document collection',
        'Biometric services',
        'Personal assistance'
      ]
    }
  ]

  return (
    <Container>
      <Hero>
        <Reveal>
          <h1>Forms Submission Services</h1>
          <p>Complete assistance for government form preparation, submission, and processing. We handle everything from electricity connections to vital certificates.</p>
        </Reveal>
      </Hero>

      <Grid>
        {services.map((service, index) => (
          <Reveal key={index}>
            <ServiceCard>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="highlight">{service.highlight}</div>
            </ServiceCard>
          </Reveal>
        ))}
      </Grid>

      <FeaturesSection>
        <Reveal>
          <h2>Why Choose Our Services</h2>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <h4>
                  <span>{feature.icon}</span>
                  {feature.title}
                </h4>
                <ul>
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Reveal>
      </FeaturesSection>

      <Reveal style={{textAlign: 'center', marginTop: '48px'}}>
        <Button as={Link} to="/consult" size="lg">Get Started Today</Button>
      </Reveal>
    </Container>
  )
}
