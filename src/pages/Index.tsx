import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PulseDigital | Agence Marketing Digital à Montréal</title>
        <meta 
          name="description" 
          content="Agence marketing digital spécialisée en création de marque, sites web, fiches Google Business et gestion des avis. Propulsez votre présence en ligne." 
        />
        <meta name="keywords" content="marketing digital, création site web, fiche google, avis google, création marque, agence web montréal" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <Services />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
