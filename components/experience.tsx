"use client"

import { useState } from "react"

interface ExperienceItem {
  id: number
  company: string
  role: string
  period: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Creative Studios",
    role: "Senior Frontend Developer",
    period: "2023 - Present",
    description:
      "Leading frontend development initiatives, mentoring junior developers, and implementing advanced 3D visualization features.",
    skills: ["React", "Three.js", "WebGL", "TypeScript"],
  },
  {
    id: 2,
    company: "Digital Innovation Lab",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description:
      "Developed full-stack web applications with focus on performance optimization and user experience design.",
    skills: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 3,
    company: "Tech Startup",
    role: "Junior Developer",
    period: "2020 - 2021",
    description: "Started my career building responsive web applications and learning modern development practices.",
    skills: ["JavaScript", "React", "CSS", "Git"],
  },
]

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <section id="experience" className="py-20 px-6 bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-foreground/60">My professional journey and accomplishments</p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative group cursor-pointer"
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

              <div className="relative bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{exp.company}</h3>
                    <p className="text-lg font-semibold text-foreground mt-1">{exp.role}</p>
                  </div>
                  <span className="text-sm text-foreground/60 whitespace-nowrap ml-4">{exp.period}</span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${expandedId === exp.id ? "max-h-96" : "max-h-0"}`}
                >
                  <p className="text-foreground/70 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-primary font-medium">
                    {expandedId === exp.id ? "Show less" : "Show more"}
                  </div>
                  <svg
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${expandedId === exp.id ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
