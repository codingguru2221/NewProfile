"use client"

import { useEffect, useState } from "react"

interface HeroProps {
  isLoaded: boolean
}

export default function Hero({ isLoaded }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute w-80 h-80 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-3xl blur-3xl"
          style={{
            left: "10%",
            top: "20%",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"
          style={{
            right: "5%",
            top: "40%",
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <div
          className={`mb-6 transition-all duration-1000 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full backdrop-blur-xl bg-cyan-500/10 border border-cyan-500/30 text-sm font-medium text-cyan-300 mb-8 shadow-lg shadow-cyan-500/10">
            ✨ Engineering Enthusiast & Tech Innovator
          </span>
        </div>

        <h1
          className={`text-6xl md:text-7xl font-bold mb-6 transition-all duration-1000 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Veerendra Vishwakarma
          </span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-foreground/70 mb-4 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          3rd Year Engineering Student
        </p>

        <p
          className={`text-lg md:text-xl text-foreground/60 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Passionate about AI, Cybersecurity, and Full-Stack Development. Currently working on CryptoShield and
          exploring innovative tech solutions through hackathons and real-world projects.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <a
            href="#work"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm border border-cyan-400/30"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-cyan-500/50 text-cyan-300 font-semibold hover:bg-cyan-500/10 transition-all backdrop-blur-sm hover:scale-105 hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 flex justify-center transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-cyan-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
