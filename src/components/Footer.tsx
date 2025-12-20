import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://facebook.com/pixelcreation", // À remplacer par votre vraie page
      label: "Facebook" 
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/pixelcreation", // À remplacer par votre vrai profil
      label: "LinkedIn" 
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/pixelcreation", // À remplacer par votre vrai profil
      label: "Instagram" 
    },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="text-lg font-bold text-foreground">Pixel<span className="gradient-text">Création</span></span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Contact Quick Links */}
            <div className="flex items-center gap-4 text-sm">
              <a 
                href="mailto:melanielavas@outlook.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">melanielavas@outlook.com</span>
              </a>
              <a 
                href="tel:+18192937765" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">819-293-7765</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#forfaits" className="text-muted-foreground hover:text-foreground transition-colors">Forfaits</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2025 Pixel Création. Tous droits réservés.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
