"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
  forks_count: number
  updated_at: string
}

interface GitHubStats {
  followers: number
  following: number
  publicRepos: number
  bio: string
  location: string
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("/api/github")
        const data = await response.json()

        if (data.repos) {
          const topRepos = data.repos.slice(0, 3)
          setRepos(topRepos)
        }
      } catch (error) {
        console.error("[v0] Error fetching GitHub data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
    const interval = setInterval(fetchGitHubData, 3600000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center text-foreground/60">Loading featured repositories...</div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background via-background to-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Repositories
          </h2>
          <p className="text-xl text-foreground/60">Live repositories synced from GitHub</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                <h3 className="text-xl font-bold mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {repo.name}
                </h3>
                <p className="text-foreground/60 mb-4 text-sm line-clamp-2 h-10">{repo.description || "No description"}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60">
                  {repo.language && <span className="flex items-center gap-1">● {repo.language}</span>}
                </div>

                <div className="flex gap-4 mb-4 text-sm">
                  <span className="flex items-center gap-1 text-yellow-500">
                    ⭐ {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-blue-400">
                    🔀 {repo.forks_count}
                  </span>
                </div>

                <div className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-cyan-500/20">
                  View Repository →
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link href="/github">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              View All Repositories →
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
