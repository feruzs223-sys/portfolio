"use client"

import { Navigation } from "@/components/navigation"
import { FloatingParticles } from "@/components/floating-particles"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Phone, Mail, User, Send, MapPin, Instagram, MessageCircle } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+998 94 252 81 51", href: "tel:+998942528151" },
  { icon: Mail, label: "Email", value: "feruzzzes@gmail.com", href: "mailto:feruzzzes@gmail.com" },
  { icon: User, label: "Telegram", value: "@feruzzzes", href: "https://t.me/feruzzzes" },
  { icon: MapPin, label: "Manzil", value: "O'zbekiston", href: null },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/feruzzzes", color: "from-pink-500 to-rose-500" },
  { icon: MessageCircle, label: "Telegram", href: "https://t.me/feruzzzes", color: "from-blue-500 to-cyan-500" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = `mailto:feruzzzes@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Salom, mening ismim ${formData.name}.\n\n${formData.message}\n\nEmail: ${formData.email}`)}`
  }

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
                <span className="text-sm text-muted-foreground">Aloqa</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Contact <span className="text-primary">Me</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Loyihangiz haqida gaplashishga tayyorman. Menga xabar yuboring!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left Side - Profile & Contact Info */}
              <div className="space-y-8">
                {/* Profile Card */}
                <div className="glass rounded-3xl p-8">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden glass p-1">
                        <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <span className="text-3xl font-bold text-primary">FS</span>
                        </div>
                      </div>
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl -z-10" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h2 className="text-2xl font-bold mb-2">Feruz Safarov</h2>
                      <p className="text-muted-foreground mb-4">Kreativ Dizayner & Developer</p>
                      <div className="flex gap-3 justify-center sm:justify-start">
                        {socialLinks.map((social) => (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 glass glass-hover rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                            aria-label={social.label}
                          >
                            <social.icon className="w-5 h-5 text-primary" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((item, index) => {
                    const Wrapper = item.href ? 'a' : 'div'
                    return (
                      <Wrapper
                        key={index}
                        {...(item.href ? { 
                          href: item.href, 
                          target: item.href.startsWith('http') ? '_blank' : undefined, 
                          rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined 
                        } : {})}
                        className="glass glass-hover p-5 rounded-2xl transition-all duration-300 group cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                            <p className="font-medium text-foreground truncate">{item.value}</p>
                          </div>
                        </div>
                      </Wrapper>
                    )
                  })}
                </div>

                {/* Quick CTA */}
                <a
                  href="mailto:feruzzzes@gmail.com"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
                >
                  <Send className="w-5 h-5" />
                  Contact Me
                </a>
              </div>

              {/* Right Side - Contact Form */}
              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">Xabar yuborish</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                        Ismingiz
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
                      Mavzu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="Loyiha haqida"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                      Xabar
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Xabaringizni yozing..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-300 hover:bg-primary/90 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Yuborish
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </PageTransition>
    </main>
  )
}
