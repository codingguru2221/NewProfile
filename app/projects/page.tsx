"use client"

import { useState, useEffect } from "react"

interface Project {
  id: number
  title: string
  description: string
  long_description: string
  image: string
  technologies: string[]
  github: string
  demo: string
  status: "completed" | "in-progress"
}

const projects: Project[] = [
  {
    id: 1,
    title: "CryptoShield",
    description: "Advanced cryptocurrency security tool",
    long_description:
      "CryptoShield is a comprehensive security solution for managing and securing cryptocurrency wallets. It implements advanced encryption algorithms and provides real-time security monitoring.",
    image: "/cryptocurrency-security.jpg",
    technologies: ["React", "Node.js", "Encryption", "Web3"],
    github: "https://github.com/codingguru2221",
    demo: "#",
    status: "completed",
  },
  {
    id: 2,
    title: "AI Study Platform",
    description: "Intelligent learning management system",
    long_description:
      "An AI-powered platform that personalizes learning experiences for students. Uses machine learning to adapt content based on individual learning patterns.",
    image: "/ai-learning-platform.png",
    technologies: ["React", "Python", "TensorFlow", "MongoDB"],
    github: "#",
    demo: "#",
    status: "completed",
  },
  {
    id: 3,
    title: "College Event Hub",
    description: "Event management system for colleges",
    long_description:
      "Comprehensive platform for managing college events with features for registration, announcements, and attendance tracking.",
    image: "/event-management-planning.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Express"],
    github: "#",
    demo: "#",
    status: "completed",
  },
]

export default function Projects() {
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
            <a href="/about" className="text-foreground/70 hover:text-cyan-400 transition duration-300">
              About
            </a>
            <a href="/projects" className="text-cyan-400">
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
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl text-foreground/60">Innovative solutions built with modern technologies</p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 transform ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                  />
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="text-3xl font-bold text-cyan-400 mb-3">{project.title}</h2>
                  <p className="text-foreground/70 mb-4 leading-relaxed">{project.long_description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all"
                    >
                      GitHub
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                      >
                        View Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
