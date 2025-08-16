import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrap = styled.section`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  padding: 40px 24px;
  text-align: center;
  box-shadow: ${p => p.theme.shadows.sm};
`

const Title = styled.h1`
  margin: 0 0 6px 0;
  font-size: 40px;
`

const Subtitle = styled.p`
  margin: 0 0 20px 0;
  color: ${p => p.theme.colors.mutedText};
`

const Back = styled(Link)`
  display: inline-block;
  background: ${p => p.theme.colors.primary};
  color: white;
  padding: 10px 14px;
  border-radius: ${p => p.theme.radii.pill};
  &:hover { background: ${p => p.theme.colors.primaryDark}; }
`

export default function NotFound() {
  return (
    <Wrap>
      <Title>404</Title>
      <Subtitle>Page not found. The page you are looking for doesn't exist.</Subtitle>
      <Back to="/">Go Home</Back>
    </Wrap>
  )
} 