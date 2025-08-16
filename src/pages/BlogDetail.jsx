import styled, { keyframes } from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { WebImage } from '../components/ui'
import Reveal from '../components/Reveal'

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

// Blog post data
const blogPosts = {
  'gst-registration-guide-2025': {
    category: 'GST & Tax',
    title: 'GST Registration in 2025: Complete Process, Documents & Timeline',
    excerpt: 'Everything you need to know about GST registration in 2025, including updated process, required documents, timeline, and common pitfalls to avoid.',
    author: 'CA Rahul Sharma',
    date: 'January 10, 2025',
    readTime: '8 min',
    views: '3,247',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  'business-structure-comparison': {
    category: 'Business Legal',
    title: 'How to choose the right business structure in India (2025)',
    excerpt: 'LLP vs Pvt Ltd vs OPC — a practical comparison with taxes, compliance, and investor-readiness.',
    author: 'Advocate Priya Mehta',
    date: 'January 8, 2025',
    readTime: '6 min',
    views: '2,156',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  'msme-registration-benefits': {
    category: 'MSME & Business',
    title: 'MSME Registration Benefits and Udyam Certificate Process',
    excerpt: 'Complete guide to small business registration with government benefits and subsidy access.',
    author: 'CA Amit Kumar',
    date: 'January 6, 2025',
    readTime: '6 min',
    views: '1,892',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  'trademark-registration-guide': {
    category: 'Trademark & IP',
    title: 'Trademark Registration: Complete Guide for Startups',
    excerpt: 'Everything about trademark search, filing, and protection strategies for new businesses.',
    author: 'Advocate Neha Singh',
    date: 'January 4, 2025',
    readTime: '6 min',
    views: '1,634',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  'property-due-diligence-checklist': {
    category: 'Property Law',
    title: 'Property Due Diligence: Legal Checklist for Buyers',
    excerpt: 'Essential legal verification steps before purchasing residential or commercial property.',
    author: 'Advocate Ravi Patel',
    date: 'January 2, 2025',
    readTime: '6 min',
    views: '1,423',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  'employment-law-updates-2025': {
    category: 'Employment Law',
    title: 'Employment Law Updates: What HR Teams Need to Know',
    excerpt: 'Latest changes in labor laws, compliance requirements, and best practices for employers.',
    author: 'Advocate Sunita Sharma',
    date: 'December 30, 2024',
    readTime: '6 min',
    views: '1,267',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  'digital-signature-certificate-guide': {
    category: 'Digital Services',
    title: 'Digital Signature Certificate: Complete Guide 2025',
    excerpt: 'How to obtain DSC, types, validity, and usage for legal document signing online.',
    author: 'CA Vikash Agarwal',
    date: 'December 28, 2024',
    readTime: '6 min',
    views: '1,089',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
}

const Container = styled.div`
  animation: ${fadeInUp} 0.6s ease;
  max-width: 800px;
  margin: 0 auto;
`

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${p => p.theme.colors.primary};
  font-weight: 600;
  margin-bottom: 24px;
  padding: 8px 0;
  
  &:hover {
    text-decoration: underline;
  }
`

const Header = styled.header`
  margin-bottom: 32px;
  
  .category {
    display: inline-block;
    background: rgba(20,107,102,.1);
    color: ${p => p.theme.colors.primary};
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 16px;
  }
  
  h1 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    line-height: 1.2;
    margin: 0 0 16px 0;
    color: ${p => p.theme.colors.text};
  }
  
  .meta {
    display: flex;
    gap: 20px;
    color: ${p => p.theme.colors.mutedText};
    font-size: 14px;
    margin-bottom: 24px;
  }
  
  .excerpt {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${p => p.theme.colors.mutedText};
    margin: 0;
  }
`

const FeaturedImage = styled.div`
  margin: 32px 0;
  border-radius: ${p => p.theme.radii.lg};
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.md};
`

const Content = styled.article`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${p => p.theme.colors.text};
  
  h2 {
    font-size: 1.5rem;
    margin: 32px 0 16px 0;
    color: ${p => p.theme.colors.text};
    font-weight: 700;
  }
  
  h3 {
    font-size: 1.3rem;
    margin: 24px 0 12px 0;
    color: ${p => p.theme.colors.text};
    font-weight: 600;
  }
  
  p {
    margin: 0 0 16px 0;
  }
  
  ul, ol {
    margin: 16px 0;
    padding-left: 24px;
  }
  
  li {
    margin: 8px 0;
  }
  
  blockquote {
    border-left: 4px solid ${p => p.theme.colors.primary};
    background: rgba(20,107,102,.05);
    padding: 16px 20px;
    margin: 24px 0;
    border-radius: 0 ${p => p.theme.radii.md} ${p => p.theme.radii.md} 0;
    font-style: italic;
  }
  
  .highlight-box {
    background: ${p => p.theme.gradients.hero};
    border: 1px solid ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radii.lg};
    padding: 24px;
    margin: 24px 0;
  }
  
  .info-card {
    background: ${p => p.theme.colors.surface};
    border: 1px solid ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radii.lg};
    padding: 20px;
    margin: 20px 0;
    box-shadow: ${p => p.theme.shadows.sm};
  }
`

const ShareSection = styled.div`
  margin: 48px 0;
  padding: 24px;
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  text-align: center;
  
  h3 {
    margin: 0 0 16px 0;
    color: ${p => p.theme.colors.text};
  }
  
  .share-buttons {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .share-btn {
    padding: 10px 16px;
    border-radius: ${p => p.theme.radii.pill};
    border: 1px solid ${p => p.theme.colors.border};
    background: ${p => p.theme.colors.surface};
    color: ${p => p.theme.colors.text};
    text-decoration: none;
    font-weight: 600;
    transition: all ${p => p.theme.transitions.base};
    
    &:hover {
      background: ${p => p.theme.colors.primary};
      color: white;
      border-color: ${p => p.theme.colors.primary};
    }
  }
`

const RelatedPosts = styled.section`
  margin: 48px 0;
  
  h3 {
    margin: 0 0 24px 0;
    color: ${p => p.theme.colors.text};
  }
  
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
`

const RelatedPostCard = styled(Link)`
  display: block;
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  overflow: hidden;
  transition: all ${p => p.theme.transitions.base};
  color: ${p => p.theme.colors.text};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${p => p.theme.shadows.md};
  }
  
  .image {
    height: 140px;
    background: ${p => p.theme.gradients.primary};
    display: grid;
    place-items: center;
    color: white;
    font-weight: 700;
    font-size: 14px;
  }
  
  .content {
    padding: 16px;
  }
  
  h4 {
    margin: 0 0 8px 0;
    font-size: 16px;
    line-height: 1.3;
  }
  
  p {
    margin: 0;
    color: ${p => p.theme.colors.mutedText};
    font-size: 14px;
    line-height: 1.4;
  }
`

export default function BlogDetail() {
  const { slug } = useParams()
  const post = blogPosts[slug]

  if (!post) {
    return (
      <Container>
        <h2>Blog post not found</h2>
        <p>Sorry, we couldn't find the blog post you're looking for.</p>
        <Link to="/blog">← Back to Blog</Link>
      </Container>
    )
  }

  const {
    category,
    title,
    excerpt,
    author,
    date,
    readTime,
    views,
    image
  } = post

  return (
    <Container>
      <BackLink to="/blog">← Back to Blog</BackLink>
      
      <Reveal as={Header}>
        <div className="category">{category}</div>
        <h1>{title}</h1>
        <div className="meta">
          <span>📅 {date}</span>
          <span>⏱️ {readTime} read</span>
          <span>👁️ {views} views</span>
          <span>✍️ {author}</span>
        </div>
        <p className="excerpt">{excerpt}</p>
      </Reveal>

      <Reveal as={FeaturedImage}>
        <WebImage 
          src={image}
          alt={title}
          priority
        />
      </Reveal>

      <Reveal as={Content}>
        <p>
          This comprehensive guide covers everything you need to know about {title.toLowerCase()}. 
          Our expert analysis provides you with actionable insights and practical steps to navigate 
          the legal requirements effectively.
        </p>

        <h2>Key Highlights</h2>
        <ul>
          <li>Step-by-step process explanation</li>
          <li>Required documents and procedures</li>
          <li>Timeline and cost considerations</li>
          <li>Common challenges and solutions</li>
          <li>Expert tips and best practices</li>
        </ul>

        <h2>Understanding the Process</h2>
        <p>
          {category} matters require careful attention to detail and proper documentation. 
          This guide breaks down complex legal procedures into manageable steps, ensuring 
          you have all the information needed to proceed confidently.
        </p>

        <div className="highlight-box">
          <strong>Expert Tip:</strong> Always consult with qualified legal professionals 
          before making important decisions. While this guide provides comprehensive 
          information, each situation is unique and may require specialized advice.
        </div>

        <h2>Step-by-Step Guide</h2>
        <p>
          Follow these carefully outlined steps to ensure compliance and avoid common pitfalls. 
          Each step includes detailed explanations and practical examples to guide you through 
          the process.
        </p>

        <ol>
          <li><strong>Initial Assessment:</strong> Evaluate your specific requirements and gather necessary information</li>
          <li><strong>Documentation:</strong> Prepare all required documents and ensure they meet legal standards</li>
          <li><strong>Application Process:</strong> Submit your application through appropriate channels</li>
          <li><strong>Follow-up:</strong> Monitor progress and respond to any queries or requirements</li>
          <li><strong>Completion:</strong> Receive final approval and maintain ongoing compliance</li>
        </ol>

        <h2>Common Challenges</h2>
        <p>
          Understanding potential obstacles can help you prepare better and avoid delays. 
          Here are the most common challenges people face and how to overcome them.
        </p>

        <div className="info-box">
          <strong>Need Professional Help?</strong> Our team of experienced legal professionals 
          is ready to assist you with your {category.toLowerCase()} needs. Contact us for 
          personalized guidance and support.
        </div>

        <h2>Conclusion</h2>
        <p>
          Successfully navigating {category.toLowerCase()} requirements doesn't have to be overwhelming. 
          With proper preparation, correct documentation, and expert guidance when needed, 
          you can complete the process efficiently and effectively.
        </p>

        <div className="highlight-box">
          <strong>Ready to get started?</strong> Get expert assistance from our certified professionals. 
          We handle the entire process while you focus on what matters most to you.
        </div>
      </Reveal>

      <Reveal as={ShareSection}>
        <h3>Found this helpful? Share with others!</h3>
        <div className="share-buttons">
          <a href="#" className="share-btn">📱 WhatsApp</a>
          <a href="#" className="share-btn">📘 Facebook</a>
          <a href="#" className="share-btn">🐦 Twitter</a>
          <a href="#" className="share-btn">💼 LinkedIn</a>
          <a href="#" className="share-btn">📧 Email</a>
        </div>
      </Reveal>

      <Reveal as={RelatedPosts}>
        <h3>Related Articles</h3>
        <div className="posts-grid">
          <RelatedPostCard to="/blog/msme-registration-benefits">
            <div className="image">MSME Benefits</div>
            <div className="content">
              <h4>MSME Registration Benefits and Process in 2025</h4>
              <p>Complete guide to Udyam registration and government benefits for small businesses.</p>
            </div>
          </RelatedPostCard>
          <RelatedPostCard to="/blog/trademark-registration-guide">
            <div className="image">Trademark Guide</div>
            <div className="content">
              <h4>Trademark Registration: Complete Guide for Businesses</h4>
              <p>Everything about trademark search, filing, and protection strategies.</p>
            </div>
          </RelatedPostCard>
          <RelatedPostCard to="/blog/business-structure-comparison">
            <div className="image">Business Structure</div>
            <div className="content">
              <h4>LLP vs Private Limited: Which is Right for Your Business?</h4>
              <p>Detailed comparison of business structures with tax and compliance insights.</p>
            </div>
          </RelatedPostCard>
        </div>
      </Reveal>
    </Container>
  )
} 