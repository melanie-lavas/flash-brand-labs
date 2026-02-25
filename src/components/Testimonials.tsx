import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie-Claude Tremblay",
    business: "Boutique Fleur de Lys",
    location: "Trois-Rivières",
    text: "Pixel Création a transformé notre présence en ligne. Notre fiche Google génère maintenant 3x plus d'appels qu'avant!",
    rating: 5,
  },
  {
    name: "Jean-François Bergeron",
    business: "Bergeron Construction",
    location: "Bécancour",
    text: "Un service exceptionnel et professionnel. Notre nouveau site web a augmenté nos demandes de soumission de 150%.",
    rating: 5,
  },
  {
    name: "Sophie Lavoie",
    business: "Salon Beauté Pure",
    location: "Nicolet",
    text: "Grâce à leur gestion des avis Google, nous avons maintenant une note de 4.9 étoiles. Nos clientes nous trouvent facilement!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary/60 tracking-[0.3em] uppercase mb-4 block">Témoignages</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ce que nos <span className="gradient-text">clients</span> disent
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des entreprises locales qui nous font confiance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-glow rounded-2xl p-8 relative holo-shimmer"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground/90 mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-primary/10 pt-4">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-primary font-mono">{testimonial.business}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
