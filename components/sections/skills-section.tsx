"use client"

import { 
  Palette, 
  Code, 
  Sparkles, 
  Video, 
  MessageSquare, 
  Globe,
  Cpu,
  FileText,
  Languages,
  Brain,
  Zap,
  Mic
} from "lucide-react"

const skillLevels = [
  {
    level: "Senior",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    skills: [
      { name: "Adobe Photoshop", icon: Palette },
      { name: "CorelDRAW", icon: Palette },
      { name: "Canva", icon: Sparkles },
      { name: "Office tools", icon: FileText },
      { name: "ChatGPT", icon: MessageSquare },
      { name: "O'zbek / Rus tili", icon: Languages },
    ]
  },
  {
    level: "Middle",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    skills: [
      { name: "Frontend Developer", icon: Code },
      { name: "Artificial Intelligence", icon: Cpu },
      { name: "SMM", icon: Globe },
    ]
  },
  {
    level: "Junior",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    skills: [
      { name: "Adobe After Effects", icon: Video },
      { name: "Adobe Premiere Pro", icon: Video },
      { name: "English language", icon: Languages },
      { name: "Logic skills", icon: Brain },
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Ko'nikmalar</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Professional <span className="text-primary">mahorat</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Har xil sohalarda to'plagan bilim va tajribalarim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillLevels.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`glass rounded-2xl p-6 border ${category.borderColor} transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                <Zap className="w-4 h-4 text-foreground" />
                <span className="text-sm font-semibold text-foreground">{category.level}</span>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
