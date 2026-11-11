"use client"

import { Phone, Mail, User, Send, MapPin } from "lucide-react"

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+998 94 252 81 51", href: "tel:+998942528151" },
  { icon: Mail, label: "Email", value: "feruzzzes@gmail.com", href: "mailto:feruzzzes@gmail.com" },
  { icon: User, label: "Username", value: "@feruzzzes", href: "https://t.me/feruzzzes" },
  { icon: MapPin, label: "Manzil", value: "O'zbekiston", href: null },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="glass rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left side - Profile */}
            <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
              <div className="relative mb-6">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden glass p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-4xl md:text-5xl font-bold text-primary">FS</span>
                    </div>
                  </div>
                </div>
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-glow-pulse" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">Feruz Safarov</h3>
              <p className="text-muted-foreground text-center lg:text-left mb-6">
                Kreativ dizayner va dasturchi
              </p>

              <a
                href="mailto:feruzzzes@gmail.com"
                className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(100,200,255,0.3)]"
              >
                <Send className="w-5 h-5" />
                Contact Me
              </a>
            </div>

            {/* Right side - Contact cards */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {contactInfo.map((item, index) => {
                const Wrapper = item.href ? 'a' : 'div'
                return (
                  <Wrapper
                    key={index}
                    {...(item.href ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined } : {})}
                    className="glass glass-hover p-6 rounded-2xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>
                  </Wrapper>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Feruz Safarov. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </section>
  )
}
