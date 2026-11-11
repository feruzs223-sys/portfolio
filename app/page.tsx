import { HeroSection } from "@/components/sections/hero-section"
import { Navigation } from "@/components/navigation"
import { FloatingParticles } from "@/components/floating-particles"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <FloatingParticles />
      <Navigation />
      <PageTransition>
        <HeroSection />
        
        {/* Intro Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Men — Feruz Safarov, professional kreativ dizayner. 3 yildan ortiq tajribam davomida 
                digital dizayn, brending va media ishlab chiqarish sohasida yuzlab loyihalarni 
                muvaffaqiyatli amalga oshirdim. Har bir loyihaga ijodiy yondashib, yuqori sifatli 
                natijalarni kafolatlayman.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  View Portfolio
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover font-medium transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured <span className="text-primary">Works</span>
              </h2>
              <Link
                href="/work"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Brand Identity", category: "Branding" },
                { title: "Packaging Design", category: "Print" },
                { title: "Social Media Kit", category: "Digital" },
              ].map((work, index) => (
                <Link
                  key={index}
                  href="/work"
                  className="group glass glass-hover rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-foreground/5">0{index + 1}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-primary mb-2">{work.category}</p>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {work.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Professional <span className="text-primary">Skills</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Adobe Photoshop, Illustrator, After Effects, Premiere Pro, Figma va boshqa 
                    professional dasturlardan foydalanib, kreativ loyihalarni amalga oshiraman.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Learn more about me
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {["Ps", "Ai", "Ae", "Pr", "Fg", "Xd"].map((tool, index) => (
                    <div
                      key={tool}
                      className="aspect-square glass glass-hover rounded-2xl flex items-center justify-center text-2xl font-bold text-primary transition-all duration-300 hover:scale-110"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </PageTransition>
    </main>
  )
}
