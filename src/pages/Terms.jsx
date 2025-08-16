import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui'
import Reveal from '../components/Reveal'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`
  animation: ${fadeInUp} 0.6s ease;
  max-width: 900px;
  margin: 0 auto;
`

const Hero = styled.section`
  background: ${p => p.theme.gradients.hero};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 60px 40px;
  text-align: center;
  margin-bottom: 48px;
  
  h1 {
    font-size: clamp(2.2rem, 4vw, 3rem);
    margin: 0 0 16px 0;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${p => p.theme.colors.mutedText};
    margin: 0 auto 24px auto;
    max-width: 600px;
  }
  
  .last-updated {
    font-size: 14px;
    color: ${p => p.theme.colors.mutedText};
    background: ${p => p.theme.colors.surface};
    padding: 8px 16px;
    border-radius: ${p => p.theme.radii.pill};
    display: inline-block;
    border: 1px solid ${p => p.theme.colors.border};
  }
`

const ContentSection = styled.section`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 40px;
  margin-bottom: 32px;
  box-shadow: ${p => p.theme.shadows.sm};
  
  h2 {
    color: ${p => p.theme.colors.primary};
    margin: 0 0 24px 0;
    font-size: 1.8rem;
    font-weight: 700;
    padding-bottom: 12px;
    border-bottom: 2px solid ${p => p.theme.colors.border};
  }
  
  h3 {
    color: ${p => p.theme.colors.text};
    margin: 24px 0 16px 0;
    font-size: 1.3rem;
    font-weight: 600;
  }
  
  p {
    color: ${p => p.theme.colors.text};
    line-height: 1.7;
    margin: 0 0 16px 0;
    font-size: 1.05rem;
  }
  
  ul, ol {
    margin: 16px 0;
    padding-left: 24px;
    
    li {
      margin: 8px 0;
      line-height: 1.6;
      color: ${p => p.theme.colors.text};
    }
  }
  
  .highlight-box {
    background: rgba(20,107,102,0.08);
    border-left: 4px solid ${p => p.theme.colors.primary};
    padding: 20px;
    margin: 24px 0;
    border-radius: 0 ${p => p.theme.radii.md} ${p => p.theme.radii.md} 0;
    
    strong {
      color: ${p => p.theme.colors.primary};
    }
  }
  
  .warning-box {
    background: rgba(201,130,27,0.08);
    border-left: 4px solid #C9821B;
    padding: 20px;
    margin: 24px 0;
    border-radius: 0 ${p => p.theme.radii.md} ${p => p.theme.radii.md} 0;
    
    strong {
      color: #C9821B;
    }
  }
`

const QuickNav = styled.nav`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 24px;
  margin-bottom: 32px;
  
  h3 {
    margin: 0 0 16px 0;
    color: ${p => p.theme.colors.text};
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 8px;
    
    li {
      a {
        display: block;
        color: ${p => p.theme.colors.primary};
        text-decoration: none;
        padding: 8px 12px;
        border-radius: ${p => p.theme.radii.sm};
        transition: all ${p => p.theme.transitions.base};
        
        &:hover {
          background: ${p => p.theme.colors.border};
          transform: translateX(4px);
        }
      }
    }
  }
`

const ContactCTA = styled.section`
  background: ${p => p.theme.gradients.primary};
  color: white;
  border-radius: ${p => p.theme.radii.lg};
  padding: 40px 32px;
  text-align: center;
  margin: 48px 0;
  
  h3 {
    margin: 0 0 16px 0;
    color: white;
  }
  
  p {
    margin: 0 0 24px 0;
    opacity: 0.9;
    line-height: 1.6;
  }
  
  .cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export default function Terms() {
  return (
    <Container>
      <Hero>
        <h1>Terms & Conditions</h1>
        <p>
          Please read these terms and conditions carefully before using our legal services platform. 
          By accessing or using EsewaMitra, you agree to be bound by these terms.
        </p>
        <div className="last-updated">Last updated: January 15, 2025</div>
      </Hero>

      <Reveal as={QuickNav}>
        <h3>Quick Navigation</h3>
        <ul>
          <li><a href="#acceptance">Acceptance of Terms</a></li>
          <li><a href="#services">Services Description</a></li>
          <li><a href="#user-responsibilities">User Responsibilities</a></li>
          <li><a href="#payments">Payments & Pricing</a></li>
          <li><a href="#attorney-client">Attorney-Client Relationship</a></li>
          <li><a href="#liability">Limitation of Liability</a></li>
          <li><a href="#intellectual-property">Intellectual Property</a></li>
          <li><a href="#privacy">Privacy & Data</a></li>
          <li><a href="#termination">Termination</a></li>
          <li><a href="#changes">Changes to Terms</a></li>
        </ul>
      </Reveal>

      <Reveal as={ContentSection} id="acceptance">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing, browsing, or using the EsewaMitra website, mobile application, or any of our services, 
          you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions 
          and our Privacy Policy.
        </p>
        <div className="highlight-box">
          <strong>Important:</strong> If you do not agree with any part of these terms, you must not use our services.
        </div>
        <p>
          These terms apply to all users of the service, including without limitation users who are browsers, 
          vendors, customers, merchants, and contributors of content.
        </p>
      </Reveal>

      <Reveal as={ContentSection} id="services">
        <h2>2. Description of Services</h2>
        <h3>2.1 Platform Services</h3>
        <p>EsewaMitra provides an online platform that connects users with qualified legal professionals for:</p>
        <ul>
          <li>Legal consultations via audio/video calls</li>
          <li>Document drafting and review services</li>
          <li>Business registration and compliance services</li>
          <li>Property legal services and due diligence</li>
          <li>Intellectual property services</li>
          <li>Legal documentation and templates</li>
        </ul>
        
        <h3>2.2 Service Availability</h3>
        <p>
          While we strive to provide uninterrupted service, we do not guarantee that our platform will be 
          available at all times. We may suspend service for maintenance, updates, or other operational reasons.
        </p>
        
        <div className="warning-box">
          <strong>Disclaimer:</strong> EsewaMitra is a technology platform that facilitates connections between 
          users and legal professionals. We do not practice law or provide legal advice directly.
        </div>
      </Reveal>

      <Reveal as={ContentSection} id="user-responsibilities">
        <h2>3. User Responsibilities</h2>
        <h3>3.1 Account Registration</h3>
        <p>To use certain features of our service, you must create an account and provide accurate information:</p>
        <ul>
          <li>Provide true, accurate, current, and complete information</li>
          <li>Maintain and update your information to keep it accurate</li>
          <li>Keep your password secure and confidential</li>
          <li>Notify us immediately of any unauthorized use of your account</li>
        </ul>
        
        <h3>3.2 Prohibited Activities</h3>
        <p>You agree not to:</p>
        <ul>
          <li>Use the service for any unlawful purpose or in violation of any applicable laws</li>
          <li>Transmit any harmful, offensive, or inappropriate content</li>
          <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
          <li>Interfere with or disrupt the service or servers</li>
          <li>Use automated systems to access the service without permission</li>
        </ul>
      </Reveal>

      <Reveal as={ContentSection} id="payments">
        <h2>4. Payments and Pricing</h2>
        <h3>4.1 Service Fees</h3>
        <p>
          Fees for our services are clearly displayed on our platform before you complete any transaction. 
          All prices are in Indian Rupees (INR) and include applicable taxes unless otherwise stated.
        </p>
        
        <h3>4.2 Payment Terms</h3>
        <ul>
          <li>Payment is required before services are rendered</li>
          <li>We accept major credit cards, debit cards, and digital payment methods</li>
          <li>All payments are processed securely through encrypted payment gateways</li>
          <li>Refunds are subject to our refund policy outlined in section 4.3</li>
        </ul>
        
        <h3>4.3 Refund Policy</h3>
        <div className="highlight-box">
          <strong>Money-Back Guarantee:</strong> We offer a satisfaction guarantee. If you're not satisfied 
          with our service, contact us within 7 days for a full refund, subject to review.
        </div>
      </Reveal>

      <Reveal as={ContentSection} id="attorney-client">
        <h2>5. Attorney-Client Relationship</h2>
        <p>
          <strong>Important Legal Notice:</strong> EsewaMitra is a platform that connects you with independent 
          legal professionals. Any attorney-client relationship is established directly between you and the 
          legal professional you choose to work with, not with EsewaMitra.
        </p>
        <ul>
          <li>We do not guarantee the outcome of any legal matter</li>
          <li>Legal professionals on our platform are independent contractors</li>
          <li>All professional decisions are made by the legal professional, not by EsewaMitra</li>
          <li>Attorney-client privilege applies to your communications with legal professionals</li>
        </ul>
      </Reveal>

      <Reveal as={ContentSection} id="liability">
        <h2>6. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, EsewaMitra and its affiliates, officers, employees, 
          agents, partners, and licensors will not be liable for any indirect, incidental, special, 
          consequential, or punitive damages.
        </p>
        <div className="warning-box">
          <strong>Important:</strong> Our total liability to you for any claim arising from your use of 
          our services will not exceed the amount you paid for the specific service in question.
        </div>
      </Reveal>

      <Reveal as={ContentSection} id="intellectual-property">
        <h2>7. Intellectual Property Rights</h2>
        <h3>7.1 Our Content</h3>
        <p>
          The EsewaMitra platform, including its design, features, functionality, and content, is owned by 
          us and protected by intellectual property laws.
        </p>
        
        <h3>7.2 User Content</h3>
        <p>
          You retain ownership of any content you submit to our platform, but grant us a license to use, 
          display, and distribute such content as necessary to provide our services.
        </p>
      </Reveal>

      <Reveal as={ContentSection} id="privacy">
        <h2>8. Privacy and Data Protection</h2>
        <p>
          Your privacy is important to us. Our collection, use, and protection of your personal information 
          is governed by our Privacy Policy, which is incorporated by reference into these Terms.
        </p>
        <ul>
          <li>We use industry-standard security measures to protect your data</li>
          <li>Your personal information is never sold to third parties</li>
          <li>Legal consultations are confidential and securely encrypted</li>
          <li>You have rights regarding your personal data as outlined in our Privacy Policy</li>
        </ul>
      </Reveal>

      <Reveal as={ContentSection} id="termination">
        <h2>9. Termination</h2>
        <p>
          Either party may terminate your account and access to our services at any time, with or without 
          cause, with or without notice. Upon termination:
        </p>
        <ul>
          <li>Your right to access and use our services will cease immediately</li>
          <li>Any outstanding fees will become immediately due and payable</li>
          <li>We may delete your account and data in accordance with our data retention policy</li>
          <li>Provisions that should survive termination will continue to apply</li>
        </ul>
      </Reveal>

      <Reveal as={ContentSection} id="changes">
        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time. When we make changes:
        </p>
        <ul>
          <li>We will update the "Last updated" date at the top of this page</li>
          <li>Significant changes will be communicated via email or platform notification</li>
          <li>Your continued use of our services constitutes acceptance of the modified terms</li>
          <li>If you disagree with changes, you should discontinue use of our services</li>
        </ul>
        
        <div className="highlight-box">
          <strong>Stay Informed:</strong> We recommend reviewing these terms periodically to stay informed 
          of any updates or changes.
        </div>
      </Reveal>

      <Reveal as={ContactCTA}>
        <h3>Questions About Our Terms?</h3>
        <p>
          If you have any questions about these Terms and Conditions, please don't hesitate to contact us. 
          Our legal team is here to help clarify any concerns.
        </p>
        <div className="cta-buttons">
          <Button as={Link} to="/contact" size="lg" style={{background: 'white', color: '#146B66'}}>
            Contact Our Team
          </Button>
          <Button as={Link} to="/privacy" variant="secondary" size="lg" style={{borderColor: 'white', color: 'white'}}>
            View Privacy Policy
          </Button>
        </div>
      </Reveal>
    </Container>
  )
} 