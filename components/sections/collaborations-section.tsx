"use client"

const collaborators = [
  "TechStart",
  "MediaPro",
  "BrandStudio",
  "CreativeHub",
  "DesignLab",
  "MarketingPlus",
]

export function CollaborationsSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Hamkorlik</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Hamkorlikda ishlagan <span className="text-primary">tashkilotlar</span>
          </h2>
        </div>

        {/* Logo carousel */}
        <div className="relative">
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
            {collaborators.map((name, index) => (
              <div
                key={index}
                className="glass glass-hover px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 cursor-default"
              >
                <span className="text-xl md:text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Sifat kafolati</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Qo'llab-quvvatlash</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Yillik tajriba</div>
          </div>
        </div>
      </div>
    </section>
  )
}
