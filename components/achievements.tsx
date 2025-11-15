"use client"

export default function Achievements() {
  const achievements = [
    {
      title: "RNTU Tech-Fest Hackathon Winner",
      description:
        "Secured Second Place in the flagship Tech-Fest Hackathon at RNTU, demonstrating exceptional technical expertise.",
      year: "2024",
    },
    {
      title: "Navonmesh Hackathon",
      description: "University-level hackathon organized in collaboration with RNTU and SCOPE University.",
      year: "2024",
    },
    {
      title: "HackPrix Participant",
      description:
        "Innovative hackathon organized by Lord Institute, Hyderabad, focused on creativity and problem-solving.",
      year: "2023",
    },
    {
      title: "EcoCode Hackathon",
      description:
        "Organized by Bharati Vidyapeeth College of Engineering, Delhi, focusing on sustainable coding solutions.",
      year: "2023",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-to-b from-background via-background to-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hackathon Experience
          </h2>
          <p className="text-xl text-foreground/60">Achievements and recognitions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card/40 border border-cyan-500/20 p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {achievement.title}
                </h3>
                <span className="text-sm text-foreground/50 ml-4 flex-shrink-0">{achievement.year}</span>
              </div>
              <p className="text-foreground/70 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
