"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-foreground/60">Reach out to me via email or social media</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div className="relative group">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-3 rounded-lg bg-card/40 border border-cyan-500/20 focus:border-cyan-500/50 outline-none transition-colors group-hover:border-cyan-500/30 text-foreground"
              required
            />
          </div>

          <div className="relative group">
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-3 rounded-lg bg-card/40 border border-cyan-500/20 focus:border-cyan-500/50 outline-none transition-colors group-hover:border-cyan-500/30 text-foreground"
              required
            />
          </div>

          <div className="relative group">
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-6 py-3 rounded-lg bg-card/40 border border-cyan-500/20 focus:border-cyan-500/50 outline-none transition-colors group-hover:border-cyan-500/30 resize-none text-foreground"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
          >
            {isSubmitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>

        {/* Contact info and social links */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-card/40 border border-cyan-500/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-cyan-400 mb-4">Email</h3>
            <a href="mailto:codexveer@gmail.com" className="text-foreground/70 hover:text-cyan-400 transition">
              codexveer@gmail.com
            </a>
          </div>
          <div className="bg-card/40 border border-cyan-500/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-cyan-400 mb-4">Social Links</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/codingguru2221"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-cyan-400 transition"
              >
                GitHub: codingguru2221
              </a>
              <a href="#" className="text-foreground/70 hover:text-cyan-400 transition">
                LinkedIn: (Add your profile)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
