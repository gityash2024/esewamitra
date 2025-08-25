import styled from 'styled-components'
import { Button, Grid, Input, TextArea, Card, WebImage } from '../components/ui'
import Reveal from '../components/Reveal'

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
    margin: 0 auto;
    max-width: 600px;
  }
`

const ContactSection = styled.section`
  margin: 48px 0;
`

const FormCard = styled(Card)`
  padding: 40px 32px;
`

const Field = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${p => p.theme.colors.text};
`

const Submit = styled(Button)`
  width: 100%;
  margin-top: 8px;
`

const InfoCard = styled(Card)`
  padding: 32px 24px;
  height: 100%;
  
  h3 {
    margin: 0 0 16px 0;
    color: ${p => p.theme.colors.text};
    display: flex;
    align-items: center;
    gap: 12px;
    
    .icon {
      width: 40px;
      height: 40px;
      background: ${p => p.theme.gradients.primary};
      color: white;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-size: 1.2rem;
    }
  }
  
  p {
    color: ${p => p.theme.colors.mutedText};
    line-height: 1.6;
    margin: 0 0 12px 0;
  }
  
  .highlight {
    color: ${p => p.theme.colors.primary};
    font-weight: 600;
  }
`

const LocationsSection = styled.section`
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
  
  .locations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
  }
`

const LocationCard = styled(Card)`
  padding: 32px 24px;
  text-align: center;
  transition: all ${p => p.theme.transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${p => p.theme.shadows.lg};
  }
  
  .city-icon {
    width: 80px;
    height: 80px;
    background: ${p => p.theme.gradients.primary};
    color: white;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 2rem;
    margin: 0 auto 20px auto;
  }
  
  h4 {
    margin: 0 0 12px 0;
    color: ${p => p.theme.colors.text};
    font-size: 1.3rem;
  }
  
  p {
    color: ${p => p.theme.colors.mutedText};
    line-height: 1.6;
    margin: 0 0 16px 0;
    font-size: 14px;
  }
  
  .contact-info {
    padding-top: 16px;
    border-top: 1px solid ${p => p.theme.colors.border};
    
    div {
      color: ${p => p.theme.colors.primary};
      font-weight: 600;
      font-size: 14px;
      margin: 4px 0;
    }
  }
`

const FAQSection = styled.section`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 48px 32px;
  margin: 64px 0;
  
  h2 {
    text-align: center;
    margin: 0 0 40px 0;
  }
  
  .faq-grid {
    display: grid;
    gap: 24px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .faq-item {
    background: ${p => p.theme.colors.background};
    border: 1px solid ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radii.md};
    padding: 20px;
    
    h4 {
      margin: 0 0 8px 0;
      color: ${p => p.theme.colors.text};
      font-size: 16px;
    }
    
    p {
      margin: 0;
      color: ${p => p.theme.colors.mutedText};
      line-height: 1.6;
      font-size: 14px;
    }
  }
`

const ContactInfo = styled.div`
  display: grid;
  gap: 24px;
  margin-bottom: 48px;
`

const OfficeSection = styled.div`
  margin: 48px 0;
  
  h2 {
    text-align: center;
    margin-bottom: 32px;
    color: ${p => p.theme.colors.text};
  }
`

const OfficeCard = styled.div`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 32px;
  box-shadow: ${p => p.theme.shadows.md};
  
  .office-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    
    h3 {
      color: ${p => p.theme.colors.primary};
      margin: 0;
    }
    
    .status {
      background: ${p => p.theme.colors.success};
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }
  }
  
  .office-details {
    margin-bottom: 24px;
    
    p {
      margin: 8px 0;
      color: ${p => p.theme.colors.text};
      
      strong {
        color: ${p => p.theme.colors.primary};
      }
    }
  }
  
  .office-features {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    
    span {
      background: ${p => p.theme.colors.background};
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      color: ${p => p.theme.colors.mutedText};
      border: 1px solid ${p => p.theme.colors.border};
    }
  }
`

export default function Contact() {
  return (
    <>
      <Hero>
        <h1>Get in Touch</h1>
        <p>
          Have questions about our legal services? Need expert guidance? We're here to help you 
          navigate your legal needs with confidence and clarity.
        </p>
      </Hero>

      <Reveal as={ContactSection}>
        <Grid cols="1.2fr 1fr" colsLg="1fr">
          <FormCard>
            <h2 style={{margin: '0 0 24px 0', color: '#0E1B22'}}>Send us a Message</h2>
            <form>
              <Field>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" type="text" placeholder="Enter your full name" required />
              </Field>
              <Field>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </Field>
              <Field>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </Field>
              <Field>
                <Label htmlFor="service">Service Interest</Label>
                <Input id="service" type="text" placeholder="e.g. GST Registration, Legal Consultation" />
              </Field>
              <Field>
                <Label htmlFor="message">Message *</Label>
                <TextArea 
                  id="message" 
                  placeholder="Tell us about your legal requirements or questions" 
                  rows="5"
                  required 
                />
              </Field>
              <Submit type="submit" size="lg">Send Message</Submit>
            </form>
          </FormCard>

          <ContactInfo>
            <Reveal>
              <InfoCard>
                <div className="icon">📞</div>
                <h3>Call Us</h3>
                <p>Available 24/7 for urgent legal matters</p>
                <a href="tel:+917691852665">+91 7691852665</a>
              </InfoCard>
            </Reveal>
            
            <Reveal>
              <InfoCard>
                <div className="icon">✉️</div>
                <h3>Email Us</h3>
                <p>Get detailed responses within 2 hours</p>
                <a href="mailto:esewamitra@gmail.com">esewamitra@gmail.com</a>
              </InfoCard>
            </Reveal>
            
            <Reveal>
              <InfoCard>
                <div className="icon">💬</div>
                <h3>Live Chat</h3>
                <p>Instant support from legal experts</p>
                <span>Available 09 AM to 07 PM</span>
              </InfoCard>
            </Reveal>
          </ContactInfo>

          <OfficeSection>
            <Reveal>
              <h2>Our Office</h2>
              <OfficeCard>
                <div className="office-header">
                  <h3>Jaipur Head Office</h3>
                  <span className="status">Open Now</span>
                </div>
                <div className="office-details">
                  <p><strong>Address:</strong> 185 Ganga Sagar Scheme, Vaishali Nagar, Jaipur 302021</p>
                  <p><strong>Phone:</strong> +91 7691852665</p>
                  <p><strong>Email:</strong> esewamitra@gmail.com</p>
                  <p><strong>Timing:</strong> 09 AM to 07 PM, Monday to Saturday</p>
                </div>
                <div className="office-features">
                  <span>🚗 Free Parking</span>
                  <span>♿ Wheelchair Accessible</span>
                  <span>📱 Digital Services</span>
                </div>
              </OfficeCard>
            </Reveal>
          </OfficeSection>
        </Grid>
      </Reveal>

      <Reveal as={FAQSection}>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>How quickly can I get a consultation?</h4>
            <p>We offer instant consultations 24/7. For scheduled calls, you can book a slot within the next 2-4 hours with our available experts.</p>
          </div>
          
          <div className="faq-item">
            <h4>What are your service charges?</h4>
            <p>Our pricing is transparent with no hidden costs. Basic consultation starts at ₹999. Complex services are quoted upfront after initial assessment.</p>
          </div>
          
          <div className="faq-item">
            <h4>Do you provide services across India?</h4>
            <p>Yes, we serve clients across all states and union territories in India through our digital platform and local partner network.</p>
          </div>
          
          <div className="faq-item">
            <h4>Are your lawyers verified and qualified?</h4>
            <p>All our legal experts are thoroughly verified with valid Bar Council registrations, relevant experience, and continuous quality monitoring.</p>
          </div>
          
          <div className="faq-item">
            <h4>How secure is my information?</h4>
            <p>We use enterprise-grade security with 256-bit encryption. All consultations and documents are protected under strict confidentiality protocols.</p>
          </div>
          
          <div className="faq-item">
            <h4>What if I'm not satisfied with the service?</h4>
            <p>We offer a money-back guarantee if you're not satisfied. Our customer success team works to resolve any concerns promptly.</p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" style={{textAlign: 'center', background: 'linear-gradient(135deg, rgba(20,107,102,0.12) 0%, rgba(242,153,74,0.08) 100%)', padding: '48px 32px', borderRadius: '16px', border: '1px solid #E3EEE9', margin: '64px 0'}}>
        <h2>Ready to Get Started?</h2>
        <p style={{color: '#486873', marginBottom: '24px', fontSize: '1.1rem'}}>
          Don't let legal complexities hold you back. Get expert guidance today.
        </p>
        <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Button size="lg">Get Free Consultation</Button>
          <Button variant="secondary" size="lg">Call Now</Button>
        </div>
      </Reveal>
    </>
  )
} 