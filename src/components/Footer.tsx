import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import logoPixelCreation from "@/assets/logo-pixel-creation.png";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/pixelcreation", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/pixelcreation", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/pixelcreation", label: "Instagram" },
  ];

  return (
    <footer className="py-12 border-t border-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="#" className="flex items-center gap-2">
              <img src={logoPixelCreation} alt="Pixel Création Logo" className="w-10 h-10 object-contain" />
            </a>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass-card-glow flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm">
              <a href="mailto:melanielavas@outlook.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline font-mono text-xs">melanielavas@outlook.com</span>
              </a>
              <a href="tel:+18192937765" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline font-mono text-xs">819-293-7765</span>
              </a>
            </div>
          </div>

          <div className="border-t border-primary/10" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              {["Services", "Forfaits", "FAQ", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-xs font-mono tracking-wide uppercase">{item}</a>
              ))}
            </nav>
            <p className="text-xs text-muted-foreground font-mono">
              © 2025 Pixel Création. Tous droits réservés.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
