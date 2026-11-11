import { Navigation } from "@/components/navigation"
import { FloatingParticles } from "@/components/floating-particles"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Feruz Safarov",
  description: "Design, marketing and development insights from Feruz Safarov.",
}

const featuredPost = {
  title: "Brending asoslari: Logotipdan bosh tortmay boshqa narsalarni ham o'ylang",
  excerpt: "Brending — bu faqat logotip emas. Bu mijozlar bilan aloqa o'rnatish, ishonch qozonish va brendingizni boshqalardan ajratib turuvchi xususiyatlar yaratish jarayoni. Ushbu maqolada brending asoslarini ko'rib chiqamiz...",
  date: "2024-02-15",
  category: "Branding",
  readTime: "8 min",
  color: "from-primary/20 to-accent/10",
}

const blogPosts = [
  {
    title: "Grafik dizaynda rang nazariyasi",
    excerpt: "Ranglarning psixologiyasi va ularni brendingda to'g'ri qo'llash usullari haqida batafsil...",
    date: "2024-01-15",
    category: "Dizayn",
    readTime: "5 min",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "SMM strategiyasi qanday tuziladi?",
    excerpt: "Ijtimoiy tarmoqlarda muvaffaqiyatli marketing kampaniyalari yaratish sirlari...",
    date: "2024-01-10",
    category: "Marketing",
    readTime: "6 min",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Frontend texnologiyalari trendi",
    excerpt: "2024 yilda eng dolzarb veb-ishlab chiqish texnologiyalari va kutubxonalar...",
    date: "2024-01-05",
    category: "Development",
    readTime: "7 min",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Motion Graphics asoslari",
    excerpt: "After Effects da animatsiyalar yaratishni boshlash uchun kerakli bilimlar...",
    date: "2023-12-28",
    category: "Video",
    readTime: "10 min",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "UI/UX dizayn tamoyillari",
    excerpt: "Foydalanuvchi tajribasini yaxshilash uchun asosiy dizayn tamoyillari...",
    date: "2023-12-20",
    category: "Dizayn",
    readTime: "8 min",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Freelance dizayner sifatida ishlash",
    excerpt: "Mustaqil dizayner bo'lib ishlashning afzalliklari va qiyinchiliklari...",
    date: "2023-12-15",
    category: "Career",
    readTime: "6 min",
    color: "from-fuchsia-500/20 to-purple-500/20",
  },
]

export default function BlogPage() {
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
                <span className="text-sm text-muted-foreground">Blog</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Design <span className="text-primary">Blog</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dizayn, marketing va texnologiyalar haqida fikrlarim va tajribalarim
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <article className="group glass glass-hover rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.01] cursor-pointer">
              <div className="grid md:grid-cols-2 gap-0">
                <div className={`aspect-[4/3] md:aspect-auto bg-gradient-to-br ${featuredPost.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[150px] font-bold text-foreground/5">01</span>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="glass px-4 py-2 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString("uz-UZ", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold mb-8">Latest Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="group glass glass-hover rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                >
                  <div className={`h-44 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-foreground/5 group-hover:scale-110 transition-transform duration-500">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="glass px-3 py-1.5 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString("uz-UZ", { day: "numeric", month: "short" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-8">
                Yangi maqolalar va dizayn maslahatlarini birinchi bo'lib oling
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Email manzilingiz"
                  className="flex-1 px-5 py-3 rounded-full bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </PageTransition>
    </main>
  )
}
