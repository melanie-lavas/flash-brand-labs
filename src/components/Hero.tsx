import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, Wifi, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingIcons = [
  { Icon: Cpu, delay: 0, x: "10%", y: "20%" },
  { Icon: Wifi, delay: 1.5, x: "85%", y: "30%" },
  { Icon: Shield, delay: 3, x: "15%", y: "70%" },
  { Icon: Zap, delay: 2, x: "80%", y: "75%" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      {/* Orbiting ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5 animate-spin-slow pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent/40" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-accent/5 animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "30s" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/30" />
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex items-center justify-center w-10 h-10 rounded-lg glass-card text-primary/30"
          style={{ left: x, top: y }}
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="w-5 h-5" />
        </motion.div>
      ))}

      {/* Horizontal scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, hsl(185 100% 50%), hsl(185 100% 50%) 1px, transparent 1px, transparent 4px)",
        backgroundSize: "100% 4px"
      }} />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 neon-border glass-card px-5 py-2.5 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary/80 tracking-wider uppercase">Pixel Création</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Propulsez votre<br />
            <span className="gradient-text">présence en ligne</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Création de marque, sites web, fiches Google, gestion des avis — 
            tout ce qu'il faut pour dominer le marché digital.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="flex items-center gap-2">
                Demander une soumission
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#services" className="neon-border rounded-xl">Découvrir nos services</a>
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary/10"
          >
            {[
              { value: "150+", label: "Clients satisfaits" },
              { value: "98%", label: "Taux de satisfaction" },
              { value: "5★", label: "Avis Google" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 font-mono">{stat.value}</div>
                <div className="text-sm text-muted-foreground tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
