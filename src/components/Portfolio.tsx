import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Boutique Fleur de Lys",
    category: "BRANDING + WEB",
    description: "Identité visuelle complète et site e-commerce pour une boutique de fleurs à Trois-Rivières.",
    tags: ["Logo", "Site web", "SEO"],
    color: "from-primary/30 to-accent/20",
    metrics: "+250% de trafic web",
  },
  {
    title: "Bergeron Construction",
    category: "SITE WEB",
    description: "Site vitrine moderne avec portfolio de projets et formulaire de soumission intégré.",
    tags: ["Site web", "Google Business", "Avis"],
    color: "from-accent/30 to-primary/20",
    metrics: "+150% de soumissions",
  },
  {
    title: "Salon Beauté Pure",
    category: "MARKETING DIGITAL",
    description: "Stratégie digitale complète : fiche Google, gestion des avis et publicités ciblées.",
    tags: ["Google Business", "Avis", "Pub"],
    color: "from-primary/20 to-accent/30",
    metrics: "4.9★ sur Google",
  },
  {
    title: "Café du Quartier",
    category: "BRANDING",
    description: "Création de marque complète incluant logo, menu design et présence sur les réseaux sociaux.",
    tags: ["Logo", "Branding", "Réseaux sociaux"],
    color: "from-accent/20 to-primary/30",
    metrics: "+3x abonnés Instagram",
  },
  {
    title: "Plomberie Express",
    category: "LOCAL SEO",
    description: "Optimisation Google Business et site web one-page pour maximiser les appels locaux.",
    tags: ["Google Business", "Landing page", "SEO"],
    color: "from-primary/25 to-accent/25",
    metrics: "+80 appels/mois",
  },
  {
    title: "Studio Yoga Zen",
    category: "SITE WEB + MARKETING",
    description: "Site de réservation en ligne avec stratégie de contenu et campagnes publicitaires.",
    tags: ["Site web", "Marketing", "Pub"],
    color: "from-accent/25 to-primary/25",
    metrics: "+120 nouveaux membres",
  },
];

const filters = ["Tous", "Branding", "Site web", "Marketing", "SEO"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = activeFilter === "Tous"
    ? projects
    : projects.filter(p => p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())) || p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[150px]" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-primary/60 tracking-[0.3em] uppercase mb-4 block">Nos réalisations</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Notre <span className="gradient-text">portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des projets concrets qui ont transformé la présence digitale de nos clients
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_20px_hsl(185,100%,50%,0.3)]"
                  : "glass-card text-muted-foreground hover:text-primary hover:border-primary/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              layout
              className="group glass-card-glow rounded-2xl overflow-hidden holo-shimmer"
            >
              {/* Project Visual */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 cyber-grid opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-foreground/10 font-mono">{project.title.charAt(0)}</span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono text-primary bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full tracking-[0.15em]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Metric */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary/70 tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-accent font-semibold whitespace-nowrap ml-2">
                    {project.metrics}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
