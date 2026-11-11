"use client"

import { ArrowRight, Calendar } from "lucide-react"

const blogPosts = [
  {
    title: "Grafik dizaynda rang nazariyasi",
    excerpt: "Ranglarning psixologiyasi va ularni brendingda to'g'ri qo'llash usullari...",
    date: "2024-01-15",
    category: "Dizayn",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "SMM strategiyasi qanday tuziladi?",
    excerpt: "Ijtimoiy tarmoqlarda muvaffaqiyatli marketing kampaniyalari yaratish...",
    date: "2024-01-10",
    category: "Marketing",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Frontend texnologiyalari trendi",
    excerpt: "2024 yilda eng dolzarb veb-ishlab chiqish texnologiyalari va kutubxonalar...",
    date: "2024-01-05",
    category: "Development",
    color: "from-emerald-500/20 to-teal-500/20",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Blog</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            So'nggi <span className="text-primary">maqolalar</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dizayn, marketing va dasturlash sohasidagi tajribalarim va maslahatlarim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group glass glass-hover rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer"
            >
              <div className={`h-40 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="glass px-3 py-1.5 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <time>{new Date(post.date).toLocaleDateString("uz-UZ", { day: "numeric", month: "long", year: "numeric" })}</time>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                  O'qish <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
