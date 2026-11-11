import Link from "next/link"
import { Instagram, Send, Facebook, Youtube } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/feruzzzes", label: "Instagram" },
  { icon: Send, href: "https://t.me/feruzzzes", label: "Telegram" },
  { icon: Facebook, href: "https://facebook.com/feruzzzes", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@feruzzzes", label: "YouTube" },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              FS<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Professional creative designer with 3+ years of experience in graphic design, 
              branding, and digital media production.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass glass-hover rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Feruz Safarov. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with passion in Uzbekistan
          </p>
        </div>
      </div>
    </footer>
  )
}
