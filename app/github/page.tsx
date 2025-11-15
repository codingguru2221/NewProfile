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
  login: string
  avatar_url: string
}

export default function GitHubPage() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState<"stars" | "forks" | "recent">("stars")

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("/api/github")
        const data = await response.json()

        if (data.repos) {
          setRepos(data.repos)
          setStats(data.stats)
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

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortBy === "stars") return b.stargazers_count - a.stargazers_count
    if (sortBy === "forks") return b.forks_count - a.forks_count
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  })

  return (
    <main className="w-full bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/40 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              TheCOdex
            </div>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/projects" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/github" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
              GitHub
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/blog" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a href="/" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
              Team
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/" className="text-foreground/70 hover:text-cyan-400 transition duration-300 relative group">
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

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* GitHub Profile Section */}
          {stats && (
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    GitHub Profile
                  </h1>
                  <p className="text-2xl font-semibold text-foreground mb-2">{stats.login}</p>
                  <p className="text-foreground/60 text-lg mb-6">{stats.bio}</p>
                  {stats.location && <p className="text-foreground/60 mb-8">📍 {stats.location}</p>}
                  <a
                    href={`https://github.com/${stats.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Visit GitHub Profile →
                  </a>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                    <div className="text-4xl font-bold text-cyan-400">{stats.followers}</div>
                    <div className="text-foreground/60 mt-2">Followers</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                    <div className="text-4xl font-bold text-cyan-400">{stats.publicRepos}</div>
                    <div className="text-foreground/60 mt-2">Public Repos</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                    <div className="text-4xl font-bold text-cyan-400">{stats.following}</div>
                    <div className="text-foreground/60 mt-2">Following</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                    <div className="text-4xl font-bold text-cyan-400">{repos.length}</div>
                    <div className="text-foreground/60 mt-2">Total Repos</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sort Options */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              All Repositories ({repos.length})
            </h2>
            <div className="flex gap-4">
              <button
                onClick={() => setSortBy("stars")}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  sortBy === "stars"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50"
                }`}
              >
                Most Stars
              </button>
              <button
                onClick={() => setSortBy("forks")}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  sortBy === "forks"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50"
                }`}
              >
                Most Forks
              </button>
              <button
                onClick={() => setSortBy("recent")}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  sortBy === "recent"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50"
                }`}
              >
                Recently Updated
              </button>
            </div>
          </div>

          {/* Repositories List */}
          {loading ? (
            <div className="text-center text-foreground/60">Loading repositories...</div>
          ) : (
            <div className="space-y-4">
              {sortedRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-gradient-to-r from-cyan-500/5 to-blue-500/5 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-1">
                          {repo.name}
                        </h3>
                        <p className="text-foreground/70">{repo.description || "No description available"}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center text-sm">
                      {repo.language && (
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                        ⭐ {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1 text-blue-400 font-semibold">
                        🔀 {repo.forks_count}
                      </span>
                      <span className="text-foreground/50 ml-auto">
                        Updated {new Date(repo.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
