import styled from 'styled-components'
import StaticPage from './StaticPage'

const Section = styled.section`
  display: grid;
  gap: 8px;
  margin: 18px 0 10px;
`

const H3 = styled.h3`
  margin: 0;
`

const P = styled.p`
  margin: 0;
  color: ${p => p.theme.colors.mutedText};
`

export default function Services() {
  return (
    <StaticPage title="Services" subtitle="Comprehensive legal solutions you can trust.">
      <Section id="consultation">
        <H3>Online Consultation</H3>
        <P>Talk to verified legal experts via secure audio/video. Fast, private, and reliable.</P>
      </Section>
      <Section id="documents">
        <H3>Documentation</H3>
        <P>Draft, review, and customize legal documents such as agreements, NDAs, policies, and more.</P>
      </Section>
      <Section id="registrations">
        <H3>Registrations & Filings</H3>
        <P>GST, MSME, FSSAI, Trademark, ISO, IEC and other key registrations in one place.</P>
      </Section>
    </StaticPage>
  )
} 