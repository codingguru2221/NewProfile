"use client"

import { useState, useEffect } from "react"

interface LinkedInData {
  name: string
  headline: string
  location: string
  profileUrl: string
  bio: string
  skills: string[]
}

export default function LinkedInProfile() {
  const [profile, setProfile] = useState<LinkedInData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLinkedInData = async () => {
      try {
        const response = await fetch("/api/linkedin")
        const data = await response.json()
        setProfile(data)
      } catch (error) {
        console.error("[v0] Error fetching LinkedIn data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLinkedInData()
  }, [])

  if (loading || !profile) {
    return null
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background via-background to-card/20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {profile.name}
              </h2>
              <p className="text-cyan-400 text-lg mb-2">{profile.headline}</p>
              <p className="text-foreground/60 mb-4 leading-relaxed">{profile.bio}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                View on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
