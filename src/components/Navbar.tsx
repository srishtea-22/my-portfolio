'use client'
import { useState, useEffect } from "react"
import { Unbounded } from "next/font/google"
const unbounded = Unbounded({subsets: ['latin'], weight: '400', display: 'swap'})

export default function Navbar () {
  const [blur, setBlur] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxBlur = 0.8
      const maxScroll = 200
      const blur = Math.min(scrollY / maxScroll, 1) * maxBlur
      setBlur(blur)
    }
    window.addEventListener('scroll', handleScroll)
    return () =>  window.removeEventListener('scroll', handleScroll)
  }, [])

    return (
        <nav className="fixed top-0 right-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: 'transparent', backdropFilter: `blur(${blur * 10}px)`
        }}>
          <div className={`${unbounded.className} text-white px-6 py-5 flex justify-end items-center space-x-6 text-base`}>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

    )
}