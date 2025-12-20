import { motion } from "framer-motion";
import { Globe, Palette, Star, MapPin, Layout, Megaphone } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Création de marque",
    description: "Logo, identité visuelle et branding complet pour vous démarquer de la concurrence.",
  },
  {
    icon: Globe,
    title: "Sites web complets",
    description: "Sites modernes, rapides et optimisés pour convertir vos visiteurs en clients.",
  },
  {
    icon: MapPin,
    title: "Fiche Google Business",
    description: "Création et optimisation de votre fiche pour être visible localement.",
  },
  {
    icon: Star,
    title: "Gestion des avis",
    description: "Stratégie pour obtenir plus d'avis positifs et gérer votre réputation.",
  },
  {
    icon: Megaphone,
    title: "Marketing digital",
    description: "Publicités ciblées, SEO et stratégies pour attirer plus de clients.",
  },
  {
    icon: Layout,
    title: "Landing pages",
    description: "Pages de vente optimisées pour maximiser vos conversions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
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
              className="group gradient-border p-6 hover-glow transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
