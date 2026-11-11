"use client"

import { Navigation } from "@/components/navigation"
import { FloatingParticles } from "@/components/floating-particles"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { ArrowRight, ExternalLink } from "lucide-react"
import { useState } from "react"

const categories = ["All", "Branding", "Print", "Digital", "Video"]

const portfolioItems = [
  {
    title: "Qadoqlash dizayni",
    category: "Print",
    description: "Premium mahsulot qadoqlash dizayni — zamonaviy va estetik yondashuv",
    color: "from-blue-500/20 to-cyan-500/20",
    tags: ["Packaging", "Label Design"],
  },
  {
    title: "Brend identifikatsiyasi",
    category: "Branding",
    description: "To'liq brend dizayn xizmati — logotipdan to brend kitobigacha",
    color: "from-pink-500/20 to-rose-500/20",
    tags: ["Logo", "Brand Book"],
  },
  {
    title: "Reklama bannerlari",
    category: "Digital",
    description: "Ijtimoiy tarmoqlar uchun kreativ bannerlar va postlar",
    color: "from-amber-500/20 to-orange-500/20",
    tags: ["Social Media", "Banners"],
  },
  {
    title: "Veb-sayt dizayni",
    category: "Digital",
    description: "Zamonaviy va responsiv veb-interfeys dizayni",
    color: "from-emerald-500/20 to-teal-500/20",
    tags: ["UI/UX", "Web Design"],
  },
  {
    title: "Flyer va bukletlar",
    category: "Print",
    description: "Professional chop etish uchun dizayn yechimlari",
    color: "from-indigo-500/20 to-blue-500/20",
    tags: ["Flyer", "Brochure"],
  },
  {
    title: "Motion Graphics",
    category: "Video",
    description: "Dinamik animatsiyali video kontentlar",
    color: "from-fuchsia-500/20 to-purple-500/20",
    tags: ["Animation", "After Effects"],
  },
  {
    title: "Mahsulot fotografiyasi",
    category: "Branding",
    description: "Professional mahsulot suratga olish va retuş",
    color: "from-cyan-500/20 to-blue-500/20",
    tags: ["Photography", "Retouching"],
  },
  {
    title: "Video tahrirlash",
    category: "Video",
    description: "Professional video montaj va color grading",
    color: "from-rose-500/20 to-pink-500/20",
    tags: ["Premiere Pro", "Color Grading"],
  },
  {
    title: "Vizit kartalar",
    category: "Print",
    description: "Kreativ biznes kartalari dizayni",
    color: "from-teal-500/20 to-emerald-500/20",
    tags: ["Business Card", "Print"],
  },
]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <FloatingParticles />
      <Navigation />
      <PageTransition>
        {/* Hero */}
        <section className="pt-32 pb-16 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Portfolio</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                My <span className="text-primary">Portfolio</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Mening eng yaxshi dizayn ishlarim — brendlar, qadoqlash, digital marketing va video kontentlar
              </p>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "glass glass-hover text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="group glass glass-hover rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <span className="text-7xl font-bold text-foreground/10 group-hover:scale-110 transition-transform duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Batafsil <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Loyihangiz bormi?
              </h2>
              <p className="text-muted-foreground mb-8">
                Keling, sizning g'oyangizni professional dizayn yechimlari bilan hayotga tatbiq etaylik
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Bog'lanish <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </PageTransition>
    </main>
  )
}
