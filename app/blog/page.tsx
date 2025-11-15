"use client"

import { useState, useEffect } from "react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Full-Stack Development",
    excerpt: "A comprehensive guide to building modern full-stack applications with React and Node.js.",
    date: "Nov 15, 2024",
    category: "Web Development",
    readTime: "8 min read",
    image: "/full-stack-development.png",
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Developers",
    excerpt: "Essential security practices every developer should know to protect applications from threats.",
    date: "Nov 10, 2024",
    category: "Security",
    readTime: "10 min read",
    image: "/cybersecurity-network.png",
  },
  {
    id: 3,
    title: "Introduction to Machine Learning with Python",
    excerpt: "Learn the fundamentals of machine learning and build your first ML model with Python.",
    date: "Nov 5, 2024",
    category: "AI/ML",
    readTime: "12 min read",
    image: "/machine-learning-python.png",
  },
  {
    id: 4,
    title: "React Hooks: A Deep Dive",
    excerpt: "Master React Hooks and level up your component development skills.",
    date: "Oct 28, 2024",
    category: "React",
    readTime: "9 min read",
    image: "/react-hooks-concept.png",
  },
]

export default function Blog() {
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
            <a href="/projects" className="text-foreground/70 hover:text-cyan-400 transition duration-300">
              Projects
            </a>
            <a href="/blog" className="text-cyan-400">
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
              Blog & Insights
            </h1>
            <p className="text-xl text-foreground/60">Articles on development, AI, and technology</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className={`group bg-card/40 border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-cyan-500/10 transform ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground/50">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-foreground/60 text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-cyan-500/10">
                    <span className="text-xs text-foreground/50">{post.date}</span>
                    <a href="#" className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors">
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
