import { motion } from "framer-motion";
import { Globe, Palette, Star, MapPin, Layout, Megaphone } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Création de marque",
    description: "Logo, identité visuelle et branding complet pour vous démarquer de la concurrence.",
    tag: "BRANDING",
  },
  {
    icon: Globe,
    title: "Sites web complets",
    description: "Sites modernes, rapides et optimisés pour convertir vos visiteurs en clients.",
    tag: "WEB DEV",
  },
  {
    icon: MapPin,
    title: "Fiche Google Business",
    description: "Création et optimisation de votre fiche pour être visible localement.",
    tag: "LOCAL SEO",
  },
  {
    icon: Star,
    title: "Gestion des avis",
    description: "Stratégie pour obtenir plus d'avis positifs et gérer votre réputation.",
    tag: "REPUTATION",
  },
  {
    icon: Megaphone,
    title: "Marketing digital",
    description: "Publicités ciblées, SEO et stratégies pour attirer plus de clients.",
    tag: "MARKETING",
  },
  {
    icon: Layout,
    title: "Landing pages",
    description: "Pages de vente optimisées pour maximiser vos conversions.",
    tag: "CONVERSION",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary/60 tracking-[0.3em] uppercase mb-4 block">Ce que nous offrons</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nos <span className="gradient-text">services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des solutions complètes pour transformer votre présence digitale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card-glow rounded-xl p-6 holo-shimmer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:shadow-[0_0_30px_hsl(185,100%,50%,0.2)] transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-[10px] font-mono text-primary/40 tracking-[0.2em] mt-2">{service.tag}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
