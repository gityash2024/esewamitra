import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  opacity: ${p => (p.$visible ? 1 : 0)};
  transform: ${p => (p.$visible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 420ms ease, transform 420ms ease;
`

export default function Reveal({ as = 'div', children, threshold = 0.15, ...rest }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setVisible(true); return }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        io.disconnect()
      }
    }, { threshold })

    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [threshold])

  return (
    <Wrap as={as} ref={ref} $visible={visible} {...rest}>
      {children}
    </Wrap>
  )
} 