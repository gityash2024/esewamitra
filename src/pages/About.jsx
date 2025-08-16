import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, Card, Grid, WebImage } from '../components/ui'
import CountUp from '../components/CountUp'
import Reveal from '../components/Reveal'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`
  animation: ${fadeInUp} 0.6s ease;
`

const Hero = styled.section`
  background: ${p => p.theme.gradients.hero};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 60px 40px;
  text-align: center;
  margin-bottom: 48px;
  
  h1 {
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    margin: 0 0 16px 0;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${p => p.theme.colors.mutedText};
    margin: 0 auto;
    max-width: 700px;
  }
`

const Section = styled.section`
  margin: 64px 0;
  
  h2 {
    font-size: 2.2rem;
    margin: 0 0 16px 0;
    text-align: center;
  }
  
  .subtitle {
    text-align: center;
    color: ${p => p.theme.colors.mutedText};
    margin: 0 0 48px 0;
    font-size: 1.1rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`

const StorySection = styled.section`
  margin: 64px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .content {
    h2 {
      font-size: 2.2rem;
      margin: 0 0 16px 0;
      text-align: left;
    }
    
    p {
      color: ${p => p.theme.colors.mutedText};
      line-height: 1.7;
      margin: 0 0 16px 0;
      font-size: 1.1rem;
    }
    
    .highlight {
      background: ${p => p.theme.gradients.hero};
      border-left: 4px solid ${p => p.theme.colors.primary};
      padding: 20px;
      border-radius: 0 ${p => p.theme.radii.md} ${p => p.theme.radii.md} 0;
      margin: 24px 0;
      
      strong {
        color: ${p => p.theme.colors.primary};
      }
    }
  }
`

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 48px;
`

const ValueCard = styled(Card)`
  text-align: center;
  padding: 32px 24px;
  transition: all ${p => p.theme.transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${p => p.theme.shadows.lg};
  }
  
  .icon {
    width: 80px;
    height: 80px;
    background: ${p => p.theme.gradients.primary};
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 2rem;
    margin: 0 auto 20px auto;
    color: white;
  }
  
  h3 {
    margin: 0 0 12px 0;
    color: ${p => p.theme.colors.text};
    font-size: 1.3rem;
  }
  
  p {
    color: ${p => p.theme.colors.mutedText};
    line-height: 1.6;
    margin: 0;
  }
`

const Timeline = styled.div`
  margin-top: 48px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${p => p.theme.gradients.primary};
    transform: translateX(-50%);
    
    @media (max-width: ${p => p.theme.breakpoints.md}) {
      left: 20px;
    }
  }
`

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  margin-bottom: 48px;
  align-items: center;
  
  @media (max-width: ${p => p.theme.breakpoints.md}) {
    grid-template-columns: auto 1fr;
    gap: 20px;
    margin-left: 40px;
  }
  
  .year {
    width: 80px;
    height: 80px;
    background: ${p => p.theme.gradients.primary};
    color: white;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: 1.1rem;
    position: relative;
    z-index: 1;
    
    @media (max-width: ${p => p.theme.breakpoints.md}) {
      width: 60px;
      height: 60px;
      font-size: 0.9rem;
    }
  }
  
  .content {
    background: ${p => p.theme.colors.surface};
    border: 1px solid ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radii.lg};
    padding: 24px;
    box-shadow: ${p => p.theme.shadows.sm};
    
    h4 {
      margin: 0 0 8px 0;
      color: ${p => p.theme.colors.text};
      font-size: 1.2rem;
    }
    
    p {
      color: ${p => p.theme.colors.mutedText};
      line-height: 1.6;
      margin: 0;
    }
  }
  
  &:nth-child(even) {
    .content:first-child {
      order: 2;
    }
    
    @media (max-width: ${p => p.theme.breakpoints.md}) {
      .content:first-child {
        order: unset;
      }
    }
  }
  
  @media (max-width: ${p => p.theme.breakpoints.md}) {
    .content:first-child {
      order: unset;
    }
  }
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 48px;
`

const TeamCard = styled(Card)`
  text-align: center;
  padding: 32px 24px;
  transition: all ${p => p.theme.transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${p => p.theme.shadows.lg};
  }
  
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 20px auto;
    overflow: hidden;
    border: 4px solid ${p => p.theme.colors.border};
  }
  
  h3 {
    margin: 0 0 8px 0;
    color: ${p => p.theme.colors.text};
    font-size: 1.3rem;
  }
  
  .role {
    color: ${p => p.theme.colors.primary};
    font-weight: 600;
    margin-bottom: 12px;
  }
  
  p {
    color: ${p => p.theme.colors.mutedText};
    line-height: 1.6;
    margin: 0;
    font-size: 14px;
  }
`

const StatsSection = styled.section`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 48px 32px;
  margin: 64px 0;
  text-align: center;
  
  h2 {
    margin: 0 0 40px 0;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 32px;
  }
  
  .stat {
    .number {
      font-size: 2.5rem;
      font-weight: 800;
      color: ${p => p.theme.colors.primary};
      margin-bottom: 8px;
      font-family: ${p => p.theme.typography.heading};
    }
    
    .label {
      color: ${p => p.theme.colors.mutedText};
      font-weight: 600;
    }
  }
`

const AwardsSection = styled.section`
  margin: 64px 0;
  
  .awards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-top: 48px;
  }
  
  .award {
    background: ${p => p.theme.colors.surface};
    border: 1px solid ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radii.lg};
    padding: 24px;
    text-align: center;
    transition: all ${p => p.theme.transitions.base};
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${p => p.theme.shadows.md};
    }
    
    .icon {
      font-size: 3rem;
      margin-bottom: 16px;
    }
    
    h4 {
      margin: 0 0 8px 0;
      color: ${p => p.theme.colors.text};
    }
    
    p {
      color: ${p => p.theme.colors.mutedText};
      font-size: 14px;
      line-height: 1.5;
      margin: 0;
    }
  }
`

export default function About() {
  return (
    <Container>
      <Hero>
        <h1>About EsewaMitra</h1>
        <p>
          Empowering individuals and businesses with accessible, transparent, and expert legal services 
          across India. We bridge the gap between complex legal processes and simple solutions.
        </p>
      </Hero>

      <Reveal as={StorySection}>
        <div className="content">
          <h2>Our Story</h2>
          <p>
            Founded in 2019, EsewaMitra emerged from a simple yet powerful vision: to make legal services 
            accessible to every citizen and business in India. Our founders, experienced legal professionals 
            and technology experts, recognized the significant barriers that prevented people from accessing 
            quality legal assistance.
          </p>
          <p>
            What started as a small team of passionate advocates has grown into India's most trusted digital 
            legal services platform, serving over 15,000 satisfied clients across 28 states and union territories.
          </p>
          <div className="highlight">
            <strong>Our Mission:</strong> To democratize legal services by combining expert knowledge with 
            innovative technology, ensuring every Indian has access to quality legal support at transparent, 
            affordable prices.
          </div>
        </div>
        <div>
          <WebImage 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Our Story - Legal Innovation"
            rounded
            shadow
          />
        </div>
      </Reveal>

      <Reveal as={Section}>
        <h2>Our Core Values</h2>
        <p className="subtitle">
          The principles that guide every decision and interaction at EsewaMitra
        </p>
        <ValuesGrid>
          <Reveal as={ValueCard}>
            <div className="icon">🎯</div>
            <h3>Excellence</h3>
            <p>We strive for perfection in every service, ensuring the highest quality legal solutions and client satisfaction.</p>
          </Reveal>
          <Reveal as={ValueCard}>
            <div className="icon">🤝</div>
            <h3>Integrity</h3>
            <p>Honest, transparent communication and ethical practices form the foundation of all our client relationships.</p>
          </Reveal>
          <Reveal as={ValueCard}>
            <div className="icon">💡</div>
            <h3>Innovation</h3>
            <p>Continuously evolving our technology and processes to deliver faster, more efficient legal services.</p>
          </Reveal>
          <Reveal as={ValueCard}>
            <div className="icon">🌟</div>
            <h3>Accessibility</h3>
            <p>Making legal services affordable and available to everyone, regardless of location or background.</p>
          </Reveal>
          <Reveal as={ValueCard}>
            <div className="icon">⚡</div>
            <h3>Efficiency</h3>
            <p>Streamlined processes and expert teams ensure quick turnaround times without compromising quality.</p>
          </Reveal>
          <Reveal as={ValueCard}>
            <div className="icon">🛡️</div>
            <h3>Trust</h3>
            <p>Building lasting relationships through reliable service delivery and complete confidentiality.</p>
          </Reveal>
        </ValuesGrid>
      </Reveal>

      <Reveal as={Section}>
        <h2>Our Journey</h2>
        <p className="subtitle">
          Key milestones in our mission to transform India's legal services landscape
        </p>
        <Timeline>
          <Reveal as={TimelineItem}>
            <div className="content">
              <h4>Platform Launch</h4>
              <p>Launched EsewaMitra with core legal consultation and documentation services, serving our first 100 clients.</p>
            </div>
            <div className="year">2019</div>
            <div></div>
          </Reveal>
          <Reveal as={TimelineItem}>
            <div></div>
            <div className="year">2020</div>
            <div className="content">
              <h4>Digital Expansion</h4>
              <p>Expanded to include GST and business registration services, reaching 1,000+ clients across 10 states.</p>
            </div>
          </Reveal>
          <Reveal as={TimelineItem}>
            <div className="content">
              <h4>Expert Network</h4>
              <p>Built a network of 200+ verified legal experts and launched 24/7 consultation services.</p>
            </div>
            <div className="year">2021</div>
            <div></div>
          </Reveal>
          <Reveal as={TimelineItem}>
            <div></div>
            <div className="year">2022</div>
            <div className="content">
              <h4>National Presence</h4>
              <p>Achieved pan-India coverage with 5,000+ satisfied clients and comprehensive legal service portfolio.</p>
            </div>
          </Reveal>
          <Reveal as={TimelineItem}>
            <div className="content">
              <h4>AI Integration</h4>
              <p>Integrated AI-powered legal assistance and launched instant document generation for faster service delivery.</p>
            </div>
            <div className="year">2023</div>
            <div></div>
          </Reveal>
          <Reveal as={TimelineItem}>
            <div></div>
            <div className="year">2024</div>
            <div className="content">
              <h4>Industry Leadership</h4>
              <p>Crossed 15,000 clients milestone and established partnerships with leading legal institutions across India.</p>
            </div>
          </Reveal>
        </Timeline>
      </Reveal>

      <Reveal as={StatsSection}>
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <div className="stat">
            <div className="number">
              <CountUp from={0} to={15000} duration={2000} formatter={(v) => v.toLocaleString() + '+'} />
            </div>
            <div className="label">Happy Clients</div>
          </div>
          <div className="stat">
            <div className="number">
              <CountUp from={0} to={500} duration={2000} formatter={(v) => v.toString() + '+'} />
            </div>
            <div className="label">Legal Experts</div>
          </div>
          <div className="stat">
            <div className="number">
              <CountUp from={0} to={28} duration={2000} formatter={(v) => v.toString()} />
            </div>
            <div className="label">States Covered</div>
          </div>
          <div className="stat">
            <div className="number">
              <CountUp from={0} to={98} duration={2000} formatter={(v) => v.toString() + '%'} />
            </div>
            <div className="label">Success Rate</div>
          </div>
        </div>
      </Reveal>

      <Reveal as={Section}>
        <h2>Leadership Team</h2>
        <p className="subtitle">
          Meet the experienced professionals driving EsewaMitra's vision and growth
        </p>
        <TeamGrid>
          <Reveal as={TeamCard}>
            <div className="avatar">
              <WebImage 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=240&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Rajesh Kumar - CEO"
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
            <h3>Rajesh Kumar</h3>
            <div className="role">Chief Executive Officer</div>
            <p>
              20+ years in legal technology and business development. Former legal advisor to Fortune 500 companies, 
              passionate about democratizing legal services.
            </p>
          </Reveal>
          <Reveal as={TeamCard}>
            <div className="avatar">
              <WebImage 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Priya Sharma - CTO"
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
            <h3>Priya Sharma</h3>
            <div className="role">Chief Technology Officer</div>
            <p>
              Expert in AI and legal tech with 15+ years at leading technology companies. Spearheads our 
              digital innovation and platform development.
            </p>
          </Reveal>
          <Reveal as={TeamCard}>
            <div className="avatar">
              <WebImage 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=240&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Advocate Amit Patel - CLO"
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
            <h3>Advocate Amit Patel</h3>
            <div className="role">Chief Legal Officer</div>
            <p>
              Senior advocate with 25+ years of practice in corporate and civil law. Leads our legal expert 
              network and ensures service quality standards.
            </p>
          </Reveal>
        </TeamGrid>
      </Reveal>

      <Reveal as={AwardsSection}>
        <h2 style={{textAlign: 'center', marginBottom: '16px'}}>Awards & Recognition</h2>
        <p style={{textAlign: 'center', color: '#486873', marginBottom: '0'}}>
          Acknowledgments of our commitment to excellence in legal services
        </p>
        <div className="awards-grid">
          <div className="award">
            <div className="icon">🏆</div>
            <h4>Best Legal Tech Platform 2023</h4>
            <p>Recognized by Indian Legal Technology Awards for innovation in legal service delivery</p>
          </div>
          <div className="award">
            <div className="icon">⭐</div>
            <h4>Customer Choice Award 2022</h4>
            <p>Voted by clients as the most trusted legal services platform in India</p>
          </div>
          <div className="award">
            <div className="icon">🎖️</div>
            <h4>Excellence in Digital Services</h4>
            <p>Honored by Government of India for contribution to digital legal services ecosystem</p>
          </div>
        </div>
      </Reveal>

      <Reveal as={Section} style={{textAlign: 'center', background: `linear-gradient(135deg, rgba(20,107,102,0.12) 0%, rgba(242,153,74,0.08) 100%)`, padding: '48px 32px', borderRadius: '16px', border: '1px solid #E3EEE9'}}>
        <h2>Ready to Experience the Difference?</h2>
        <p style={{color: '#486873', marginBottom: '24px', fontSize: '1.1rem'}}>
          Join thousands of satisfied clients who trust EsewaMitra for their legal needs
        </p>
        <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Button as={Link} to="/consult" size="lg">Get Free Consultation</Button>
          <Button as={Link} to="/contact" variant="secondary" size="lg">Contact Us</Button>
        </div>
      </Reveal>
    </Container>
  )
} 