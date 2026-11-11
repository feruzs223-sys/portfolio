"use client"

import { ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    title: "Qadoqlash dizayni",
    category: "Poligrafiya",
    description: "Premium mahsulot qadoqlash dizayni",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Brend identifikatsiyasi",
    category: "Logotip",
    description: "To'liq brend dizayn xizmati",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Reklama bannerlari",
    category: "SMM",
    description: "Ijtimoiy tarmoqlar uchun kreativlar",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Veb-sayt dizayni",
    category: "UI/UX",
    description: "Zamonaviy veb-interfeys dizayni",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Flyer va bukletlar",
    category: "Poligrafiya",
    description: "Chop etish uchun dizayn",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Motion Graphics",
    category: "Video",
    description: "Animatsiyali video kontentlar",
    color: "from-fuchsia-500/20 to-purple-500/20",
  },
]

export function PortfolioSection() {
  return (
    <section id="work" className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Poligrafiya <span className="text-primary">ishlari</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mening eng yaxshi dizayn ishlarim — brendlar, qadoqlash va marketing materiallari
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group glass glass-hover rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="text-6xl font-bold text-foreground/10 group-hover:scale-110 transition-transform duration-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <button className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                  Batafsil <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="glass glass-hover px-8 py-3.5 rounded-full font-medium inline-flex items-center gap-2 transition-all duration-300 hover:scale-105">
            Barcha ishlarni ko'rish <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
