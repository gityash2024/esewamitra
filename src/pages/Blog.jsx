import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`animation: ${fadeInUp} 0.6s ease;`
const Hero = styled.section`
  background: ${p => p.theme.gradients.hero}; border: 1px solid ${p => p.theme.colors.border}; border-radius: ${p => p.theme.radii.lg};
  padding: 60px 40px; text-align: center; margin-bottom: 40px;
  h1 { margin: 0 0 16px 0; }
  p { margin: 0; color: ${p => p.theme.colors.mutedText}; }
`

const ContentGrid = styled.div`
  display: grid; grid-template-columns: 2fr 1fr; gap: 40px;
  @media (max-width: ${p => p.theme.breakpoints.lg}) { grid-template-columns: 1fr; gap: 32px; }
`

const FeaturedPost = styled(Link).attrs({ target: '_blank', rel: 'noopener noreferrer' })`
  display: block; border: 1px solid ${p => p.theme.colors.border}; border-radius: ${p => p.theme.radii.lg}; overflow: hidden;
  background: ${p => p.theme.colors.surface}; color: ${p => p.theme.colors.text}; transition: 220ms ease; margin-bottom: 32px; text-decoration: none;
  &:hover{ box-shadow: ${p => p.theme.shadows.lg}; transform: translateY(-4px) }
  .image{ height: 240px; background: ${p => p.theme.gradients.primary}; display:grid;place-items:center;color:#fff;font-weight:800; }
  .content{ padding: 24px; }
  .meta{ display:flex;gap:16px;color:${p=>p.theme.colors.mutedText};font-size:14px }
  h3 { color: ${p => p.theme.colors.text}; }
`

const PostList = styled.div` display:grid; gap: 24px; `

const PostCard = styled(Link).attrs({ target: '_blank', rel: 'noopener noreferrer' })`
  display:block; border:1px solid ${p=>p.theme.colors.border}; border-radius:${p=>p.theme.radii.lg}; padding:20px; background:${p=>p.theme.colors.surface}; color:${p=>p.theme.colors.text};
  transition:220ms ease; text-decoration: none; cursor: pointer;
  &:hover{box-shadow:${p=>p.theme.shadows.md}; transform: translateY(-2px)}
  .meta{display:flex;gap:12px;color:${p=>p.theme.colors.mutedText};font-size:12px; margin-top: 8px;}
  h4 { margin: 8px 0; color: ${p => p.theme.colors.text}; }
  p { margin: 8px 0; }
`

const SidebarCard = styled.div` 
  border:1px solid ${p=>p.theme.colors.border}; border-radius:${p=>p.theme.radii.lg}; padding:24px; background:${p=>p.theme.colors.surface}; 
  margin-bottom: 24px;
  
  h3 { margin: 0 0 16px 0; color: ${p => p.theme.colors.text}; }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin: 8px 0;
      
      a {
        color: ${p => p.theme.colors.mutedText};
        text-decoration: none;
        padding: 8px 12px;
        border-radius: ${p => p.theme.radii.sm};
        display: block;
        transition: all ${p => p.theme.transitions.base};
        
        &:hover {
          background: ${p => p.theme.colors.border};
          color: ${p => p.theme.colors.primary};
        }
      }
    }
  }
  
  p {
    color: ${p => p.theme.colors.mutedText};
    line-height: 1.6;
    margin: 0 0 16px 0;
  }
  
  a:not(li a) {
    color: ${p => p.theme.colors.primary};
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

export default function Blog() {
  return (
    <Container>
      <Hero>
        <h1>Legal Insights & Updates</h1>
        <p>Stay informed with the latest legal news, deep-dives, and guides from our experts.</p>
      </Hero>

      <ContentGrid>
        <div>
          <Reveal>
            <FeaturedPost to="/blog/gst-registration-guide-2025">
              <div className="image">GST 2025 – Complete Guide</div>
              <div className="content">
                <h3>GST Registration in 2025: Process, Documents & Timeline</h3>
                <p>Updated step-by-step walkthrough for quick GST registration with common pitfalls to avoid.</p>
                <div className="meta"><span>📅 Jan 10, 2025</span><span>⏱️ 8 min</span><span>👁️ 3,200</span></div>
              </div>
            </FeaturedPost>
          </Reveal>

          <PostList>
            {[
              { title: "How to choose the right business structure in India (2025)", desc: "LLP vs Pvt Ltd vs OPC — a practical comparison with taxes, compliance, and investor-readiness.", date: "Jan 8", slug: "business-structure-comparison" },
              { title: "MSME Registration Benefits and Udyam Certificate Process", desc: "Complete guide to small business registration with government benefits and subsidy access.", date: "Jan 6", slug: "msme-registration-benefits" },
              { title: "Trademark Registration: Complete Guide for Startups", desc: "Everything about trademark search, filing, and protection strategies for new businesses.", date: "Jan 4", slug: "trademark-registration-guide" },
              { title: "Property Due Diligence: Legal Checklist for Buyers", desc: "Essential legal verification steps before purchasing residential or commercial property.", date: "Jan 2", slug: "property-due-diligence-checklist" },
              { title: "Employment Law Updates: What HR Teams Need to Know", desc: "Latest changes in labor laws, compliance requirements, and best practices for employers.", date: "Dec 30", slug: "employment-law-updates-2025" },
              { title: "Digital Signature Certificate: Complete Guide 2025", desc: "How to obtain DSC, types, validity, and usage for legal document signing online.", date: "Dec 28", slug: "digital-signature-certificate-guide" }
            ].map((post, i) => (
              <Reveal key={i}>
                <PostCard to={`/blog/${post.slug}`}>
                  <span className="category" style={{background:'rgba(20,107,102,.1)', padding:'4px 10px', borderRadius:16, fontWeight:700, fontSize:12, color:'#146B66'}}>Legal</span>
                  <h4>{post.title}</h4>
                  <p>{post.desc}</p>
                  <div className="meta"><span>📅 {post.date}, 2025</span><span>⏱️ 6 min</span></div>
                </PostCard>
              </Reveal>
            ))}
          </PostList>
        </div>

        <div>
          <Reveal as={SidebarCard}>
            <h3>Popular Topics</h3>
            <ul>
              <li><Link to="/registrations/gst">GST & Tax</Link></li>
              <li><Link to="/registrations/trademark">Trademark & IP</Link></li>
              <li><Link to="/services/property">Property Law</Link></li>
              <li><Link to="/services/business">Startup Legal</Link></li>
              <li><Link to="/registrations/msme">MSME & Business</Link></li>
              <li><Link to="/services/documentation">Legal Documentation</Link></li>
            </ul>
          </Reveal>

          <Reveal as={SidebarCard}>
            <h3>Newsletter</h3>
            <p>Get weekly legal insights and updates delivered to your inbox.</p>
            <Link to="/contact">Subscribe now →</Link>
          </Reveal>

          <Reveal as={SidebarCard}>
            <h3>Free Resources</h3>
            <ul>
              <li><Link to="/services/consultation">Legal Consultation</Link></li>
              <li><Link to="/registrations/gst">GST Calculator</Link></li>
              <li><Link to="/services/documentation">Document Templates</Link></li>
              <li><Link to="/contact">Expert Support</Link></li>
            </ul>
          </Reveal>
        </div>
      </ContentGrid>
    </Container>
  )
} 