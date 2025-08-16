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
    max-width: 700px;
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
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.lg};
  padding: 32px 24px;
  text-align: center;
  
  h3 {
    margin: 0 0 16px 0;
    color: ${p => p.theme.colors.text};
    font-size: 24px;
  }
  
  .price {
    font-size: 42px;
    font-weight: 800;
    color: ${p => p.theme.colors.accent};
    margin: 0 0 8px 0;
  }
  
  .original-price {
    text-decoration: line-through;
    color: ${p => p.theme.colors.mutedText};
    font-size: 18px;
    margin: 0 0 16px 0;
  }
  
  .features {
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

const InfoCard = styled.div`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 24px;
  
  h3 {
    margin: 0 0 16px 0;
    color: ${p => p.theme.colors.text};
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    .step {
      display: flex;
      align-items: center;
      gap: 12px;
      
      .day {
        min-width: 60px;
        padding: 8px 12px;
        background: ${p => p.theme.colors.primary};
        color: white;
        border-radius: ${p => p.theme.radii.sm};
        font-weight: 600;
        font-size: 12px;
        text-align: center;
      }
      
      .text {
        color: ${p => p.theme.colors.text};
        font-size: 14px;
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

const RequirementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 24px 0;
  
  @media (max-width: ${p => p.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const RequirementCard = styled.div`
  background: rgba(11,91,138,0.05);
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.md};
  padding: 20px;
  
  h4 {
    margin: 0 0 12px 0;
    color: ${p => p.theme.colors.primary};
    font-weight: 600;
    font-size: 16px;
  }
  
  ul {
    margin: 0;
    padding-left: 16px;
    
    li {
      margin: 4px 0;
      color: ${p => p.theme.colors.text};
      font-size: 14px;
    }
  }
`

const HighlightBox = styled.div`
  background: rgba(230,138,0,0.1);
  border: 1px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.md};
  padding: 20px;
  margin: 24px 0;
  
  h4 {
    margin: 0 0 12px 0;
    color: ${p => p.theme.colors.accent};
    font-weight: 600;
  }
  
  p {
    margin: 0;
    color: ${p => p.theme.colors.text};
  }
`

export default function GST() {
  return (
    <Container>
      <Hero>
        <h1>GST Registration Services</h1>
        <p>
          Fast, hassle-free GST registration with expert guidance. Get your business GST-compliant 
          in just 3-5 working days with complete documentation support and ongoing compliance assistance.
        </p>
        <CTAButton to="/consult">Start GST Registration</CTAButton>
      </Hero>

      <ContentGrid>
        <MainContent>
          <Section>
            <h2>Complete GST Registration Solution</h2>
            <p>
              Goods and Services Tax (GST) registration is mandatory for businesses with annual turnover 
              exceeding ₹40 lakhs (₹20 lakhs for special category states). Our expert team ensures quick, 
              accurate registration with full compliance support.
            </p>

            <HighlightBox>
              <h4>🚀 Limited Time Offer</h4>
              <p>
                Get GST registration completed in just 24-48 hours with our express service. 
                Includes priority processing and dedicated expert support.
              </p>
            </HighlightBox>

            <h3>GST Registration Requirements</h3>
            <RequirementsGrid>
              <RequirementCard>
                <h4>Individual/Proprietorship</h4>
                <ul>
                  <li>PAN Card</li>
                  <li>Aadhaar Card</li>
                  <li>Business address proof</li>
                  <li>Bank account details</li>
                  <li>Business registration certificate</li>
                </ul>
              </RequirementCard>
              
              <RequirementCard>
                <h4>Partnership Firm</h4>
                <ul>
                  <li>Partnership deed</li>
                  <li>PAN cards of all partners</li>
                  <li>Address proof of business</li>
                  <li>Bank account details</li>
                  <li>Authorization letter</li>
                </ul>
              </RequirementCard>
              
              <RequirementCard>
                <h4>Private Limited Company</h4>
                <ul>
                  <li>Certificate of incorporation</li>
                  <li>MOA & AOA</li>
                  <li>Director details and PAN</li>
                  <li>Registered office proof</li>
                  <li>Board resolution</li>
                </ul>
              </RequirementCard>
              
              <RequirementCard>
                <h4>LLP</h4>
                <ul>
                  <li>LLP agreement</li>
                  <li>Certificate of incorporation</li>
                  <li>Designated partner details</li>
                  <li>Office address proof</li>
                  <li>Authorization letter</li>
                </ul>
              </RequirementCard>
            </RequirementsGrid>

            <h3>Benefits of GST Registration</h3>
            <ul>
              <li><strong>Legal Compliance:</strong> Mandatory for businesses above turnover threshold</li>
              <li><strong>Input Tax Credit:</strong> Claim credit for taxes paid on purchases</li>
              <li><strong>Business Credibility:</strong> Enhanced trust with customers and suppliers</li>
              <li><strong>National Market Access:</strong> Sell across India without restrictions</li>
              <li><strong>Digital Transactions:</strong> Simplified online tax filing and payments</li>
              <li><strong>Government Tenders:</strong> Eligibility for government contracts</li>
            </ul>

            <h3>GST Registration Process</h3>
            <p>Our streamlined process ensures quick and accurate registration:</p>
            <ul>
              <li><strong>Document Collection:</strong> We help gather all required documents</li>
              <li><strong>Application Filing:</strong> Expert filing on GST portal with accuracy</li>
              <li><strong>ARN Generation:</strong> Receive Application Reference Number instantly</li>
              <li><strong>Verification:</strong> Government verification and processing</li>
              <li><strong>GSTIN Issuance:</strong> Receive your GST identification number</li>
              <li><strong>Certificate Delivery:</strong> Download and physical copy provided</li>
            </ul>

            <h3>Post-Registration Support</h3>
            <ul>
              <li>Monthly GST return filing guidance</li>
              <li>Invoice format and compliance training</li>
              <li>Tax calculation and payment assistance</li>
              <li>Input tax credit optimization</li>
              <li>GST audit and assessment support</li>
              <li>Amendment and modification services</li>
            </ul>

            <h3>Why Choose EsewaMitra for GST Registration?</h3>
            <ul>
              <li><strong>Expert Team:</strong> Certified CA and tax professionals</li>
              <li><strong>Fast Processing:</strong> Registration completed in 3-5 working days</li>
              <li><strong>100% Accuracy:</strong> Zero rejection guarantee with expert filing</li>
              <li><strong>Complete Support:</strong> End-to-end assistance and post-registration help</li>
              <li><strong>Transparent Pricing:</strong> No hidden costs, clear pricing structure</li>
              <li><strong>Digital Process:</strong> Completely online with real-time tracking</li>
            </ul>
          </Section>
        </MainContent>

        <Sidebar>
          <PricingCard>
            <h3>GST Registration</h3>
            <div className="price">₹1,499</div>
            <div className="original-price">₹2,999</div>
            <ul className="features">
              <li>Complete application filing</li>
              <li>Document verification</li>
              <li>Expert consultation</li>
              <li>GSTIN certificate</li>
              <li>3-month compliance support</li>
              <li>100% money-back guarantee</li>
            </ul>
            <CTAButton to="/consult">Register Now</CTAButton>
          </PricingCard>

          <InfoCard>
            <h3>⏱️ Processing Timeline</h3>
            <div className="timeline">
              <div className="step">
                <div className="day">Day 1</div>
                <div className="text">Document collection & verification</div>
              </div>
              <div className="step">
                <div className="day">Day 2</div>
                <div className="text">Application filing on GST portal</div>
              </div>
              <div className="step">
                <div className="day">Day 3-5</div>
                <div className="text">Government processing & verification</div>
              </div>
              <div className="step">
                <div className="day">Day 5-7</div>
                <div className="text">GSTIN issued & certificate delivery</div>
              </div>
            </div>
          </InfoCard>

          <InfoCard>
            <h3>📞 Need Help?</h3>
            <p style={{margin: '0 0 16px 0', color: '#4E5D78'}}>
              Our GST experts are available to assist you with any questions about registration, 
              compliance, or ongoing support.
            </p>
            <CTAButton to="/contact" style={{fontSize: '14px', padding: '12px 20px'}}>
              Contact Expert
            </CTAButton>
          </InfoCard>
        </Sidebar>
      </ContentGrid>
    </Container>
  )
} 