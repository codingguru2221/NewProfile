export const dynamic = 'force-static';

export async function GET(request: Request) {
  try {
    // Since LinkedIn API is restricted, we'll fetch from a public profile endpoint
    // For now, returning mock data that you can customize
    const linkedinData = {
      name: "Veerendra Vishwakarma",
      headline: "Engineering Student | AI & Cybersecurity Enthusiast",
      location: "India",
      profileUrl: "https://www.linkedin.com/in/veerendra-vishwakarma-041584393/",
      bio: "Passionate about building innovative solutions in AI and Cybersecurity. Hackathon participant and open-source contributor.",
      skills: ["Python", "React", "Machine Learning", "Cybersecurity", "Web Development", "JavaScript"],
      experience: [
        {
          title: "Engineering Student",
          company: "University",
          duration: "2022 - Present",
        },
      ],
    }

    return Response.json(linkedinData)
  } catch (error) {
    console.error("[v0] LinkedIn fetch error:", error)
    return Response.json({ error: "Failed to fetch LinkedIn data" }, { status: 500 })
  }
}
