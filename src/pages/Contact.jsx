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

          <div style={{display: 'grid', gap: '24px'}}>
            <Reveal as={InfoCard}>
              <h3>
                <span className="icon">📞</span>
                Call Us
              </h3>
              <p>Speak directly with our legal experts</p>
              <div className="highlight">+91 98765 43210</div>
              <div className="highlight">+91 87654 32109</div>
              <p style={{fontSize: '12px', marginTop: '8px'}}>Mon-Sat: 9 AM - 8 PM</p>
            </Reveal>

            <Reveal as={InfoCard}>
              <h3>
                <span className="icon">✉️</span>
                Email Us
              </h3>
              <p>Get detailed responses to your queries</p>
              <div className="highlight">support@esewamitra.com</div>
              <div className="highlight">legal@esewamitra.com</div>
              <p style={{fontSize: '12px', marginTop: '8px'}}>Response within 24 hours</p>
            </Reveal>

            <Reveal as={InfoCard}>
              <h3>
                <span className="icon">💬</span>
                Live Chat
              </h3>
              <p>Instant assistance for urgent matters</p>
              <div className="highlight">Available 24/7</div>
              <p style={{fontSize: '12px', marginTop: '8px'}}>Click the chat icon on any page</p>
            </Reveal>
          </div>
        </Grid>
      </Reveal>

      <Reveal as={LocationsSection}>
        <h2>Our Presence</h2>
        <p className="subtitle">
          We serve clients across India with local expertise and national reach
        </p>
        <div className="locations-grid">
          <LocationCard>
            <div className="city-icon">🏢</div>
            <h4>Delhi NCR</h4>
            <p>Our headquarters with full-service legal support for North India region</p>
            <div className="contact-info">
              <div>📍 Connaught Place, New Delhi</div>
              <div>📞 +91 11 4567 8900</div>
            </div>
          </LocationCard>
          
          <LocationCard>
            <div className="city-icon">🌆</div>
            <h4>Mumbai</h4>
            <p>Corporate legal services hub serving Western India business community</p>
            <div className="contact-info">
              <div>📍 Bandra Kurla Complex, Mumbai</div>
              <div>📞 +91 22 6789 0123</div>
            </div>
          </LocationCard>
          
          <LocationCard>
            <div className="city-icon">🏙️</div>
            <h4>Bangalore</h4>
            <p>Technology and startup legal services center for South India</p>
            <div className="contact-info">
              <div>📍 Koramangala, Bangalore</div>
              <div>📞 +91 80 8901 2345</div>
            </div>
          </LocationCard>
          
          <LocationCard>
            <div className="city-icon">🌟</div>
            <h4>Pan-India</h4>
            <p>Digital services available across all 28 states and 8 union territories</p>
            <div className="contact-info">
              <div>🌐 Online Platform</div>
              <div>📱 Mobile App Available</div>
            </div>
          </LocationCard>
        </div>
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