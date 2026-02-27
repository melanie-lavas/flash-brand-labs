import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Printer, Github, Globe, Mail, User, ArrowRight, CheckCircle, Shield, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import logoPixelCreation from "@/assets/logo-pixel-creation.png";

const SiteTransfer = () => {
  const [clientName, setClientName] = useState("");
  const [siteDomain, setSiteDomain] = useState("");

  const handlePrint = () => window.print();

  const handleCopy = () => {
    const text = generateEmail();
    navigator.clipboard.writeText(text);
    toast.success("Courriel copié dans le presse-papiers!");
  };

  const generateEmail = () => {
    const name = clientName || "[Nom du client]";
    const domain = siteDomain || "[domaine.ca]";
    return `Bonjour,

Nous arrivons à l'étape finale du projet : la remise officielle de votre site web ${domain} et le transfert complet de sa gestion vers votre entreprise.

Afin de vous garantir la pleine propriété et le contrôle total de votre site web, il est nécessaire de créer vos accès sur les plateformes techniques utilisées pour son fonctionnement.

Plateformes utilisées pour votre site :
• GitHub – gestion du site web et des mises à jour
• Netlify – hébergement et mise en ligne du site

Merci de procéder à la création de vos comptes :

GitHub
https://github.com/signup

Netlify
https://app.netlify.com/signup

Nous vous recommandons d'utiliser votre adresse courriel professionnelle pour la gestion de ces comptes.

Une fois les comptes créés, merci de me transmettre :
• votre nom d'utilisateur GitHub
• l'adresse courriel utilisée pour Netlify

Dès réception de ces informations, je procéderai au transfert officiel de votre site, incluant :
• le code complet du site web
• l'hébergement et le système de déploiement
• la configuration actuelle du site
• la gestion future des mises à jour

À l'issue de ce transfert, votre entreprise deviendra l'administrateur principal de la plateforme et disposera d'un contrôle complet sur son site web.

Cette étape marque la finalisation du projet et l'entrée en exploitation complète de votre présence web.

Je reste disponible pour vous accompagner durant cette transition.

Merci.

Pixel Création
melanielavas@outlook.com`;
  };

  return (
    <>
      <Helmet>
        <title>Transfert de site | Pixel Création</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <style>{`
        @media print {
          @page { size: A4; margin: 1.5cm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white !important; color: black !important; }
          .print-hide { display: none !important; }
          .print-card { break-inside: avoid; border: 1px solid #ddd !important; background: white !important; }
          .print-card * { color: black !important; }
        }
      `}</style>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="print-hide bg-card border-b border-border sticky top-0 z-50">
          <div className="container px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={logoPixelCreation} alt="Pixel Création" className="w-10 h-10 object-contain" />
              <div>
                <h1 className="text-2xl font-bold gradient-text">Transfert de site</h1>
                <p className="text-sm text-muted-foreground">Procédure de remise au client</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleCopy} className="gap-2">
                <Copy className="w-4 h-4" />
                Copier le courriel
              </Button>
              <Button onClick={handlePrint} className="gap-2">
                <Printer className="w-4 h-4" />
                Imprimer
              </Button>
            </div>
          </div>
        </header>

        <main className="container px-4 py-8 max-w-4xl mx-auto">
          {/* Client info inputs */}
          <div className="print-hide bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Informations du client</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">Nom du client / entreprise</label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ex: SDG Enterprise"
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">Domaine du site</label>
                <input
                  type="text"
                  value={siteDomain}
                  onChange={(e) => setSiteDomain(e.target.value)}
                  placeholder="Ex: sdgenterprise.ca"
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm"
                />
              </div>
            </div>
          </div>

          {/* Preview / Printable document */}
          <div className="print-card bg-card border border-border rounded-lg p-8 shadow-lg">
            {/* Logo header for print */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
              <img src={logoPixelCreation} alt="Pixel Création" className="w-12 h-12 object-contain" />
              <div>
                <h2 className="text-xl font-bold text-foreground">Pixel Création</h2>
                <p className="text-sm text-muted-foreground">Transfert de site web</p>
              </div>
            </div>

            {/* Greeting */}
            <p className="text-foreground mb-6">Bonjour{clientName ? ` ${clientName}` : ""},</p>

            <p className="text-foreground mb-4">
              Nous arrivons à l'étape finale du projet : la remise officielle de votre site web{" "}
              <strong className="text-primary">{siteDomain || "[domaine.ca]"}</strong> et le transfert complet de sa gestion vers votre entreprise.
            </p>

            <p className="text-foreground mb-6">
              Afin de vous garantir la pleine propriété et le contrôle total de votre site web, il est nécessaire de créer vos accès sur les plateformes techniques utilisées pour son fonctionnement.
            </p>

            {/* Platforms */}
            <div className="bg-secondary/30 rounded-lg p-5 mb-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Plateformes utilisées pour votre site
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Github className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">GitHub</span>
                    <span className="text-muted-foreground"> – gestion du site web et des mises à jour</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Netlify</span>
                    <span className="text-muted-foreground"> – hébergement et mise en ligne du site</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Account creation */}
            <h3 className="font-semibold text-foreground mb-3">Merci de procéder à la création de vos comptes :</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="border border-border rounded-lg p-4 text-center">
                <Github className="w-8 h-8 text-foreground mx-auto mb-2" />
                <p className="font-semibold text-foreground mb-1">GitHub</p>
                <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer" className="text-primary text-sm underline break-all">
                  github.com/signup
                </a>
              </div>
              <div className="border border-border rounded-lg p-4 text-center">
                <Globe className="w-8 h-8 text-foreground mx-auto mb-2" />
                <p className="font-semibold text-foreground mb-1">Netlify</p>
                <a href="https://app.netlify.com/signup" target="_blank" rel="noopener noreferrer" className="text-primary text-sm underline break-all">
                  app.netlify.com/signup
                </a>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6 italic">
              Nous vous recommandons d'utiliser votre adresse courriel professionnelle pour la gestion de ces comptes.
            </p>

            {/* Info to send back */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Une fois les comptes créés, merci de me transmettre :
              </h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary shrink-0" />
                  votre nom d'utilisateur GitHub
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  l'adresse courriel utilisée pour Netlify
                </li>
              </ul>
            </div>

            {/* What's included */}
            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                Le transfert officiel inclura :
              </h3>
              <ul className="space-y-2">
                {[
                  "le code complet du site web",
                  "l'hébergement et le système de déploiement",
                  "la configuration actuelle du site",
                  "la gestion future des mises à jour",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Final notes */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-5 mb-6">
              <p className="text-foreground flex items-start gap-2">
                <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                À l'issue de ce transfert, votre entreprise deviendra l'administrateur principal de la plateforme et disposera d'un contrôle complet sur son site web.
              </p>
            </div>

            <p className="text-foreground mb-4">
              Cette étape marque la finalisation du projet et l'entrée en exploitation complète de votre présence web.
            </p>

            <p className="text-foreground mb-8">
              Je reste disponible pour vous accompagner durant cette transition.
            </p>

            <p className="text-foreground font-medium">Merci.</p>

            {/* Signature */}
            <div className="mt-8 pt-4 border-t border-border flex items-center gap-3">
              <img src={logoPixelCreation} alt="Pixel Création" className="w-8 h-8 object-contain" />
              <div>
                <p className="font-semibold text-foreground text-sm">Pixel Création</p>
                <p className="text-xs text-muted-foreground">melanielavas@outlook.com</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SiteTransfer;
