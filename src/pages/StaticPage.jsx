import styled from 'styled-components'

const Wrap = styled.section`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: ${p => p.theme.shadows.sm};
  padding: 24px;
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
`

const Muted = styled.p`
  color: ${p => p.theme.colors.mutedText};
  margin-top: 0;
`

export default function StaticPage({ title, subtitle, children }) {
  return (
    <Wrap>
      <Title>{title}</Title>
      {subtitle ? <Muted>{subtitle}</Muted> : null}
      <div>
        {children}
      </div>
    </Wrap>
  )
} 