import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`
  animation: ${fadeInUp} 0.6s ease;
`

const Hero = styled.section`
  background: linear-gradient(135deg, rgba(11,91,138,0.08) 0%, rgba(230,138,0,0.05) 100%);
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 60px 40px;
  text-align: center;
  margin-bottom: 40px;
  
  h1 {
    margin: 0 0 16px 0;
    font-size: 42px;
    color: ${p => p.theme.colors.text};
    font-weight: 800;
  }
  
  p {
    margin: 0 0 24px 0;
    font-size: 18px;
    color: ${p => p.theme.colors.mutedText};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`

const CTAButton = styled(Link)`
  display: inline-block;
  background: ${p => p.theme.colors.primary};
  color: white;
  padding: 16px 32px;
  border-radius: ${p => p.theme.radii.pill};
  font-weight: 600;
  font-size: 18px;
  transition: all 0.3s ease;
  &:hover {
    background: ${p => p.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

const MainContent = styled.div`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 40px;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const PricingCard = styled.div`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 32px 24px;
  text-align: center;
  
  h3 {
    margin: 0 0 16px 0;
    color: ${p => p.theme.colors.text};
  }
  
  .price {
    font-size: 36px;
    font-weight: 800;
    color: ${p => p.theme.colors.primary};
    margin: 0 0 8px 0;
  }
  
  .duration {
    color: ${p => p.theme.colors.mutedText};
    margin: 0 0 24px 0;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
    text-align: left;
    
    li {
      padding: 8px 0;
      color: ${p => p.theme.colors.text};
      border-bottom: 1px solid ${p => p.theme.colors.border};
      
      &:last-child {
        border-bottom: none;
      }
      
      &::before {
        content: '✓';
        color: ${p => p.theme.colors.success};
        font-weight: bold;
        margin-right: 8px;
      }
    }
  }
`

const ProcessCard = styled.div`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 24px;
  
  h3 {
    margin: 0 0 16px 0;
    color: ${p => p.theme.colors.text};
  }
  
  .steps {
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    .step {
      display: flex;
      align-items: center;
      gap: 12px;
      
      .number {
        width: 32px;
        height: 32px;
        background: ${p => p.theme.colors.primary};
        color: white;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-weight: 600;
        font-size: 14px;
      }
      
      .text {
        color: ${p => p.theme.colors.text};
      }
    }
  }
`

const Section = styled.section`
  margin: 40px 0;
  
  h2 {
    margin: 0 0 24px 0;
    color: ${p => p.theme.colors.text};
    font-size: 28px;
    font-weight: 700;
  }
  
  h3 {
    margin: 24px 0 12px 0;
    color: ${p => p.theme.colors.text};
    font-size: 20px;
    font-weight: 600;
  }
  
  p {
    margin: 0 0 16px 0;
    color: ${p => p.theme.colors.text};
    line-height: 1.6;
  }
  
  ul {
    margin: 16px 0;
    padding-left: 24px;
    
    li {
      margin: 8px 0;
      color: ${p => p.theme.colors.text};
      line-height: 1.6;
    }
  }
`

const SpecialtyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 24px 0;
  
  @media (max-width: ${p => p.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const SpecialtyCard = styled.div`
  background: rgba(11,91,138,0.05);
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.md};
  padding: 20px;
  text-align: center;
  
  h4 {
    margin: 0 0 8px 0;
    color: ${p => p.theme.colors.primary};
    font-weight: 600;
  }
  
  p {
    margin: 0;
    color: ${p => p.theme.colors.mutedText};
    font-size: 14px;
  }
`

export default function Consultation() {
  return (
    <Container>
      <Hero>
        <h1>Expert Legal Consultation</h1>
        <p>
          Connect with verified legal experts instantly. Get professional advice on any legal matter 
          through secure audio/video calls, available 24/7 across India.
        </p>
        <CTAButton to="/consult">Book Consultation Now</CTAButton>
      </Hero>

      <ContentGrid>
        <MainContent>
          <Section>
            <h2>Comprehensive Legal Guidance</h2>
            <p>
              Our legal consultation service connects you with experienced lawyers across various specializations. 
              Whether you need quick advice or detailed guidance on complex legal matters, our experts are here to help.
            </p>
            
            <h3>What You Get</h3>
            <ul>
              <li>Instant connection with verified lawyers</li>
              <li>Secure audio/video consultation</li>
              <li>Written summary of advice provided</li>
              <li>Follow-up support if needed</li>
              <li>Complete confidentiality guaranteed</li>
              <li>Affordable transparent pricing</li>
            </ul>

            <h3>Legal Specializations Available</h3>
            <SpecialtyGrid>
              <SpecialtyCard>
                <h4>Family Law</h4>
                <p>Divorce, child custody, marriage, adoption</p>
              </SpecialtyCard>
              <SpecialtyCard>
                <h4>Property Law</h4>
                <p>Real estate, property disputes, documentation</p>
              </SpecialtyCard>
              <SpecialtyCard>
                <h4>Corporate Law</h4>
                <p>Business formation, contracts, compliance</p>
              </SpecialtyCard>
              <SpecialtyCard>
                <h4>Criminal Law</h4>
                <p>Criminal cases, bail, legal representation</p>
              </SpecialtyCard>
              <SpecialtyCard>
                <h4>Labour Law</h4>
                <p>Employment issues, workplace disputes</p>
              </SpecialtyCard>
              <SpecialtyCard>
                <h4>Consumer Law</h4>
                <p>Consumer complaints, product defects</p>
              </SpecialtyCard>
            </SpecialtyGrid>

            <h3>Why Choose Our Legal Consultation?</h3>
            <ul>
              <li><strong>Verified Experts:</strong> All lawyers are verified with valid bar council registration</li>
              <li><strong>Instant Access:</strong> Connect within 2 minutes, available 24/7</li>
              <li><strong>Multiple Languages:</strong> Consultation available in Hindi, English, and regional languages</li>
              <li><strong>Secure Platform:</strong> End-to-end encrypted calls ensuring complete privacy</li>
              <li><strong>Affordable Rates:</strong> Transparent pricing starting from ₹299</li>
              <li><strong>Expert Matching:</strong> Automatically matched with relevant specialization</li>
            </ul>

            <h3>Common Legal Questions We Handle</h3>
            <ul>
              <li>Property registration and documentation queries</li>
              <li>Divorce and family law matters</li>
              <li>Business registration and compliance</li>
              <li>Employment and labor law issues</li>
              <li>Consumer complaint procedures</li>
              <li>Criminal law consultation and bail</li>
              <li>Intellectual property matters</li>
              <li>Tax and financial legal advice</li>
            </ul>
          </Section>
        </MainContent>

        <Sidebar>
          <PricingCard>
            <h3>Quick Consultation</h3>
            <div className="price">₹299</div>
            <div className="duration">15 minutes</div>
            <ul>
              <li>Instant lawyer connection</li>
              <li>Audio/Video call</li>
              <li>Basic legal advice</li>
              <li>Written summary</li>
            </ul>
            <CTAButton to="/consult">Book Now</CTAButton>
          </PricingCard>

          <PricingCard>
            <h3>Detailed Consultation</h3>
            <div className="price">₹799</div>
            <div className="duration">45 minutes</div>
            <ul>
              <li>In-depth case analysis</li>
              <li>Document review</li>
              <li>Strategy planning</li>
              <li>Follow-up support</li>
              <li>Written legal opinion</li>
            </ul>
            <CTAButton to="/consult">Book Now</CTAButton>
          </PricingCard>

          <ProcessCard>
            <h3>How It Works</h3>
            <div className="steps">
              <div className="step">
                <div className="number">1</div>
                <div className="text">Select consultation type</div>
              </div>
              <div className="step">
                <div className="number">2</div>
                <div className="text">Provide case details</div>
              </div>
              <div className="step">
                <div className="number">3</div>
                <div className="text">Connect with expert lawyer</div>
              </div>
              <div className="step">
                <div className="number">4</div>
                <div className="text">Get professional advice</div>
              </div>
              <div className="step">
                <div className="number">5</div>
                <div className="text">Receive written summary</div>
              </div>
            </div>
          </ProcessCard>
        </Sidebar>
      </ContentGrid>
    </Container>
  )
} 