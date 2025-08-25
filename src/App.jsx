import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './theme'
import { Layout } from './components/Layout'
import ScrollToTop from './routerGuard'
import AnimatedBackground from './components/AnimatedBackground'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Services from './pages/Services'
import Consult from './pages/Consult'
import NotFound from './pages/NotFound'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'

// Service Pages
import Consultation from './pages/services/Consultation'
import Documentation from './pages/services/Documentation'
import Property from './pages/services/Property'
import Business from './pages/services/Business'
import FormsSubmission from './pages/services/FormsSubmission'
import EStamp from './pages/services/EStamp'

// Registration Pages
import GST from './pages/registrations/GST'
import MSME from './pages/registrations/MSME'
import Trademark from './pages/registrations/Trademark'
import FSSAI from './pages/registrations/FSSAI'
import ISO from './pages/registrations/ISO'
import IEC from './pages/registrations/IEC'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatedBackground />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/consult" element={<Consult />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/blog/gst-registration-guide-2025" element={<BlogDetail />} />
            <Route path="/blog/business-structure-comparison" element={<BlogDetail />} />
            <Route path="/blog/msme-registration-benefits" element={<BlogDetail />} />
            <Route path="/blog/trademark-registration-guide" element={<BlogDetail />} />
            <Route path="/blog/property-due-diligence-checklist" element={<BlogDetail />} />
            <Route path="/blog/employment-law-updates-2025" element={<BlogDetail />} />
            <Route path="/blog/digital-signature-certificate-guide" element={<BlogDetail />} />
            
            {/* Service Routes */}
            <Route path="/services/consultation" element={<Consultation />} />
            <Route path="/services/govt-documents" element={<Documentation />} />
            <Route path="/services/forms-submission" element={<FormsSubmission />} />
            <Route path="/services/e-stamp" element={<EStamp />} />
            <Route path="/services/documentation" element={<Documentation />} />
            <Route path="/services/property" element={<Property />} />
            <Route path="/services/business" element={<Business />} />
            
            {/* Registration Routes */}
            <Route path="/registrations/gst" element={<GST />} />
            <Route path="/registrations/msme" element={<MSME />} />
            <Route path="/registrations/trademark" element={<Trademark />} />
            <Route path="/registrations/fssai" element={<FSSAI />} />
            <Route path="/registrations/iso" element={<ISO />} />
            <Route path="/registrations/iec" element={<IEC />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
