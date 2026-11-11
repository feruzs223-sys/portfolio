"use client"

import { Award, Star, Trophy } from "lucide-react"

const certificates = [
  { title: "Graphic Design", issuer: "Adobe", year: "2023", icon: Award },
  { title: "Frontend Development", issuer: "freeCodeCamp", year: "2022", icon: Star },
  { title: "SMM Marketing", issuer: "Meta", year: "2023", icon: Trophy },
  { title: "Motion Graphics", issuer: "Skillshare", year: "2024", icon: Award },
]

export function ExperienceSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left side - Title and description */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Tajriba</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              +3 yillik <span className="text-primary">tajriba</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Men kreativ dizayn sohasida 3 yildan ortiq tajribaga egaman. Grafik dizayn, 
              video tahrirlash, veb-saytlar ishlab chiqish va ijtimoiy tarmoqlarni boshqarish 
              bo'yicha professionalman. Har bir loyihaga ijodiy yondashaman va mijozlarimning 
              ehtiyojlarini to'liq qondiraman.
            </p>

            <div className="flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Loyihalar</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Mijozlar</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Mamnunlik</div>
              </div>
            </div>
          </div>

          {/* Right side - Certificates */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="glass glass-hover p-6 rounded-2xl transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1 text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-primary mt-2">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
