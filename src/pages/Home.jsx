import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { WebImage, Grid, Card, Button } from '../components/ui'
import CountUp from '../components/CountUp'
import Reveal from '../components/Reveal'
import { useState, useEffect } from 'react'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`

// Auto-moving carousel component
function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Legal Consultation Meeting"
    },
    {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Legal Documentation"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Business Legal Services"
    },
    {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Legal Technology"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <CarouselImage
          key={index}
          $active={index === currentIndex}
          src={image.src}
          alt={image.alt}
        />
      ))}
      <CarouselDots>
        {images.map((_, index) => (
          <CarouselDot
            key={index}
            $active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  )
}

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: ${p => p.theme.radii.lg};
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.lg};
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    height: 300px;
  }
`

const CarouselImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${p => p.$active ? 1 : 0};
  transition: opacity 1s ease-in-out;
  transform: ${p => p.$active ? 'scale(1)' : 'scale(1.1)'};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
`

const CarouselDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`

const CarouselDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${p => p.$active ? 'white' : 'rgba(255,255,255,0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
  }
`

// Custom SVG Background Elements
const BackgroundSVG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  
  .bg-circle {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(20,107,102,0.1) 0%, rgba(43,191,163,0.05) 100%);
    animation: ${float} 6s ease-in-out infinite;
  }
  
  .bg-circle-1 {
    width: 200px;
    height: 200px;
    top: 10%;
    right: 10%;
    animation-delay: 0s;
  }
  
  .bg-circle-2 {
    width: 150px;
    height: 150px;
    bottom: 20%;
    left: 15%;
    animation-delay: 2s;
  }
  
  .bg-triangle {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid rgba(43,191,163,0.08);
    top: 60%;
    right: 20%;
    animation: ${pulse} 4s ease-in-out infinite;
  }
`

const Hero = styled.section`
  background: ${p => p.theme.gradients.hero};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 60px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  box-shadow: ${p => p.theme.shadows.md};
  overflow: hidden;
  position: relative;
  animation: ${fadeInUp} 0.8s ease;
  margin-bottom: 32px;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    padding: 48px 32px;
    text-align: center;
    gap: 32px;
  }
  
  @media (max-width: ${p => p.theme.breakpoints.md}) {
    padding: 40px 24px;
    gap: 24px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(43,191,163,0.15) 0%, transparent 60%);
    border-radius: 50%;
    animation: ${pulse} 8s ease-in-out infinite;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`

const HeroContent = styled.div`
  z-index: 2;
  animation: ${slideInLeft} 0.8s ease 0.2s both;
`

const HeroImage = styled.div`
  position: relative;
  z-index: 2;
  animation: ${slideInRight} 0.8s ease 0.4s both;
  
  img {
    border-radius: ${p => p.theme.radii.lg};
    box-shadow: ${p => p.theme.shadows.lg};
    animation: ${float} 4s ease-in-out infinite;
  }
`

const HeroImageWrap = styled.div`
  animation: ${slideInRight} 0.8s ease 0.4s both;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 0;
    bottom: 0;
    background: ${p => p.theme.gradients.primary};
    border-radius: ${p => p.theme.radii.lg};
    z-index: -1;
    opacity: 0.3;
  }
`

const Title = styled.h1`
  font-family: ${p => p.theme.typography.heading};
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 24px 0;
  color: ${p => p.theme.colors.text};
  animation: ${slideInLeft} 0.8s ease 0.2s both;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    text-align: center;
  }
`

const Subtitle = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  line-height: 1.6;
  color: ${p => p.theme.colors.mutedText};
  margin: 0 0 32px 0;
  animation: ${slideInLeft} 0.8s ease 0.4s both;
  max-width: 90%;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    text-align: center;
    max-width: 100%;
    margin: 0 auto 32px auto;
  }
`

const CTAGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  animation: ${slideInLeft} 0.8s ease 0.6s both;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    justify-content: center;
  }
  
  @media (max-width: ${p => p.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    
    a {
      width: 100%;
      max-width: 280px;
      text-align: center;
    }
  }
`

const PrimaryCTA = styled(Link)`
  display: inline-block;
  background: ${p => p.theme.colors.primary};
  color: white;
  padding: 16px 32px;
  border-radius: ${p => p.theme.radii.pill};
  box-shadow: ${p => p.theme.shadows.md};
  font-weight: 600;
  font-size: 18px;
  transition: all 0.3s ease;
  &:hover { 
    background: ${p => p.theme.colors.primaryDark}; 
    transform: translateY(-2px);
    box-shadow: ${p => p.theme.shadows.lg};
  }
`

const SecondaryCTA = styled(Link)`
  color: ${p => p.theme.colors.primary};
  padding: 16px 24px;
  border: 2px solid ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.pill};
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background: ${p => p.theme.colors.primary};
    color: white;
  }
`

const StatsSection = styled.section`
  margin: 64px 0;
  text-align: center;
  position: relative;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  margin-top: 40px;
`

const StatCard = styled.div`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 32px 24px;
  box-shadow: ${p => p.theme.shadows.sm};
  transition: all ${p => p.theme.transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${p => p.theme.shadows.md};
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
`

const ServicesSection = styled.section`
  margin: 60px 0;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;

  h2 {
    font-size: 36px;
    color: ${p => p.theme.colors.text};
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    color: ${p => p.theme.colors.mutedText};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 40px;
`

const ServiceCard = styled(Link)`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  box-shadow: ${p => p.theme.shadows.sm};
  color: ${p => p.theme.colors.text};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, ${p => p.theme.colors.primary}, ${p => p.theme.colors.accent});
    transition: left 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${p => p.theme.shadows.lg};
    border-color: ${p => p.theme.colors.primary};
    
    &::before {
      left: 0;
    }
  }

  .icon {
    font-size: 48px;
    margin-bottom: 16px;
    color: ${p => p.theme.colors.primary};
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: ${p => p.theme.colors.mutedText};
    line-height: 1.6;
    margin-bottom: 24px;
  }
`

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${p => p.theme.colors.primary}, ${p => p.theme.colors.accent});
  border-radius: ${p => p.theme.radii.md};
  display: grid;
  place-items: center;
  font-size: 24px;
  color: white;
  margin-bottom: 8px;
`

const ServiceTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 600;
`

const ServiceDescription = styled.p`
  margin: 0;
  color: ${p => p.theme.colors.mutedText};
  line-height: 1.6;
  flex-grow: 1;
`

const ServicePrice = styled.div`
  color: ${p => p.theme.colors.accent};
  font-weight: 600;
  font-size: 16px;
`

const WhyChooseSection = styled.section`
  margin: 80px 0;
  padding: 60px 40px;
  background: linear-gradient(135deg, rgba(11,91,138,0.05) 0%, rgba(230,138,0,0.03) 100%);
  border-radius: ${p => p.theme.radii.lg};
  text-align: center;
`

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 48px;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${p => p.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  text-align: center;
  padding: 24px;
  
  h4 {
    margin: 16px 0 12px 0;
    color: ${p => p.theme.colors.text};
    font-size: 18px;
    font-weight: 600;
  }
  
  p {
    margin: 0;
    color: ${p => p.theme.colors.mutedText};
    line-height: 1.6;
  }
`

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${p => p.theme.colors.surface};
  border: 2px solid ${p => p.theme.colors.border};
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 0 auto;
  font-size: 32px;
  color: ${p => p.theme.colors.primary};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    border-color: ${p => p.theme.colors.primary};
    box-shadow: ${p => p.theme.shadows.md};
  }
`

const TestimonialsSection = styled.section`
  margin: 60px 0;
  text-align: center;
`

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

const TestimonialCard = styled.div`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 32px 24px;
  box-shadow: ${p => p.theme.shadows.sm};
  
  blockquote {
    margin: 0 0 24px 0;
    font-style: italic;
    color: ${p => p.theme.colors.text};
    line-height: 1.6;
  }
  
  .author {
    font-weight: 600;
    color: ${p => p.theme.colors.primary};
  }
  
  .role {
    color: ${p => p.theme.colors.mutedText};
    font-size: 14px;
  }
`

const TestimonialText = styled.p`
  margin: 0 0 20px 0;
  font-style: italic;
  color: ${p => p.theme.colors.text};
  line-height: 1.6;
  font-size: 15px;
`

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  
  strong {
    font-weight: 600;
    color: ${p => p.theme.colors.text};
    font-size: 14px;
  }
  
  span {
    color: ${p => p.theme.colors.mutedText};
    font-size: 12px;
  }
`

const CallToActionSection = styled.section`
  margin: 80px 0;
  padding: 60px 40px;
  background: ${p => p.theme.gradients.primary};
  border-radius: ${p => p.theme.radii.lg};
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: center;
  color: white;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 40px 24px;
  }
  
  h2 {
    margin: 0 0 16px 0;
    font-size: 2.2rem;
    font-weight: 700;
    color: white;
  }
  
  p {
    margin: 0 0 32px 0;
    font-size: 1.1rem;
    opacity: 0.9;
    line-height: 1.6;
  }
`

const CTAButtons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    justify-content: center;
  }
`

const CTAButton = styled(Link)`
  display: inline-block;
  background: ${p => p.theme.colors.accent};
  color: white;
  padding: 16px 32px;
  border-radius: ${p => p.theme.radii.pill};
  font-weight: 600;
  font-size: 18px;
  transition: all 0.3s ease;
  &:hover {
    background: ${p => p.theme.colors.accentDark};
    transform: translateY(-2px);
  }
`

const CompanyInfo = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
  color: ${p => p.theme.colors.mutedText};
  font-size: 0.9rem;
  font-weight: 500;
`

export default function Home() {
  return (
    <>
      <Hero>
        <HeroContent>
          <Title>Trusted Legal Services for Citizens and Businesses</Title>
          <Subtitle>Get expert legal consultation, government document services, and essential registrations with complete transparency and guaranteed support. Available 09 AM to 07 PM, Monday to Saturday across India.</Subtitle>
          <CTAGroup>
            <Button as={Link} to="/consult" size="lg">Start Free Consultation</Button>
            <Button as={Link} to="/services/consultation" variant="secondary" size="lg">Explore Services</Button>
          </CTAGroup>
          <CompanyInfo>
            <span>🚀 Launched: 20th August 2019</span>
            <span>⭐ 6+ Years Experience</span>
            <span>🏆 500+ Happy Customers</span>
          </CompanyInfo>
        </HeroContent>
        <HeroImageWrap>
          <ImageCarousel />
        </HeroImageWrap>
        <BackgroundSVG>
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-triangle"></div>
        </BackgroundSVG>
      </Hero>

      <Reveal as={StatsSection}>
        <Reveal>
          <SectionHeader>
            <h2>Trusted by Thousands</h2>
            <p>Our impact in numbers</p>
          </SectionHeader>
          <StatsGrid>
            <Reveal>
              <StatCard>
                <div className="number">
                  <CountUp end={500} suffix="+" />
                </div>
                <div className="label">Happy Customers</div>
              </StatCard>
            </Reveal>
            
            <Reveal>
              <StatCard>
                <div className="number">
                  <CountUp end={6} suffix=" Years" />
                </div>
                <div className="label">Experience</div>
              </StatCard>
            </Reveal>
            
            <Reveal>
              <StatCard>
                <div className="number">
                  <CountUp end={10} suffix="+" />
                </div>
                <div className="label">Expert Lawyers</div>
              </StatCard>
            </Reveal>
            
            <Reveal>
              <StatCard>
                <div className="number">
                  <CountUp end={5} suffix="+" />
                </div>
                <div className="label">Document Experts</div>
              </StatCard>
            </Reveal>
          </StatsGrid>
        </Reveal>
      </Reveal>

      <Reveal as={ServicesSection}>
        <Reveal>
          <SectionHeader>
            <h2>Our Services</h2>
            <p>Comprehensive legal solutions for individuals and businesses</p>
          </SectionHeader>
          <ServicesGrid>
            <Reveal>
              <ServiceCard>
                <div className="icon">💼</div>
                <h3>Legal Consultation</h3>
                <p>Expert legal advice and guidance for all your legal matters</p>
                <Button as={Link} to="/services/consultation" size="sm">Learn More</Button>
              </ServiceCard>
            </Reveal>
            
            <Reveal>
              <ServiceCard>
                <div className="icon">🆔</div>
                <h3>Government Documents</h3>
                <p>Aadhaar, PAN, Voter ID, Passport, DL, Ration Card, RGHS, Ayushman Card</p>
                <Button as={Link} to="/services/govt-documents" size="sm">Learn More</Button>
              </ServiceCard>
            </Reveal>
            
            <Reveal>
              <ServiceCard>
                <div className="icon">📋</div>
                <h3>Forms Submission</h3>
                <p>Electricity, Water, Gazette, Pension, Life Certificate, Birth/Marriage/Death, Police Verification</p>
                <Button as={Link} to="/services/forms-submission" size="sm">Learn More</Button>
              </ServiceCard>
            </Reveal>
            
            <Reveal>
              <ServiceCard>
                <div className="icon">🏷️</div>
                <h3>E-Stamp Services</h3>
                <p>Digital stamps in denominations of 50, 100, 500 and more</p>
                <Button as={Link} to="/services/e-stamp" size="sm">Learn More</Button>
              </ServiceCard>
            </Reveal>
            
            <Reveal>
              <ServiceCard>
                <div className="icon">🏠</div>
                <h3>Property Legal</h3>
                <p>Property verification, documentation, and legal compliance services</p>
                <Button as={Link} to="/services/property" size="sm">Learn More</Button>
              </ServiceCard>
            </Reveal>
            
            <Reveal>
              <ServiceCard>
                <div className="icon">🏢</div>
                <h3>Business Legal</h3>
                <p>Company formation, compliance, and business legal support</p>
                <Button as={Link} to="/services/business" size="sm">Learn More</Button>
              </ServiceCard>
            </Reveal>
          </ServicesGrid>
        </Reveal>
      </Reveal>

      <Reveal as={WhyChooseSection}>
        <SectionHeader>
          <h2>Why Choose EsewaMitra?</h2>
          <p>Experience the difference with our transparent, expert-driven approach to legal services</p>
        </SectionHeader>
        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>🎯</FeatureIcon>
            <h4>Expert Guidance</h4>
            <p>1000+ verified legal experts with specialization across all practice areas</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>💰</FeatureIcon>
            <h4>Transparent Pricing</h4>
            <p>No hidden costs, clear pricing structure, and guaranteed value for money</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>⚡</FeatureIcon>
            <h4>Fast Processing</h4>
            <p>Quick turnaround times with priority support and expedited services</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>🔒</FeatureIcon>
            <h4>Secure & Private</h4>
            <p>Complete confidentiality with encrypted communications and data protection</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>📱</FeatureIcon>
            <h4>24/7 Support</h4>
            <p>Round-the-clock customer support and expert consultation availability</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>✅</FeatureIcon>
            <h4>Guaranteed Results</h4>
            <p>98% success rate with money-back guarantee and complete satisfaction</p>
          </FeatureCard>
        </FeatureGrid>
      </Reveal>

      <Reveal as={TestimonialsSection}>
        <SectionHeader>
          <h2>What Our Clients Say</h2>
          <p>Real feedback from thousands of satisfied clients across India</p>
        </SectionHeader>
        <TestimonialGrid>
          <TestimonialCard>
            <TestimonialText>"EsewaMitra made GST registration incredibly simple. Their expert guided me through every step and completed everything in just 3 days!"</TestimonialText>
            <TestimonialAuthor>
              <WebImage 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Client testimonial" 
                rounded 
                style={{width: '50px', height: '50px'}}
              />
              <div>
                <strong>Rajesh Kumar</strong>
                <span>Small Business Owner, Delhi</span>
              </div>
            </TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>"Outstanding property due diligence service. They identified potential issues that saved me from a costly mistake. Highly recommended!"</TestimonialText>
            <TestimonialAuthor>
              <WebImage 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Client testimonial" 
                rounded 
                style={{width: '50px', height: '50px', objectFit: 'cover'}}
              />
              <div>
                <strong>Priya Sharma</strong>
                <span>IT Professional, Bangalore</span>
              </div>
            </TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>"The legal consultation was exactly what I needed. Clear advice, fair pricing, and no hidden charges. Will definitely use again!"</TestimonialText>
            <TestimonialAuthor>
              <WebImage 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Client testimonial" 
                rounded 
                style={{width: '50px', height: '50px'}}
              />
              <div>
                <strong>Amit Patel</strong>
                <span>Entrepreneur, Mumbai</span>
              </div>
            </TestimonialAuthor>
          </TestimonialCard>
        </TestimonialGrid>
      </Reveal>

      <Reveal as={CallToActionSection}>
        <div>
          <SectionHeader>
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of satisfied clients and experience hassle-free legal services</p>
          </SectionHeader>
          <CTAButtons>
            <Button as={Link} to="/consult" size="lg">Get Free Consultation</Button>
            <Button as={Link} to="/contact" variant="secondary" size="lg">Contact Us</Button>
          </CTAButtons>
        </div>
        <div>
          <WebImage 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3" 
            alt="Legal consultation" 
            rounded 
            shadow 
          />
        </div>
      </Reveal>
    </>
  )
} 