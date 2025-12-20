import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essentiel",
    price: "497",
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
    price: "997",
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
    <section id="forfaits" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
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
                  ? "gradient-border glow-effect"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Populaire
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.price !== "Sur mesure" && <span className="text-muted-foreground text-xl">$</span>}
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  {plan.price !== "Sur mesure" && <span className="text-muted-foreground">/projet</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#contact">Choisir ce forfait</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
