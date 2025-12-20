import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Demande envoyée!",
      description: "Nous vous contacterons dans les 24 heures."
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };
  return <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Demandez votre <span className="gradient-text">soumission</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Parlez-nous de votre projet et recevez une estimation gratuite
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Parlons de votre projet</h3>
              <p className="text-muted-foreground">
                Que vous ayez une idée précise ou que vous cherchiez des conseils, 
                nous sommes là pour vous aider à atteindre vos objectifs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Courriel</p>
                  <p className="text-foreground font-medium">contact@pulsedigital.ca</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <p className="text-foreground font-medium">(514) 555-0123</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localisation</p>
                  <p className="text-foreground font-medium">Bécancour, Trois-Rivières, Nicolet</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <Input id="name" name="name" required placeholder="Jean Dupont" className="bg-secondary/50 border-border focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Courriel
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="jean@exemple.com" className="bg-secondary/50 border-border focus:border-primary" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Téléphone
                </label>
                <Input id="phone" name="phone" type="tel" placeholder="(514) 555-0123" className="bg-secondary/50 border-border focus:border-primary" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service souhaité
                </label>
                <select id="service" name="service" required className="w-full h-10 rounded-lg bg-secondary/50 border border-border px-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="">Sélectionnez un service</option>
                  <option value="brand">Création de marque</option>
                  <option value="website">Site web</option>
                  <option value="google">Fiche Google Business</option>
                  <option value="reviews">Gestion des avis</option>
                  <option value="marketing">Marketing digital</option>
                  <option value="package">Forfait complet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Décrivez votre projet
                </label>
                <Textarea id="message" name="message" required rows={4} placeholder="Parlez-nous de votre entreprise et de vos objectifs..." className="bg-secondary/50 border-border focus:border-primary resize-none" />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : <>
                    Envoyer ma demande
                    <Send className="w-5 h-5" />
                  </>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;