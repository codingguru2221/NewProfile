"use client"

import { useEffect, useState } from "react"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
  skills: string[]
  social: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Veerendra Vishwakarma",
    role: "Full-Stack Developer & AI Enthusiast",
    image: "/developer-profile.png",
    bio: "3rd Year Engineering Student passionate about building innovative tech solutions.",
    skills: ["React", "Node.js", "AI/ML", "Cybersecurity"],
    social: {
      github: "https://github.com/codingguru2221",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Team Member 1",
    role: "Backend Developer",
    image: "/developer-profile.png",
    bio: "Experienced in building scalable backend systems and databases.",
    skills: ["Node.js", "MongoDB", "Docker", "AWS"],
    social: {
      github: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Team Member 2",
    role: "UI/UX Designer",
    image: "/designer-profile.png",
    bio: "Creative designer focused on user-centric design solutions.",
    skills: ["Figma", "UI Design", "Prototyping", "Design Systems"],
    social: {
      github: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Team Member 3",
    role: "Data Scientist",
    image: "/scientist-profile.png",
    bio: "Specialized in machine learning and data analysis.",
    skills: ["Python", "TensorFlow", "Data Analysis", "ML Models"],
    social: {
      github: "#",
      linkedin: "#",
    },
  },
]

export default function Team() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="team" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Talented professionals working together to create innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group relative transition-all duration-1000 transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-card/40 border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-transparent to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-cyan-500/10 transition-all" />

                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-foreground/60 text-sm mb-4">{member.bio}</p>

                  <div className="mb-4">
                    <p className="text-xs text-foreground/50 mb-2 font-semibold">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-cyan-500/10">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-cyan-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-cyan-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.25-.129.599-.129.948v5.439h-3.554s.047-8.733 0-9.65h3.554v1.367c.43-.664 1.199-1.608 2.920-1.608 2.134 0 3.733 1.39 3.733 4.37v5.521zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.704 0-.951.768-1.704 1.959-1.704 1.188 0 1.914.753 1.939 1.704 0 .946-.751 1.704-1.983 1.704zm1.586 11.02H3.73V9.782h3.193v10.67zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
