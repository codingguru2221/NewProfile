"use client"

import { useState, useEffect } from "react"

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="w-full bg-background min-h-screen pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            TheCOdex
          </a>
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-foreground/70 hover:text-cyan-400 transition duration-300">
              Home
            </a>
            <a href="/about" className="text-cyan-400">
              About
            </a>
            <a href="/projects" className="text-foreground/70 hover:text-cyan-400 transition duration-300">
              Projects
            </a>
            <a href="/blog" className="text-foreground/70 hover:text-cyan-400 transition duration-300">
              Blog
            </a>
            <a href="/github" className="text-foreground/70 hover:text-cyan-400 transition duration-300">
              GitHub
            </a>
            <a href="/#team" className="text-foreground/70 hover:text-cyan-400 transition duration-300">
              Team
            </a>
            <a href="/#contact" className="text-foreground/70 hover:text-cyan-400 transition duration-300">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-purple-500/20 to-transparent rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-foreground/60 mb-12 leading-relaxed">
              I'm Veerendra Vishwakarma, a 3rd-year engineering student passionate about building innovative technology
              solutions that make a real-world impact.
            </p>
          </div>

          <div
            className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-card/40 border border-cyan-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Background</h2>
              <p className="text-foreground/70 leading-relaxed">
                Currently pursuing engineering with a strong focus on Full-Stack Development, Artificial Intelligence,
                and Cybersecurity. I've participated in multiple hackathons and developed several projects that showcase
                my technical expertise.
              </p>
            </div>

            <div className="bg-card/40 border border-cyan-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Passion</h2>
              <p className="text-foreground/70 leading-relaxed">
                I'm driven by the desire to solve complex problems using technology. Whether it's building secure
                cryptographic solutions, AI-powered learning platforms, or scalable web applications, I love taking
                ideas from concept to reality.
              </p>
            </div>

            <div className="bg-card/40 border border-cyan-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Experience</h2>
              <ul className="text-foreground/70 space-y-3">
                <li>• Winner of multiple hackathon competitions</li>
                <li>• Full-Stack Development projects</li>
                <li>• AI and Machine Learning implementations</li>
                <li>• Cybersecurity research and tools</li>
              </ul>
            </div>

            <div className="bg-card/40 border border-cyan-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Goals</h2>
              <p className="text-foreground/70 leading-relaxed">
                To become a proficient full-stack engineer, contribute to open-source projects, and create technology
                that positively impacts society. Always learning, always growing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
