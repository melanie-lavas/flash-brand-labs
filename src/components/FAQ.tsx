import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { question: "Combien de temps prend la création d'un site web?", answer: "Le délai varie selon la complexité du projet. Un site vitrine simple peut être livré en 1-2 semaines, tandis qu'un site e-commerce complet peut prendre 4-6 semaines. Nous vous donnerons un délai précis après notre première consultation." },
  { question: "Est-ce que je peux modifier mon site moi-même après la livraison?", answer: "Absolument! Tous nos sites sont livrés avec un système de gestion de contenu facile à utiliser. Nous vous formons également pour que vous puissiez mettre à jour textes et images en toute autonomie." },
  { question: "Comment fonctionne la gestion des avis Google?", answer: "Nous mettons en place une stratégie pour encourager vos clients satisfaits à laisser des avis. Nous surveillons aussi votre réputation et vous aidons à répondre professionnellement aux avis négatifs." },
  { question: "Offrez-vous un service de maintenance?", answer: "Oui! Nous proposons des forfaits de maintenance mensuelle incluant les mises à jour de sécurité, sauvegardes régulières et support technique. Les tarifs varient selon vos besoins." },
  { question: "Comment se déroule le processus de création de marque?", answer: "Nous commençons par une session découverte pour comprendre votre vision. Ensuite, nous proposons plusieurs concepts de logo et d'identité visuelle. Après vos retours, nous peaufinons le design jusqu'à ce qu'il soit parfait." },
  { question: "Proposez-vous des plans de paiement?", answer: "Oui, nous offrons des facilités de paiement. Un acompte de 50% est requis au démarrage, et le solde peut être échelonné sur 2-3 mois selon le montant total du projet." },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary/60 tracking-[0.3em] uppercase mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de travailler avec nous
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card-glow rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6 text-sm">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
