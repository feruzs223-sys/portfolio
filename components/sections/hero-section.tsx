"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const badges = [
  "Graphic Designer",
  "SMM Specialist",
  "Frontend Developer",
  "Motion Graphic",
  "Video Editor",
]

const floatingIcons = [
  { icon: "Ai", color: "#FF9A00", position: "top-20 left-10 md:left-20", delay: "0s" },
  { icon: "Ps", color: "#31A8FF", position: "top-32 right-10 md:right-32", delay: "1s" },
  { icon: "Fg", color: "#A259FF", position: "bottom-40 left-16 md:left-32", delay: "2s" },
  { icon: "Xd", color: "#FF61F6", position: "top-48 left-1/4", delay: "1.5s" },
  { icon: "Ae", color: "#9999FF", position: "bottom-32 right-20 md:right-40", delay: "0.5s" },
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      {/* Glowing sphere background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      </div>

      {/* Floating design tool icons */}
      {mounted && floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} hidden md:flex items-center justify-center w-12 h-12 rounded-xl glass animate-float`}
          style={{ 
            animationDelay: item.delay,
            boxShadow: `0 0 20px ${item.color}40`
          }}
        >
          <span 
            className="font-bold text-sm"
            style={{ color: item.color }}
          >
            {item.icon}
          </span>
        </div>
      ))}

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile image */}
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-bold text-primary">FS</span>
                </div>
              </div>
            </div>
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-glow-pulse" />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
              Feruz <span className="text-primary">Safarov</span>
            </h1>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="glass px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Kreativ dizayner va dasturchi. Grafik dizayn, video tahrirlash va veb-ishlab chiqish sohasida 3+ yillik tajriba.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/work"
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(100,200,255,0.3)]"
              >
                View Portfolio
              </a>
              <a
                href="/contact"
                className="glass glass-hover px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Pastga suring</span>
        <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
