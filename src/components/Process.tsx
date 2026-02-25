import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Rocket, ThumbsUp } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "01", title: "Consultation gratuite", description: "On discute de votre projet, vos objectifs et vos besoins. Aucun engagement." },
  { icon: Lightbulb, step: "02", title: "Proposition sur mesure", description: "Nous préparons une soumission détaillée adaptée à votre budget et vos attentes." },
  { icon: Rocket, step: "03", title: "Réalisation", description: "Notre équipe se met au travail. Vous êtes informé à chaque étape du processus." },
  { icon: ThumbsUp, step: "04", title: "Livraison et suivi", description: "Votre projet est livré et nous restons disponibles pour tout ajustement." },
];

const Process = () => {
  return (
    <section id="processus" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/8 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary/60 tracking-[0.3em] uppercase mb-4 block">Comment ça marche</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Notre <span className="gradient-text">processus</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, transparent et efficace
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <div className="relative inline-flex">
                <div className="w-20 h-20 rounded-2xl glass-card-glow flex items-center justify-center mb-4 mx-auto border-primary/10">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-xs font-mono font-bold">
                  {item.step}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
