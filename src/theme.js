import { createGlobalStyle } from 'styled-components'

const base = {
  radii: { sm: '8px', md: '12px', lg: '16px', pill: '9999px' },
  shadows: {
    sm: '0 2px 6px rgba(8, 23, 33, 0.06)',
    md: '0 8px 24px rgba(8, 23, 33, 0.12)',
    lg: '0 16px 40px rgba(8, 23, 33, 0.16)'
  },
  layout: { maxWidth: '1240px' },
  breakpoints: { sm: '480px', md: '768px', lg: '1024px', xl: '1280px' },
  transitions: { fast: '120ms ease', base: '200ms ease', slow: '320ms ease' },
  z: { header: 1000, dropdown: 1100, modal: 2000 },
  typography: {
    body: "'Noto Sans', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    heading: "'Montserrat', 'Noto Sans', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
  },
  gradients: {
    primary: 'linear-gradient(135deg, #0D3B4A 0%, #146B66 100%)',
    accent: 'linear-gradient(135deg, #F2994A 0%, #F2C94C 100%)',
    hero: 'linear-gradient(135deg, rgba(20,107,102,0.12) 0%, rgba(242,153,74,0.08) 100%)',
    glass: 'linear-gradient(135deg, rgba(255,255,255,0.60) 0%, rgba(255,255,255,0.30) 100%)'
  }
}

export const theme = {
  ...base,
  mode: 'light',
  colors: {
    // Brand guideline-inspired teal/green palette
    primary: '#146B66',      // Deep teal
    primaryDark: '#0D3B4A',  // Navy teal
    accent: '#2BBFA3',       // Mint-teal accent
    accentDark: '#1E9E89',
    background: '#F5FAF8',   // Subtle greenish white
    surface: '#FFFFFF',
    surfaceVariant: '#F8FCFB', // Light greenish surface for footer
    text: '#0E1B22',
    mutedText: '#486873',
    border: '#E3EEE9',
    success: '#1FA37D',
    warning: '#C9821B',
    danger: '#C23A3A'
  }
}

export const darkTheme = {
  ...base,
  mode: 'dark',
  colors: {
    primary: '#37E1C6',
    primaryDark: '#1AA992',
    accent: '#EFC14A',
    accentDark: '#D6A637',
    background: '#0B1214',
    surface: '#121A1D',
    text: '#E6F1EE',
    mutedText: '#9EB6B0',
    border: '#203237',
    success: '#37D0A8',
    warning: '#F2B94A',
    danger: '#F06262'
  }
}

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: ${props => props.theme.typography.body};
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.typography.heading};
    letter-spacing: -0.01em;
  }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  button { font: inherit; }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
  }
` 