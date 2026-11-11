"use client"

import { Instagram, Send, Facebook, Youtube } from "lucide-react"

const socialLinks = [
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://instagram.com", 
    color: "#E4405F",
    followers: "5K+"
  },
  { 
    name: "Telegram", 
    icon: Send, 
    href: "https://t.me", 
    color: "#0088CC",
    followers: "3K+"
  },
  { 
    name: "Facebook", 
    icon: Facebook, 
    href: "https://facebook.com", 
    color: "#1877F2",
    followers: "2K+"
  },
  { 
    name: "YouTube", 
    icon: Youtube, 
    href: "https://youtube.com", 
    color: "#FF0000",
    followers: "1K+"
  },
]

export function SocialSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Ijtimoiy tarmoqlar</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Meni <span className="text-primary">kuzating</span>
          </h2>
          <p className="text-muted-foreground">
            Yangi ishlarim va yangiliklar uchun ijtimoiy tarmoqlarda kuzating
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass glass-hover p-6 rounded-2xl flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105"
              style={{ 
                boxShadow: `0 0 0 0 ${social.color}00`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${social.color}30`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 0 ${social.color}00`
              }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${social.color}20` }}
              >
                <social.icon 
                  className="w-7 h-7 transition-colors"
                  style={{ color: social.color }}
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">{social.name}</h3>
                <p className="text-xs text-muted-foreground">{social.followers} obunachilar</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
