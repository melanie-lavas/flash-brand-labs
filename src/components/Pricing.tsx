import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essentiel",
    price: "297",
    description: "Parfait pour démarrer votre présence en ligne",
    features: [
      "Fiche Google Business optimisée",
      "Logo professionnel",
      "5 publications réseaux sociaux",
      "Support par courriel",
      "Livraison en 7 jours",
    ],
    popular: false,
  },
  {
    name: "Croissance",
    price: "697",
    description: "L'offre complète pour développer votre entreprise",
    features: [
      "Tout du forfait Essentiel",
      "Site web 5 pages",
      "Stratégie SEO de base",
      "Gestion des avis Google",
      "10 publications mensuelles",
      "Support prioritaire",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "Sur mesure",
    description: "Solution personnalisée pour les entreprises ambitieuses",
    features: [
      "Tout du forfait Croissance",
      "Site web illimité",
      "Campagnes publicitaires",
      "Branding complet",
      "Gestionnaire dédié",
      "Rapports mensuels",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="forfaits" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary/60 tracking-[0.3em] uppercase mb-4 block">Tarification</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nos <span className="gradient-text">forfaits</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des solutions adaptées à tous les budgets et tous les besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "neon-border glass-card glow-effect"
                  : "glass-card-glow"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-xs font-mono font-semibold flex items-center gap-1 tracking-wider uppercase">
                    <Zap className="w-3 h-3" />
                    Populaire
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.price !== "Sur mesure" && <span className="text-muted-foreground text-xl">$</span>}
                  <span className="text-4xl font-bold gradient-text font-mono">{plan.price}</span>
                  {plan.price !== "Sur mesure" && <span className="text-muted-foreground text-sm">/projet</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className={`w-full ${!plan.popular ? "border-primary/20 hover:border-primary/50 hover:bg-primary/5" : ""}`}
                asChild
              >
                <a href="#contact" className="font-mono text-sm tracking-wide">Choisir ce forfait</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
