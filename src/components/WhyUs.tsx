import { motion } from "framer-motion";
import { Zap, Heart, Shield, Clock, Award, Users } from "lucide-react";

const reasons = [
  { icon: Heart, title: "Service personnalisé", description: "Chaque projet est unique. Nous prenons le temps de comprendre vos besoins spécifiques." },
  { icon: Zap, title: "Résultats rapides", description: "Des solutions efficaces livrées dans des délais respectés." },
  { icon: Shield, title: "Expertise locale", description: "Nous connaissons le marché du Centre-du-Québec et ses particularités." },
  { icon: Clock, title: "Support continu", description: "Nous restons disponibles après la livraison pour vous accompagner." },
  { icon: Award, title: "Qualité garantie", description: "Satisfaction garantie ou nous retravaillons jusqu'à ce que vous soyez satisfait." },
  { icon: Users, title: "Approche humaine", description: "Une relation de proximité avec nos clients, pas juste un numéro." },
];

const WhyUs = () => {
  return (
    <section id="pourquoi" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary/60 tracking-[0.3em] uppercase mb-4 block">Nos avantages</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pourquoi <span className="gradient-text">nous choisir</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ce qui nous distingue des autres agences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-start gap-4 p-6 glass-card-glow rounded-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_hsl(185,100%,50%,0.15)] transition-all duration-500">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
