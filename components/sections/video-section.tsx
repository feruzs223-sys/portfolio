"use client"

import { Play, Instagram, Send, Youtube, Facebook } from "lucide-react"

const socialIcons = [
  { icon: Instagram, color: "#E4405F", position: "-left-8 top-1/4" },
  { icon: Send, color: "#0088CC", position: "-right-8 top-1/3" },
  { icon: Youtube, color: "#FF0000", position: "-left-12 bottom-1/3" },
  { icon: Facebook, color: "#1877F2", position: "-right-12 bottom-1/4" },
]

export function VideoSection() {
  return (
    <section className="relative py-24 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Video xizmatlar</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Video <span className="text-primary">tahrirlash</span>
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            {/* Floating social icons */}
            {socialIcons.map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.position} hidden md:flex w-12 h-12 rounded-full glass items-center justify-center animate-float`}
                style={{ 
                  animationDelay: `${index * 0.5}s`,
                  boxShadow: `0 0 20px ${item.color}30`
                }}
              >
                <item.icon 
                  className="w-5 h-5" 
                  style={{ color: item.color }}
                />
              </div>
            ))}

            {/* Phone mockup */}
            <div className="relative w-64 md:w-72 glass rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-secondary rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                {/* Phone notch */}
                <div className="h-8 bg-background/50 flex items-center justify-center">
                  <div className="w-20 h-5 bg-background rounded-full" />
                </div>
                
                {/* Phone content */}
                <div className="flex flex-col items-center justify-center h-full pb-16 px-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 hover:bg-primary/30 transition-colors cursor-pointer group">
                    <Play className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Video MP4</h3>
                  <p className="text-xs text-muted-foreground text-center">
                    Professional video tahrirlash va motion graphics xizmati
                  </p>
                </div>

                {/* Phone home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full" />
              </div>
            </div>

            {/* Decorative rings */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border border-primary/10 animate-glow-pulse" />
            </div>
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full border border-primary/5 animate-glow-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
