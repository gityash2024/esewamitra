import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'

// Floating animation keyframes
const float1 = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
`

const float2 = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
  50% { transform: translateY(-30px) rotate(180deg) scale(1.1); }
`

const float3 = keyframes`
  0%, 100% { transform: translateX(0px) translateY(0px); }
  25% { transform: translateX(20px) translateY(-15px); }
  50% { transform: translateX(-10px) translateY(-25px); }
  75% { transform: translateX(-20px) translateY(-10px); }
`

const pulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
`

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
  pointer-events: none;
  
  /* Animated gradient background */
  background: linear-gradient(-45deg, 
    rgba(20,107,102,0.02), 
    rgba(43,191,163,0.03), 
    rgba(242,153,74,0.02), 
    rgba(20,107,102,0.04)
  );
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
`

const GeometricShape = styled.div`
  position: absolute;
  pointer-events: none;
  
  &.circle-1 {
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(20,107,102,0.1) 0%, rgba(20,107,102,0.02) 70%);
    border-radius: 50%;
    top: 10%;
    left: 15%;
    animation: ${float1} 20s ease-in-out infinite;
  }
  
  &.circle-2 {
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(43,191,163,0.08) 0%, rgba(43,191,163,0.01) 70%);
    border-radius: 50%;
    top: 60%;
    right: 20%;
    animation: ${float2} 25s ease-in-out infinite;
    animation-delay: 5s;
  }
  
  &.circle-3 {
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(242,153,74,0.06) 0%, rgba(242,153,74,0.01) 70%);
    border-radius: 50%;
    bottom: 30%;
    left: 60%;
    animation: ${float3} 18s ease-in-out infinite;
    animation-delay: 8s;
  }
  
  &.triangle-1 {
    width: 0;
    height: 0;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-bottom: 80px solid rgba(20,107,102,0.04);
    top: 40%;
    left: 80%;
    animation: ${float1} 22s ease-in-out infinite;
    animation-delay: 3s;
  }
  
  &.triangle-2 {
    width: 0;
    height: 0;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-bottom: 120px solid rgba(43,191,163,0.03);
    bottom: 15%;
    left: 10%;
    animation: ${float3} 28s ease-in-out infinite;
    animation-delay: 12s;
  }
  
  &.square-1 {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, rgba(20,107,102,0.05), rgba(43,191,163,0.03));
    border-radius: 15px;
    top: 20%;
    right: 40%;
    animation: ${float2} 24s ease-in-out infinite;
    animation-delay: 6s;
  }
  
  &.diamond-1 {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, rgba(242,153,74,0.04), rgba(20,107,102,0.03));
    transform: rotate(45deg);
    bottom: 60%;
    right: 15%;
    animation: ${float1} 26s ease-in-out infinite;
    animation-delay: 10s;
  }
`

const FloatingParticle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(20,107,102,0.3);
  border-radius: 50%;
  animation: ${float3} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  &.accent {
    background: rgba(43,191,163,0.4);
  }
  
  &.warm {
    background: rgba(242,153,74,0.3);
  }
`

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(20,107,102,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(20,107,102,0.02) 1px, transparent 1px);
  background-size: 100px 100px;
  animation: ${pulse} 10s ease-in-out infinite;
`

const WaveElement = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='rgba(20,107,102,0.03)'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${float3} 30s ease-in-out infinite;
`

export default function AnimatedBackground() {
  const particlesRef = useRef([])
  
  useEffect(() => {
    // Create random particles
    const createParticles = () => {
      const particles = []
      for (let i = 0; i < 15; i++) {
        particles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: 15 + Math.random() * 20,
          delay: Math.random() * 10,
          type: ['default', 'accent', 'warm'][Math.floor(Math.random() * 3)]
        })
      }
      particlesRef.current = particles
    }
    
    createParticles()
  }, [])
  
  return (
    <BackgroundContainer>
      <GridOverlay />
      
      {/* Geometric shapes */}
      <GeometricShape className="circle-1" />
      <GeometricShape className="circle-2" />
      <GeometricShape className="circle-3" />
      <GeometricShape className="triangle-1" />
      <GeometricShape className="triangle-2" />
      <GeometricShape className="square-1" />
      <GeometricShape className="diamond-1" />
      
      {/* Floating particles */}
      {particlesRef.current.map(particle => (
        <FloatingParticle
          key={particle.id}
          className={particle.type}
          duration={particle.duration}
          delay={particle.delay}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
        />
      ))}
      
      <WaveElement />
    </BackgroundContainer>
  )
} 