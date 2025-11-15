"use client"

import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "CryptoShield",
    description:
      "Pendrive-Based Password Manager with hardware security. User credentials are accessible only when a registered pendrive is connected.",
    tags: ["Python", "Cryptography", "Tkinter", "Security"],
    image: "/cybersecurity-password-manager.jpg",
    link: "https://github.com/codingguru2221/CryptoShield",
  },
  {
    id: 2,
    title: "AI-Powered Study Platform",
    description:
      "Educational web app with syllabus creation, smart exam preparation, and study packages powered by Google Gemini API.",
    tags: ["Flask", "Google Gemini", "Python", "HTML/CSS/JS"],
    image: "/ai-learning-platform.jpg",
    link: "https://github.com/codingguru2221/Study-platform",
  },
  {
    id: 3,
    title: "College Event Hub",
    description:
      "Centralized platform to organize, manage, and promote college events with easy registration and updates.",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    image: "/event-management-system.jpg",
    link: "https://github.com/codingguru2221/College-Event-Hub",
  },
  {
    id: 4,
    title: "Friday AI Assistant",
    description:
      "Voice-controlled AI assistant inspired by JARVIS with weather updates, music playback, and smart conversations.",
    tags: ["Python", "AI", "Voice Control", "APIs"],
    image: "/ai-voice-assistant.jpg",
    link: "https://github.com/codingguru2221/Friday-the-A.I.-assistant",
  },
  {
    id: 5,
    title: "Hand Detection Cursor Control",
    description: "Python application using OpenCV and MediaPipe for hand gesture recognition and mouse cursor control.",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    image: "/hand-detection-gesture-recognition.jpg",
    link: "https://github.com/codingguru2221/Hand-detection-and-cursor-control",
  },
  {
    id: 6,
    title: "Currency Converter",
    description: "Java application for converting currency in multiple forms with real-time exchange rates.",
    tags: ["Java", "APIs", "Financial"],
    image: "/currency-exchange-app.jpg",
    link: "https://github.com/codingguru2221/Currency-Converter",
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="work" className="py-20 px-6 bg-gradient-to-b from-background via-background to-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/60">Showcasing my best work and technical achievements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                {/* Project image */}
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-muted/50 border border-cyan-500/10">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-foreground/60 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 border border-cyan-500/20 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover action */}
                <div className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-cyan-500/20">
                  View on GitHub →
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-cyan-500/30 border border-cyan-400/30"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  )
}
