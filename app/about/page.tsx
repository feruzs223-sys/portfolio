import { Navigation } from "@/components/navigation"
import { FloatingParticles } from "@/components/floating-particles"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { ExperienceSection } from "@/components/sections/experience-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { CollaborationsSection } from "@/components/sections/collaborations-section"
import { Award, Star, Trophy, Target, Heart, Lightbulb } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Feruz Safarov",
  description: "Learn more about Feruz Safarov - a creative designer with 3+ years of experience in graphic design, branding, and digital media.",
}

const values = [
  { icon: Target, title: "Maqsadga intilish", description: "Har bir loyihani mukammal yakunlashga intilamiz" },
  { icon: Heart, title: "Ijod sevgisi", description: "Dizayn - bu shunchaki ish emas, bu hayot tarzi" },
  { icon: Lightbulb, title: "Innovatsiya", description: "Yangi g'oyalar va yondashuvlarni doimo izlayman" },
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <FloatingParticles />
      <Navigation />
      <PageTransition>
        {/* Hero */}
        <section className="pt-32 pb-20 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Men haqimda</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                About <span className="text-primary">Me</span>
              </h1>
            </div>

            {/* Profile and Story */}
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Profile Image */}
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl animate-glow-pulse" />
                  
                  {/* Image container */}
                  <div className="relative glass rounded-3xl overflow-hidden aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                      <span className="text-8xl font-bold text-foreground/10">FS</span>
                    </div>
                    
                    {/* Floating badges */}
                    <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full animate-float">
                      <span className="text-sm font-medium">3+ Yil</span>
                    </div>
                    <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full animate-float-reverse">
                      <span className="text-sm font-medium">50+ Loyiha</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Mening <span className="text-primary">hikoyam</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Men — Feruz Safarov, O'zbekistonlik kreativ dizayner. 3 yildan ortiq 
                    tajribam davomida turli sohalardagi kompaniyalar bilan ishlashdan 
                    mamnunman.
                  </p>
                  <p>
                    Mening ixtisosligim — brending, grafik dizayn, ijtimoiy tarmoqlar 
                    marketingi (SMM), motion grafika va video tahrirlash. Har bir 
                    loyihaga individual yondashaman va mijozlarimning g'oyalarini 
                    kreativ yechimlarga aylantiraman.
                  </p>
                  <p>
                    Adobe Photoshop, Illustrator, After Effects, Premiere Pro, Figma 
                    va boshqa zamonaviy vositalardan professional darajada foydalanaman. 
                    Frontend development bo'yicha ham bilimlarimni oshirib bormoqdaman.
                  </p>
                </div>

                {/* Values */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {values.map((value, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-sm font-medium mb-1">{value.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ExperienceSection />
        <SkillsSection />
        <CollaborationsSection />
        <Footer />
      </PageTransition>
    </main>
  )
}
