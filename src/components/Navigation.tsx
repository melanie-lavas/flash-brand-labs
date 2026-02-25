import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import logoPixelCreation from "@/assets/logo-pixel-creation.png";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#forfaits", label: "Forfaits" },
  { href: "/contrats", label: "Contrats", isRoute: true },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img src={logoPixelCreation} alt="Pixel Création Logo" className="w-12 h-12 object-contain group-hover:drop-shadow-[0_0_8px_hsl(185,100%,50%,0.5)] transition-all duration-300" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-muted-foreground hover:text-primary transition-colors font-medium text-sm px-4 py-2 rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact" className="font-mono text-sm tracking-wide">Soumission gratuite</a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-primary/10"
            >
              <div className="flex flex-col gap-1 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-primary/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button variant="hero" size="lg" className="mt-2" asChild>
                  <a href="#contact" onClick={() => setIsOpen(false)}>Soumission gratuite</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
