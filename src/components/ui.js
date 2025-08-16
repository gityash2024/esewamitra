import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  max-width: ${p => p.theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
`

const hoverLift = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-2px); }
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${p => (p.size === 'lg' ? '14px 22px' : p.size === 'sm' ? '8px 12px' : '12px 18px')};
  border-radius: ${p => p.theme.radii.pill};
  border: none;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: ${p => (p.variant === 'secondary' ? p.theme.colors.primary : 'white')};
  background: ${p => (p.variant === 'secondary' ? 'transparent' : p.theme.gradients.accent)};
  box-shadow: ${p => p.theme.shadows.sm};
  border: ${p => (p.variant === 'secondary' ? `2px solid ${p.theme.colors.primary}` : 'none')};
  transition: transform ${p => p.theme.transitions.base}, box-shadow ${p => p.theme.transitions.base};
  &:hover { animation: ${hoverLift} ${p => p.theme.transitions.base} forwards; box-shadow: ${p => p.theme.shadows.md}; }
  &:focus-visible { outline: 3px solid ${p => p.theme.colors.primary}; outline-offset: 2px; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`

export const Card = styled.div`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: ${p => p.theme.shadows.sm};
  padding: ${p => (p.compact ? '16px' : '24px')};
  transition: transform ${p => p.theme.transitions.base}, box-shadow ${p => p.theme.transitions.base};
  &:hover { transform: translateY(-4px); box-shadow: ${p => p.theme.shadows.lg}; }
`

export const GlassCard = styled(Card)`
  background: ${p => p.theme.gradients.glass};
  backdrop-filter: blur(10px) saturate(140%);
  border: 1px solid rgba(255,255,255,0.35);
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
  background: ${p => p.theme.colors.surface};
  color: ${p => p.theme.colors.text};
  transition: border-color ${p => p.theme.transitions.base}, box-shadow ${p => p.theme.transitions.base};
  &:focus { border-color: ${p => p.theme.colors.primary}; box-shadow: 0 0 0 4px rgba(10,90,138,0.10); outline: none; }
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
  min-height: 140px;
  background: ${p => p.theme.colors.surface};
  color: ${p => p.theme.colors.text};
  resize: vertical;
  transition: border-color ${p => p.theme.transitions.base}, box-shadow ${p => p.theme.transitions.base};
  &:focus { border-color: ${p => p.theme.colors.primary}; box-shadow: 0 0 0 4px rgba(10,90,138,0.10); outline: none; }
`

export const ModalOverlay = styled.div`
  position: fixed; inset: 0; background: rgba(0,0,0,0.35);
  display: ${p => (p.open ? 'grid' : 'none')};
  place-items: center; z-index: ${p => p.theme.z.modal};
`

export const Modal = styled.div`
  background: ${p => p.theme.colors.surface};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: ${p => p.theme.shadows.lg};
  max-width: 560px; width: 92%; padding: 24px;
`

// Web optimized image wrapper (placeholder interface for @web)
export const WebImage = styled.img.attrs(p => ({
  loading: p.priority ? 'eager' : 'lazy',
  decoding: 'async'
}))`
  width: 100%; height: auto; display: block; border-radius: ${p => p.rounded ? p.theme.radii.lg : 0};
  box-shadow: ${p => (p.shadow ? p.theme.shadows.md : 'none')};
`

export const Row = styled.div`
  display: flex; gap: ${p => p.gap || '16px'}; align-items: center; flex-wrap: wrap;
`

export const Grid = styled.div`
  display: grid; gap: ${p => p.gap || '24px'};
  grid-template-columns: ${p => p.cols || 'repeat(3, 1fr)'};
  @media (max-width: ${p => p.theme.breakpoints.lg}) { grid-template-columns: ${p => p.colsLg || 'repeat(2, 1fr)'}; }
  @media (max-width: ${p => p.theme.breakpoints.md}) { grid-template-columns: 1fr; }
` 