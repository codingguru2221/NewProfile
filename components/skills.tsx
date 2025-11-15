"use client"

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "HTML/CSS"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Flask", "Spring Boot", "Tkinter", "MediaPipe"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "OpenCV", "APIs", "Cryptography"],
    },
    {
      category: "Specializations",
      skills: ["AI/ML", "Cybersecurity", "Full-Stack Development", "Web Development", "Computer Vision"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-foreground/60">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card/40 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-sm font-medium hover:bg-cyan-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
