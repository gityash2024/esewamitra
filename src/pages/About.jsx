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

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 10px;
  color: ${p => p.theme.colors.text};
`

const Subtitle = styled.p`
  font-size: 1.4rem;
  color: ${p => p.theme.colors.mutedText};
  margin-bottom: 20px;
`

const Stats = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.theme.colors.primary};
  font-size: 1.8rem;
  font-weight: 700;
  font-family: ${p => p.theme.typography.heading};

  span {
    font-size: 0.9rem;
    color: ${p => p.theme.colors.mutedText};
    margin-top: 5px;
  }
`

const HeroImage = styled.div`
  width: 100%;
  max-width: 600px;
  height: 350px;
  border-radius: ${p => p.theme.radii.lg};
  overflow: hidden;
  margin: 0 auto;
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

const SectionHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 10px;
    color: ${p => p.theme.colors.text};
  }

  p {
    font-size: 1.1rem;
    color: ${p => p.theme.colors.mutedText};
  }
`

const StoryContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: ${p => p.theme.colors.primary};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: ${p => p.theme.colors.mutedText};
    margin-bottom: 15px;
  }

  strong {
    color: ${p => p.theme.colors.text};
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

const TeamMember = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: ${p => p.theme.shadows.sm};
  transition: all ${p => p.theme.transitions.base};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${p => p.theme.shadows.md};
  }
`

const MemberImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${p => p.theme.colors.border};
`

const MemberInfo = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 5px;
    color: ${p => p.theme.colors.text};
  }

  .position {
    font-size: 0.9rem;
    color: ${p => p.theme.colors.mutedText};
    margin-bottom: 8px;
  }

  p {
    font-size: 1rem;
    color: ${p => p.theme.colors.mutedText};
    line-height: 1.5;
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

const SuccessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 48px;
`

const SuccessCard = styled(Card)`
  text-align: center;
  padding: 32px 24px;
  transition: all ${p => p.theme.transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${p => p.theme.shadows.lg};
  }

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

  p {
    color: ${p => p.theme.colors.mutedText};
    line-height: 1.6;
    margin: 0;
  }
`

const OfficeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: ${p => p.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .office-details {
    flex: 1;
    h3 {
      font-size: 1.8rem;
      margin-bottom: 10px;
      color: ${p => p.theme.colors.primary};
    }

    p {
      font-size: 1.1rem;
      color: ${p => p.theme.colors.mutedText};
      margin-bottom: 10px;
      strong {
        color: ${p => p.theme.colors.text};
      }
    }
  }

  .social-links {
    flex: 1;
    h4 {
      font-size: 1.8rem;
      margin-bottom: 10px;
      color: ${p => p.theme.colors.primary};
    }

    .social-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;

      .social-link {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1.1rem;
        color: ${p => p.theme.colors.mutedText};
        text-decoration: none;

        &:hover {
          color: ${p => p.theme.colors.primary};
        }
      }
    }
  }
`

export default function About() {
  return (
    <Container>
      <Hero>
        <HeroContent>
          <Title>About EsewaMitra</Title>
          <Subtitle>Your trusted partner for government documents and legal services since 2019</Subtitle>
          <Stats>
            <StatItem>
              <CountUp end={500} suffix="+" />
              <span>Happy Customers</span>
            </StatItem>
            <StatItem>
              <CountUp end={6} suffix=" Years" />
              <span>Experience</span>
            </StatItem>
            <StatItem>
              <CountUp end={15} suffix="+" />
              <span>Expert Team</span>
            </StatItem>
          </Stats>
        </HeroContent>
        <HeroImage>
          <WebImage 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3" 
            alt="EsewaMitra Team" 
            objectFit="cover"
          />
        </HeroImage>
      </Hero>

      <Section>
        <Reveal>
          <SectionHeader>
            <h2>Our Story</h2>
            <p>Building trust through transparency and expertise</p>
          </SectionHeader>
          <StoryContent>
            <div>
              <h3>Launch & Growth</h3>
              <p>EsewaMitra was launched on <strong>20th August 2019</strong> with a vision to simplify government document processes for every Indian citizen. What started as a small team has grown into a trusted name in legal services.</p>
              
              <h3>Experience & Expertise</h3>
              <p>With <strong>6+ years of experience</strong> in government body ID cards and documents, we have developed deep expertise in navigating complex bureaucratic processes. Our team understands the intricacies of various government departments and ensures smooth service delivery.</p>
              
              <h3>Mission</h3>
              <p>To democratize legal services and make government document processes accessible, transparent, and hassle-free for every citizen and business in India.</p>
            </div>
          </StoryContent>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeader>
            <h2>Leadership Team</h2>
            <p>Meet the visionaries behind EsewaMitra</p>
          </SectionHeader>
          <TeamGrid>
            <TeamMember>
              <MemberImage>
                <WebImage 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Chandan Lakhara" 
                  objectFit="cover"
                />
              </MemberImage>
              <MemberInfo>
                <h3>Chandan Lakhara</h3>
                <span className="position">CEO of Company</span>
                <p>5+ years in legal technology and business development. Former legal advisor to customers, passionate about democratizing legal services.</p>
              </MemberInfo>
            </TeamMember>
          </TeamGrid>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeader>
            <h2>Our Success</h2>
            <p>Numbers that speak for themselves</p>
          </SectionHeader>
          <SuccessGrid>
            <SuccessCard>
              <div className="number">500+</div>
              <div className="label">Happy Customers</div>
              <p>Satisfied clients across India who trust us with their legal needs</p>
            </SuccessCard>
            <SuccessCard>
              <div className="number">10+</div>
              <div className="label">Expert Lawyers</div>
              <p>Qualified legal professionals with years of experience</p>
            </SuccessCard>
            <SuccessCard>
              <div className="number">5+</div>
              <div className="label">Document Experts</div>
              <p>Specialists in government documentation and processes</p>
            </SuccessCard>
            <SuccessCard>
              <div className="number">24/7</div>
              <div className="label">Support Available</div>
              <p>Round-the-clock assistance for urgent legal matters</p>
            </SuccessCard>
          </SuccessGrid>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeader>
            <h2>Office & Contact</h2>
            <p>Visit us at our head office</p>
          </SectionHeader>
          <OfficeInfo>
            <div className="office-details">
              <h3>Head Office</h3>
              <p><strong>Address:</strong> 185 Ganga Sagar Scheme, Vaishali Nagar, Jaipur 302021</p>
              <p><strong>Phone:</strong> +91 7691852665</p>
              <p><strong>Email:</strong> esewamitra@gmail.com</p>
              <p><strong>Timing:</strong> 09 AM to 07 PM, Monday to Saturday</p>
            </div>
            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-grid">
                <a href="#" className="social-link">
                  <span>📘</span>
                  <span>Facebook: E Sewa Mitra</span>
                </a>
                <a href="#" className="social-link">
                  <span>📷</span>
                  <span>Instagram: esewamitra</span>
                </a>
              </div>
            </div>
          </OfficeInfo>
        </Reveal>
      </Section>
    </Container>
  )
} 