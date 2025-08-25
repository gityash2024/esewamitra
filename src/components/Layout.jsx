import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`

const slideDown = keyframes`
  from { transform: translateY(-10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`

const underline = keyframes`
  from { width: 0; }
  to { width: 100%; }
`

const Shell = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const Header = styled.header`
  position: sticky; top: 0; z-index: 1000;
  background: ${p => p.theme.colors.surface};
  border-bottom: 1px solid ${p => p.theme.colors.border};
  box-shadow: ${p => p.theme.shadows.sm};
  backdrop-filter: saturate(180%) blur(8px);
`

const HeaderInner = styled.div`
  max-width: ${p => p.theme.layout.maxWidth}; margin: 0 auto;
  padding: 12px 20px;
  display: grid; grid-template-columns: auto 1fr auto; gap: 16px; align-items: center;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    padding: 8px 16px;
    gap: 12px;
  }
`

const Brand = styled(Link)`
  display: inline-flex; align-items: center; gap: 10px;
  font-weight: 800; color: ${p => p.theme.colors.primary}; font-size: 18px; letter-spacing: -0.02em;
  
  @media (max-width: ${p => p.theme.breakpoints.md}) {
    font-size: 16px;
    gap: 8px;
  }
`

const LogoImg = styled.img`
  width: 48px; height: 48px; object-fit: contain; display: block;
  
  @media (max-width: ${p => p.theme.breakpoints.md}) {
    width: 40px; height: 40px;
  }
`

const NavWrap = styled.div`
  display: flex; align-items: center; justify-content: center;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    justify-content: flex-end;
  }
`

const Nav = styled.nav`
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    position: fixed; 
    inset: 68px 0 auto 0; 
    background: ${p => p.theme.colors.surface};
    border-bottom: 1px solid ${p => p.theme.colors.border}; 
    transform: ${p => (p.$open ? 'translateY(0)' : 'translateY(-120%)')};
    transition: transform 200ms ease; 
    box-shadow: ${p => p.theme.shadows.md};
    max-height: calc(100vh - 68px);
    overflow-y: auto;
  }
`

const NavList = styled.ul`
  list-style: none; display: flex; gap: 6px; margin: 0; padding: 0; align-items: center;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) { 
    flex-direction: column; 
    padding: 16px 20px 24px; 
    gap: 12px; 
    align-items: stretch;
  }
`

const NavItem = styled.li`
  position: relative;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    border-bottom: 1px solid ${p => p.theme.colors.border};
  }
`

const DropdownNavLink = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 20px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color ${p => p.theme.transitions.base};
  cursor: pointer;
  position: relative;
  
  &:hover {
    color: ${p => p.theme.colors.primary};
  }
  
  span {
    font-size: 12px;
    transition: transform ${p => p.theme.transitions.base};
  }
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    padding: 16px 24px;
    justify-content: space-between;
  }
`

const BaseLinkStyles = `
  display: inline-flex; align-items: center; gap: 6px; color: ${p => p.theme.colors.text}; padding: 10px 12px;
  border-radius: ${p => p.theme.radii.sm}; font-weight: 600; position: relative; transition: color .2s ease, background .2s ease;
  &:hover { color: ${p => p.theme.colors.primary}; background: rgba(20,107,102,.08); }
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    padding: 12px 16px;
    width: 100%;
    justify-content: space-between;
  }
`

const NavA = styled(Link)`
  ${BaseLinkStyles}
  text-decoration: none;
  &.active::after { content: ''; position: absolute; left: 12px; right: 12px; bottom: 4px; height: 2px;
    background: linear-gradient(90deg, ${p => p.theme.colors.primary}, ${p => p.theme.colors.accent}); border-radius: 2px; animation: ${underline} 220ms ease forwards; }
    
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    &.active::after { left: 16px; right: 16px; }
  }
`

const DropdownTrigger = styled.button`
  ${BaseLinkStyles} 
  border: none; background: none; cursor: pointer;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    text-align: left;
  }
`

const DropdownMenu = styled.div`
  position: absolute; top: 100%; left: 0; min-width: 320px; padding: 12px; background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border}; border-radius: ${p => p.theme.radii.lg}; box-shadow: ${p => p.theme.shadows.lg};
  opacity: ${p => (p.$open ? 1 : 0)}; visibility: ${p => (p.$open ? 'visible' : 'hidden')}; transform: ${p => (p.$open ? 'translateY(8px)' : 'translateY(0)')};
  transition: all .18s ease; z-index: 100; animation: ${p => (p.$open ? slideDown : 'none')} .2s ease; display: grid; gap: 8px;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) { 
    position: static; 
    box-shadow: none; 
    border: 1px solid rgba(20,107,102,.15); 
    background: rgba(20,107,102,.04); 
    opacity: 1; 
    visibility: visible; 
    transform: none;
    margin-top: 8px;
    padding: 8px;
    border-radius: ${p => p.theme.radii.md};
  }
`

const DropdownItem = styled(Link)`
  display: grid; grid-template-columns: 1fr; gap: 4px; padding: 12px 14px; border-radius: ${p => p.theme.radii.sm}; transition: .18s ease;
  &:hover { background: rgba(20,107,102,.08); }
  strong { font-size: 15px; font-weight: 700; color: ${p => p.theme.colors.text}; }
  span { font-size: 13px; color: ${p => p.theme.colors.mutedText}; line-height: 1.4; }
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    padding: 10px 12px;
    
    strong { font-size: 14px; }
    span { font-size: 12px; }
  }
`

const ArrowIcon = styled.span` 
  transition: transform .2s ease; 
  transform: ${p => (p.$open ? 'rotate(180deg)' : 'rotate(0)')}; 
  margin-left: auto;
`

const Actions = styled.div` 
  display: flex; align-items: center; gap: 10px; 
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    gap: 8px;
  }
`

const PrimaryBtn = styled(Link)`
  background: ${p => p.theme.colors.accent}; color: #fff; padding: 10px 16px; border-radius: ${p => p.theme.radii.pill};
  font-weight: 600; transition: all .2s ease; white-space: nowrap;
  &:hover { background: ${p => p.theme.colors.accentDark}; transform: translateY(-1px); }
  
  @media (max-width: ${p => p.theme.breakpoints.md}) {
    padding: 8px 12px;
    font-size: 14px;
  }
`

const Burger = styled.button`
  display: none; border: none; background: none; color: ${p => p.theme.colors.text}; font-size: 20px; cursor: pointer;
  @media (max-width: ${p => p.theme.breakpoints.lg}) { display: block; }
`

const Main = styled.main`
  max-width: ${p => p.theme.layout.maxWidth}; margin: 0 auto; width: 100%; padding: 28px 20px 64px; animation: ${fadeIn} .6s ease;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 120%;
    height: 100%;
    background-image: url('/bg-pattern.svg');
    background-repeat: repeat;
    background-size: 400px 400px;
    opacity: 0.3;
    z-index: -1;
    transform: translateX(-50%);
    pointer-events: none;
  }
`

const Footer = styled.footer`
  background: ${p => p.theme.colors.surfaceVariant}; border-top: 1px solid ${p => p.theme.colors.border}; padding: 48px 20px 24px;
`

const FooterInner = styled.div`
  max-width: ${p => p.theme.layout.maxWidth}; margin: 0 auto; display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 32px;
  @media (max-width: ${p => p.theme.breakpoints.lg}) { grid-template-columns: 1fr 1fr; gap: 24px; }
  @media (max-width: ${p => p.theme.breakpoints.md}) { grid-template-columns: 1fr; gap: 32px; }
`

const FooterSection = styled.div`
  h4 { margin: 0 0 16px 0; color: ${p => p.theme.colors.text}; font-weight: 700; font-size: 16px; }
  p { margin: 0 0 12px 0; color: ${p => p.theme.colors.mutedText}; line-height: 1.6; font-size: 14px; }
  
  .contact-item {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    
    span:first-child {
      font-size: 1.2rem;
      margin-top: 2px;
    }
    
    div {
      font-size: 14px;
      line-height: 1.4;
      
      strong {
        color: ${p => p.theme.colors.text};
      }
    }
  }
  
  .social-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    .social-link {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${p => p.theme.colors.mutedText};
      text-decoration: none;
      font-size: 14px;
      transition: color .2s ease;
      
      &:hover {
        color: ${p => p.theme.colors.primary};
      }
      
      span:first-child {
        font-size: 1.2rem;
      }
    }
  }
`

const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
  
  h4 {
    margin: 0;
    color: ${p => p.theme.colors.primary};
    font-weight: 800;
    font-size: 18px;
  }
`

const FooterLinks = styled.div`
  display: grid; gap: 8px;
  a { color: ${p => p.theme.colors.mutedText}; transition: color .2s ease; &:hover { color: ${p => p.theme.colors.primary}; } }
`

const Newsletter = styled.form`
  display: flex; gap: 8px; margin-top: 16px;
  input { flex: 1; padding: 8px 12px; border: 1px solid ${p => p.theme.colors.border}; border-radius: ${p => p.theme.radii.sm}; font-size: 14px; }
  button { background: ${p => p.theme.colors.primary}; color: #fff; border: none; padding: 8px 12px; border-radius: ${p => p.theme.radii.sm}; font-size: 14px; cursor: pointer; white-space: nowrap; }
`

const Copyright = styled.div`
  margin-top: 32px; padding-top: 20px; border-top: 1px solid ${p => p.theme.colors.border}; text-align: center;
  color: ${p => p.theme.colors.mutedText}; font-size: 14px;
`

const ServicesDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: ${p => p.theme.shadows.lg};
  min-width: 300px;
  z-index: 1000;
  padding: 16px 0;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    position: static;
    box-shadow: none;
    border: none;
    border-top: 1px solid ${p => p.theme.colors.border};
    margin-top: 8px;
    padding: 8px 0;
  }
`

const RegistrationsDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: ${p => p.theme.shadows.lg};
  min-width: 250px;
  z-index: 1000;
  padding: 16px 0;
  
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    position: static;
    box-shadow: none;
    border: none;
    border-top: 1px solid ${p => p.theme.colors.border};
    margin-top: 8px;
    padding: 8px 0;
  }
`

export function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [registrationsOpen, setRegistrationsOpen] = useState(false)
  
  const servicesRef = useRef(null)
  const registrationsRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false)
      }
      if (registrationsRef.current && !registrationsRef.current.contains(event.target)) {
        setRegistrationsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <Shell>
      <Header>
        <HeaderInner>
          <Brand to="/" aria-label="EsewaMitra">
            <LogoImg src="/logo_mitra.png" alt="EsewaMitra" />
            EsewaMitra
          </Brand>
          <NavWrap>
            <Nav $open={open}>
              <NavList>
                <NavItem><NavA to="/" onClick={() => setOpen(false)}>Home</NavA></NavItem>
                <NavItem>
                  <DropdownNavLink onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                    Services <span>▼</span>
                    {servicesOpen && (
                      <ServicesDropdown onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                        <DropdownItem to="/services/consultation">
                          <h4>Legal Consultation</h4>
                          <p>Expert legal advice and guidance for individuals and businesses</p>
                        </DropdownItem>
                        <DropdownItem to="/services/govt-documents">
                          <h4>Govt Documents</h4>
                          <p>Aadhaar, PAN, Voter ID, Passport, DL, Ration Card, RGHS, Ayushman Card</p>
                        </DropdownItem>
                        <DropdownItem to="/services/forms-submission">
                          <h4>Forms Submission Services</h4>
                          <p>Electricity, Water, Gazette, Pension, Life Certificate, Birth/Marriage/Death, Police Verification, Certificates</p>
                        </DropdownItem>
                        <DropdownItem to="/services/e-stamp">
                          <h4>E-Stamp Services</h4>
                          <p>50, 100, 500 and other denomination stamps available</p>
                        </DropdownItem>
                        <DropdownItem to="/services/property">
                          <h4>Property Legal Services</h4>
                          <p>Property verification, documentation, and legal compliance</p>
                        </DropdownItem>
                        <DropdownItem to="/services/business">
                          <h4>Business Legal Services</h4>
                          <p>Company formation, compliance, and business legal support</p>
                        </DropdownItem>
                      </ServicesDropdown>
                    )}
                  </DropdownNavLink>
                </NavItem>
                <NavItem ref={registrationsRef}>
                  <DropdownNavLink onMouseEnter={() => setRegistrationsOpen(true)} onMouseLeave={() => setRegistrationsOpen(false)}>
                    Registrations <span>▼</span>
                    {registrationsOpen && (
                      <RegistrationsDropdown onMouseEnter={() => setRegistrationsOpen(true)} onMouseLeave={() => setRegistrationsOpen(false)}>
                        <DropdownItem to="/registrations/gst">
                          <h4>GST Registration</h4>
                        </DropdownItem>
                        <DropdownItem to="/registrations/msme">
                          <h4>MSME Registration</h4>
                        </DropdownItem>
                        <DropdownItem to="/registrations/trademark">
                          <h4>Trademark Registration</h4>
                        </DropdownItem>
                        <DropdownItem to="/registrations/fssai">
                          <h4>FSSAI Registration</h4>
                        </DropdownItem>
                        <DropdownItem to="/registrations/iso">
                          <h4>ISO Certification</h4>
                        </DropdownItem>
                        <DropdownItem to="/registrations/iec">
                          <h4>IEC Registration</h4>
                        </DropdownItem>
                      </RegistrationsDropdown>
                    )}
                  </DropdownNavLink>
                </NavItem>
                <NavItem><NavA to="/about" onClick={() => setOpen(false)}>About</NavA></NavItem>
                <NavItem><NavA to="/contact" onClick={() => setOpen(false)}>Contact</NavA></NavItem>
                <NavItem><NavA to="/blog" onClick={() => setOpen(false)}>Blog</NavA></NavItem>
              </NavList>
            </Nav>
          </NavWrap>
          <Actions>
            <Burger aria-label="Open Menu" onClick={() => setOpen(v => !v)}>☰</Burger>
            <PrimaryBtn to="/consult">Consult Now</PrimaryBtn>
          </Actions>
        </HeaderInner>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterInner>
          <FooterSection>
            <FooterBrand>
              <img src="/logo_mitra.png" alt="EsewaMitra" />
              <h4>EsewaMitra</h4>
            </FooterBrand>
            <p>Trusted platform for comprehensive legal services across India. We simplify legal processes with expert guidance and transparent pricing.</p>
            <p><strong>Available:</strong> 09 AM to 07 PM, Monday to Saturday</p>
            <p><strong>500+ Happy Customers • 10+ Expert Lawyers • 5+ Document Experts</strong></p>
            <Newsletter onSubmit={(e)=>e.preventDefault()}>
              <input placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </Newsletter>
          </FooterSection>
          
          <FooterSection>
            <h4>Contact Info</h4>
            <div className="contact-item">
              <span>📍</span>
              <div>
                <strong>Head Office:</strong><br />
                185 Ganga Sagar Scheme, Vaishali Nagar<br />
                Jaipur 302021
              </div>
            </div>
            <div className="contact-item">
              <span>📞</span>
              <div>
                <strong>Phone:</strong><br />
                +91 7691852665
              </div>
            </div>
            <div className="contact-item">
              <span>✉️</span>
              <div>
                <strong>Email:</strong><br />
                esewamitra@gmail.com
              </div>
            </div>
          </FooterSection>
          
          <FooterSection>
            <h4>Social Media</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                <span>📘</span>
                <span>Facebook: E Sewa Mitra</span>
              </a>
              <a href="#" className="social-link">
                <span>📷</span>
                <span>Instagram: esewamitra</span>
              </a>
            </div>
          </FooterSection>
          <FooterSection>
            <h4>Services</h4>
            <FooterLinks>
              <Link to="/services/consultation">Legal Consultation</Link>
              <Link to="/services/govt-documents">Govt Documents</Link>
              <Link to="/services/forms-submission">Forms Submission</Link>
              <Link to="/services/e-stamp">E-Stamp Services</Link>
              <Link to="/services/property">Property Services</Link>
              <Link to="/services/business">Business Legal</Link>
            </FooterLinks>
          </FooterSection>
          <FooterSection>
            <h4>Registrations</h4>
            <FooterLinks>
              <Link to="/registrations/gst">GST Registration</Link>
              <Link to="/registrations/msme">MSME Registration</Link>
              <Link to="/registrations/trademark">Trademark Registration</Link>
              <Link to="/registrations/fssai">FSSAI Registration</Link>
              <Link to="/registrations/iso">ISO Certification</Link>
              <Link to="/registrations/iec">IEC Registration</Link>
            </FooterLinks>
          </FooterSection>
          <FooterSection>
            <h4>Company</h4>
            <FooterLinks>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </FooterLinks>
          </FooterSection>
        </FooterInner>
        <Copyright>© {new Date().getFullYear()} EsewaMitra. All rights reserved. • Empowering Legal Solutions</Copyright>
      </Footer>
    </Shell>
  )
} 