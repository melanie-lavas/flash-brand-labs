import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pixel Création | Marketing Digital à Bécancour, Trois-Rivières, Nicolet</title>
        <meta 
          name="description" 
          content="Pixel Création - Agence marketing digital spécialisée en création de marque, sites web, fiches Google Business et gestion des avis. Région Centre-du-Québec." 
        />
        <meta name="keywords" content="marketing digital, création site web, fiche google, avis google, création marque, agence web bécancour, trois-rivières, nicolet, centre-du-québec" />
        <link rel="canonical" href="https://pixelcreation.ca" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <Services />
          <WhyUs />
          <Process />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
