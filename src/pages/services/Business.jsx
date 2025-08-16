import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, Card, Grid, WebImage } from '../../components/ui'
import Reveal from '../../components/Reveal'

const Hero = styled.section`
  background: ${p => p.theme.gradients.hero};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 60px 40px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 48px;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 40px 24px;
  }
  
  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin: 0 0 16px 0;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${p => p.theme.colors.mutedText};
    margin: 0 0 24px 0;
  }
  
  .highlights {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 16px;
    
    @media (max-width: ${p => p.theme.breakpoints.lg}) {
      justify-content: center;
    }
  }
  
  .highlight {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${p => p.theme.colors.primary};
    font-weight: 600;
    font-size: 14px;
  }
`

const ServiceSection = styled.section`
  margin: 64px 0;
  
  h2 {
    text-align: center;
    margin: 0 0 16px 0;
    font-size: 2.2rem;
  }
  
  .subtitle {
    text-align: center;
    color: ${p => p.theme.colors.mutedText};
    margin: 0 0 48px 0;
    font-size: 1.1rem;
  }
`

const ServiceCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all ${p => p.theme.transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${p => p.theme.shadows.lg};
  }
  
  .icon {
    width: 60px;
    height: 60px;
    background: ${p => p.theme.gradients.primary};
    border-radius: ${p => p.theme.radii.md};
    display: grid;
    place-items: center;
    font-size: 24px;
    margin-bottom: 8px;
  }
  
  h3 {
    margin: 0 0 8px 0;
    color: ${p => p.theme.colors.text};
  }
  
  p {
    color: ${p => p.theme.colors.mutedText};
    line-height: 1.6;
    flex-grow: 1;
    margin: 0 0 16px 0;
  }
  
  .features {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;
    
    li {
      padding: 4px 0;
      color: ${p => p.theme.colors.mutedText};
      font-size: 14px;
      
      &::before {
        content: '✓';
        color: ${p => p.theme.colors.primary};
        font-weight: bold;
        margin-right: 8px;
      }
    }
  }
  
  .price {
    color: ${p => p.theme.colors.accent};
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 16px;
  }
`

const ProcessSection = styled.section`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 48px 32px;
  margin: 64px 0;
  
  h2 {
    text-align: center;
    margin: 0 0 40px 0;
  }
  
  .steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 32px;
    margin-top: 32px;
  }
  
  .step {
    text-align: center;
    
    .step-number {
      width: 60px;
      height: 60px;
      background: ${p => p.theme.gradients.primary};
      color: white;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-weight: 700;
      font-size: 1.2rem;
      margin: 0 auto 16px auto;
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

const WhyChooseSection = styled.section`
  margin: 64px 0;
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 40px;
  }
  
  .feature {
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
      font-size: 2.5rem;
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

const CTASection = styled.section`
  background: ${p => p.theme.gradients.primary};
  color: white;
  border-radius: ${p => p.theme.radii.lg};
  padding: 48px 32px;
  text-align: center;
  margin: 64px 0;
  
  h2 {
    margin: 0 0 16px 0;
    color: white;
  }
  
  p {
    margin: 0 0 24px 0;
    font-size: 1.1rem;
    opacity: 0.9;
  }
  
  .cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export default function Business() {
  return (
    <>
      <Hero>
        <div>
          <h1>Business Legal Services</h1>
          <p>
            Comprehensive legal support for businesses of all sizes. From startup formation to ongoing compliance, 
            we provide expert guidance to help your business thrive in the competitive market.
          </p>
          <div className="highlights">
            <div className="highlight">
              <span>⚡</span> Quick Setup
            </div>
            <div className="highlight">
              <span>🛡️</span> Full Compliance
            </div>
            <div className="highlight">
              <span>💼</span> Expert Support
            </div>
          </div>
        </div>
        <div>
          <WebImage 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Business Legal Services"
            rounded
            shadow
            priority
          />
        </div>
      </Hero>

      <Reveal as={ServiceSection}>
        <h2>Our Business Legal Services</h2>
        <p className="subtitle">
          End-to-end legal solutions designed to protect and grow your business
        </p>
        <Grid cols="repeat(auto-fit, minmax(320px, 1fr))">
          <Reveal as={ServiceCard}>
            <div className="icon">🏢</div>
            <h3>Company Formation</h3>
            <p>Complete business registration including Private Limited, LLP, Partnership, and One Person Company formation.</p>
            <ul className="features">
              <li>Name reservation and approval</li>
              <li>MOA/AOA drafting</li>
              <li>Digital signature certificates</li>
              <li>Complete incorporation process</li>
            </ul>
            <div className="price">Starting from ₹9,999</div>
            <Button as={Link} to="/consult">Get Started</Button>
          </Reveal>

          <Reveal as={ServiceCard}>
            <div className="icon">📋</div>
            <h3>Legal Compliance</h3>
            <p>Ongoing compliance management to ensure your business meets all regulatory requirements.</p>
            <ul className="features">
              <li>Annual return filing</li>
              <li>Board meeting compliance</li>
              <li>Regulatory updates</li>
              <li>Statutory filings</li>
            </ul>
            <div className="price">Starting from ₹5,999/year</div>
            <Button as={Link} to="/consult">Learn More</Button>
          </Reveal>

          <Reveal as={ServiceCard}>
            <div className="icon">📄</div>
            <h3>Contract Management</h3>
            <p>Professional drafting and review of business contracts, agreements, and legal documents.</p>
            <ul className="features">
              <li>Service agreements</li>
              <li>Employment contracts</li>
              <li>Non-disclosure agreements</li>
              <li>Partnership agreements</li>
            </ul>
            <div className="price">Starting from ₹2,999</div>
            <Button as={Link} to="/consult">Order Now</Button>
          </Reveal>

          <Reveal as={ServiceCard}>
            <div className="icon">⚖️</div>
            <h3>Dispute Resolution</h3>
            <p>Expert legal representation for business disputes, litigation, and alternative dispute resolution.</p>
            <ul className="features">
              <li>Commercial litigation</li>
              <li>Arbitration services</li>
              <li>Mediation support</li>
              <li>Recovery proceedings</li>
            </ul>
            <div className="price">Starting from ₹15,999</div>
            <Button as={Link} to="/consult">Consult Now</Button>
          </Reveal>

          <Reveal as={ServiceCard}>
            <div className="icon">🔐</div>
            <h3>Intellectual Property</h3>
            <p>Protect your business assets with comprehensive IP services including trademarks, copyrights, and patents.</p>
            <ul className="features">
              <li>Trademark registration</li>
              <li>Copyright protection</li>
              <li>Patent filing</li>
              <li>IP portfolio management</li>
            </ul>
            <div className="price">Starting from ₹6,999</div>
            <Button as={Link} to="/consult">Protect Now</Button>
          </Reveal>

          <Reveal as={ServiceCard}>
            <div className="icon">👥</div>
            <h3>Employment Law</h3>
            <p>Comprehensive employment law services to manage your workforce and ensure legal compliance.</p>
            <ul className="features">
              <li>Employment policies</li>
              <li>HR compliance</li>
              <li>Labor law advisory</li>
              <li>Employee documentation</li>
            </ul>
            <div className="price">Starting from ₹4,999</div>
            <Button as={Link} to="/consult">Get Support</Button>
          </Reveal>
        </Grid>
      </Reveal>

      <Reveal as={ProcessSection}>
        <h2>Our Business Setup Process</h2>
        <p style={{textAlign: 'center', color: '#486873', marginBottom: '0'}}>
          Simple, transparent, and efficient process to get your business legally compliant
        </p>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h4>Business Consultation</h4>
            <p>Free consultation to understand your business needs and recommend the best legal structure</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h4>Documentation</h4>
            <p>We prepare and file all necessary documents with relevant authorities</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h4>Compliance Setup</h4>
            <p>Establish ongoing compliance framework and statutory requirements</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h4>Ongoing Support</h4>
            <p>Continuous legal support and compliance management for your business growth</p>
          </div>
        </div>
      </Reveal>

      <Reveal as={WhyChooseSection}>
        <h2 style={{textAlign: 'center', marginBottom: '16px'}}>Why Choose EsewaMitra for Business Legal?</h2>
        <p style={{textAlign: 'center', color: '#486873', marginBottom: '0'}}>
          Your trusted partner for comprehensive business legal solutions
        </p>
        <div className="features-grid">
          <div className="feature">
            <div className="icon">🎯</div>
            <h4>Expert Team</h4>
            <p>Specialized business lawyers with extensive experience across industries</p>
          </div>
          <div className="feature">
            <div className="icon">💰</div>
            <h4>Cost Effective</h4>
            <p>Transparent pricing with no hidden costs and value-driven service packages</p>
          </div>
          <div className="feature">
            <div className="icon">⚡</div>
            <h4>Fast Turnaround</h4>
            <p>Quick processing with real-time updates and priority handling</p>
          </div>
          <div className="feature">
            <div className="icon">🔒</div>
            <h4>Confidential</h4>
            <p>Complete confidentiality and secure handling of all business information</p>
          </div>
          <div className="feature">
            <div className="icon">📱</div>
            <h4>Digital Platform</h4>
            <p>Easy online tracking, document management, and communication</p>
          </div>
          <div className="feature">
            <div className="icon">✅</div>
            <h4>Guaranteed Results</h4>
            <p>Success guarantee with money-back policy and complete satisfaction</p>
          </div>
        </div>
      </Reveal>

      <Reveal as={CTASection}>
        <h2>Ready to Legally Secure Your Business?</h2>
        <p>
          Join thousands of businesses that trust EsewaMitra for their legal needs. 
          Get expert guidance and complete peace of mind.
        </p>
        <div className="cta-buttons">
          <Button as={Link} to="/consult" size="lg" style={{background: 'white', color: '#146B66'}}>
            Get Free Consultation
          </Button>
          <Button as={Link} to="/contact" variant="secondary" size="lg" style={{borderColor: 'white', color: 'white'}}>
            Contact Us
          </Button>
        </div>
      </Reveal>
    </>
  )
} 