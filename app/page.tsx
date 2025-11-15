"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Team from "@/components/team"
import GitHubProjects from "@/components/github-projects"
import LinkedInProfile from "@/components/linkedin-profile"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="w-full bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/40 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            TheCOdex
          </div>
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/about" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/projects" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/blog" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/github" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
              GitHub
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#team" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
              Team
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-purple-500/20 to-transparent rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <Hero isLoaded={isLoaded} />
      <Projects />
      <GitHubProjects />
      <LinkedInProfile />
      <Skills />
      <Achievements />
      <Team />
      <Contact />
    </main>
  )
}
