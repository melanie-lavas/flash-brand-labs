import { Helmet } from "react-helmet-async";
import { Palette, Globe, MapPin, Star, Megaphone, Layout, CheckCircle, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceProcedures = [
  {
    icon: Palette,
    title: "Création de marque",
    steps: [
      { step: "1. Consultation initiale", details: "Discuter des valeurs, vision, cible et concurrence du client" },
      { step: "2. Recherche", details: "Analyser le marché, les tendances et les concurrents" },
      { step: "3. Moodboard", details: "Créer un tableau d'inspiration avec couleurs, typos et styles" },
      { step: "4. Concepts de logo", details: "Présenter 3 propositions de logo au client" },
      { step: "5. Révisions", details: "Affiner le logo choisi selon les retours (max 3 révisions)" },
      { step: "6. Charte graphique", details: "Documenter les couleurs, polices, et règles d'utilisation" },
      { step: "7. Livraison", details: "Fournir tous les fichiers (PNG, SVG, PDF) + charte graphique" },
    ],
    checklist: ["Brief client complété", "Recherche concurrence", "Moodboard approuvé", "Logo validé", "Fichiers livrés", "Charte remise"]
  },
  {
    icon: Globe,
    title: "Sites web complets",
    steps: [
      { step: "1. Analyse des besoins", details: "Définir objectifs, pages, fonctionnalités et contenu requis" },
      { step: "2. Maquette wireframe", details: "Créer la structure des pages principales" },
      { step: "3. Design visuel", details: "Appliquer la charte graphique et créer le design final" },
      { step: "4. Développement", details: "Coder le site avec responsive design inclus" },
      { step: "5. Contenu", details: "Intégrer textes, images et médias optimisés" },
      { step: "6. SEO de base", details: "Optimiser titres, meta descriptions, balises alt" },
      { step: "7. Tests", details: "Vérifier sur mobile, tablette, desktop + vitesse" },
      { step: "8. Mise en ligne", details: "Déployer et configurer domaine + SSL" },
      { step: "9. Formation", details: "Former le client à la gestion du site si applicable" },
    ],
    checklist: ["Brief validé", "Wireframe approuvé", "Design approuvé", "Site testé", "SEO configuré", "Client formé", "Site en ligne"]
  },
  {
    icon: MapPin,
    title: "Fiche Google Business",
    steps: [
      { step: "1. Vérification", details: "Vérifier si une fiche existe déjà ou en créer une nouvelle" },
      { step: "2. Informations de base", details: "Remplir nom, adresse, téléphone, horaires, catégorie" },
      { step: "3. Description", details: "Rédiger une description optimisée avec mots-clés locaux" },
      { step: "4. Photos", details: "Ajouter logo, photos de couverture, équipe, produits/services" },
      { step: "5. Services/Produits", details: "Lister tous les services avec descriptions et prix" },
      { step: "6. Attributs", details: "Configurer les attributs pertinents (paiements, accessibilité, etc.)" },
      { step: "7. Posts", details: "Créer le premier post de bienvenue" },
      { step: "8. Q&R", details: "Préparer des questions/réponses fréquentes" },
      { step: "9. Formation", details: "Montrer au client comment publier et répondre aux avis" },
    ],
    checklist: ["Fiche créée/réclamée", "Infos complètes", "Photos ajoutées", "Services listés", "Premier post publié", "Client formé"]
  },
  {
    icon: Star,
    title: "Gestion des avis",
    steps: [
      { step: "1. Audit initial", details: "Analyser les avis existants et la note actuelle" },
      { step: "2. Stratégie", details: "Définir objectifs et plan d'action pour obtenir plus d'avis" },
      { step: "3. Modèles de réponse", details: "Créer des templates de réponses aux avis positifs et négatifs" },
      { step: "4. Outils de collecte", details: "Mettre en place QR codes, liens courts, emails automatisés" },
      { step: "5. Formation équipe", details: "Former le personnel à demander des avis au bon moment" },
      { step: "6. Suivi mensuel", details: "Rapport sur les nouveaux avis et évolution de la note" },
      { step: "7. Gestion de crise", details: "Protocole pour gérer les avis négatifs ou faux avis" },
    ],
    checklist: ["Audit complété", "Stratégie définie", "Templates créés", "QR codes/liens fournis", "Équipe formée", "Suivi en place"]
  },
  {
    icon: Megaphone,
    title: "Marketing digital",
    steps: [
      { step: "1. Analyse", details: "Auditer la présence actuelle et identifier les opportunités" },
      { step: "2. Objectifs SMART", details: "Définir des objectifs mesurables (leads, ventes, trafic)" },
      { step: "3. Audiences cibles", details: "Créer les personas et définir le ciblage publicitaire" },
      { step: "4. Stratégie de contenu", details: "Planifier le calendrier éditorial et les types de contenu" },
      { step: "5. Configuration Ads", details: "Créer les comptes publicitaires et pixels de suivi" },
      { step: "6. Création campagnes", details: "Concevoir les visuels et textes publicitaires" },
      { step: "7. Lancement", details: "Activer les campagnes avec budget défini" },
      { step: "8. Optimisation", details: "Analyser les résultats et ajuster quotidiennement/hebdo" },
      { step: "9. Rapport", details: "Fournir un rapport mensuel avec recommandations" },
    ],
    checklist: ["Audit fait", "Objectifs définis", "Audiences créées", "Pixels installés", "Campagnes actives", "Rapport livré"]
  },
  {
    icon: Layout,
    title: "Landing pages",
    steps: [
      { step: "1. Objectif de conversion", details: "Définir l'action souhaitée (achat, inscription, appel)" },
      { step: "2. Offre irrésistible", details: "Créer une offre claire avec proposition de valeur" },
      { step: "3. Copywriting", details: "Rédiger les textes persuasifs (titre, bénéfices, CTA)" },
      { step: "4. Design", details: "Créer un design épuré focalisé sur la conversion" },
      { step: "5. Formulaire", details: "Configurer le formulaire de capture (simple et court)" },
      { step: "6. Éléments de confiance", details: "Ajouter témoignages, logos, garanties" },
      { step: "7. Tests A/B", details: "Préparer des variantes pour tester (titres, CTA, images)" },
      { step: "8. Tracking", details: "Installer les pixels de conversion et Analytics" },
      { step: "9. Publication", details: "Mettre en ligne et connecter aux campagnes pub" },
    ],
    checklist: ["Objectif défini", "Offre validée", "Copy approuvé", "Design approuvé", "Formulaire testé", "Tracking actif", "Page en ligne"]
  },
];

const ServiceProcedures = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Fiches de Procédures | Pixel Création</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header - Hidden on print */}
        <header className="print:hidden bg-card border-b border-border sticky top-0 z-50">
          <div className="container px-4 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold gradient-text">Fiches de Procédures</h1>
              <p className="text-sm text-muted-foreground">Pixel Création - Processus standardisés</p>
            </div>
            <Button onClick={handlePrint} className="gap-2">
              <Printer className="w-4 h-4" />
              Imprimer tout
            </Button>
          </div>
        </header>

        {/* Print styles */}
        <style>{`
          @media print {
            @page {
              size: A4;
              margin: 1cm;
            }
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
              background: white !important;
              color: black !important;
            }
            .print-card {
              break-inside: avoid;
              page-break-inside: avoid;
              border: 2px solid #333 !important;
              background: white !important;
              margin-bottom: 20px;
            }
            .print-card * {
              color: black !important;
            }
            .print-hide {
              display: none !important;
            }
            .print-title {
              font-size: 18px !important;
              font-weight: bold !important;
              border-bottom: 2px solid #333;
              padding-bottom: 8px;
              margin-bottom: 12px;
            }
          }
        `}</style>

        {/* Content */}
        <main className="container px-4 py-8">
          <div className="grid gap-8">
            {serviceProcedures.map((service) => (
              <div
                key={service.title}
                className="print-card bg-card border border-border rounded-lg p-6 shadow-lg"
              >
                {/* Service Header */}
                <div className="flex items-center gap-3 mb-6 print-title">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center print:bg-gray-100">
                    <service.icon className="w-6 h-6 text-primary print:text-gray-700" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{service.title}</h2>
                    <p className="text-sm text-muted-foreground">Procédure standardisée</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Steps */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary print:bg-gray-200 print:text-gray-700">
                        📋
                      </span>
                      Étapes du processus
                    </h3>
                    <div className="space-y-2">
                      {service.steps.map((step, idx) => (
                        <div key={idx} className="flex gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-xs text-muted-foreground shrink-0 mt-0.5 print:bg-gray-200">
                            {idx + 1}
                          </div>
                          <div>
                            <span className="font-medium text-foreground">{step.step.replace(/^\d+\.\s*/, '')}</span>
                            <p className="text-muted-foreground text-xs">{step.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Checklist */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs text-accent print:bg-gray-200 print:text-gray-700">
                        ✓
                      </span>
                      Checklist de validation
                    </h3>
                    <div className="space-y-2">
                      {service.checklist.map((item, idx) => (
                        <label key={idx} className="flex items-center gap-3 text-sm cursor-pointer group">
                          <div className="w-5 h-5 rounded border-2 border-border flex items-center justify-center group-hover:border-primary transition-colors print:border-gray-400">
                            {/* Empty checkbox for printing */}
                          </div>
                          <span className="text-foreground">{item}</span>
                        </label>
                      ))}
                    </div>

                    {/* Notes section */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Notes:</h4>
                      <div className="h-16 border border-dashed border-border rounded-md print:border-gray-300"></div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-border flex justify-between items-center text-xs text-muted-foreground">
                  <span>Pixel Création - melanielavas@outlook.com</span>
                  <span>Date: ____/____/________</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default ServiceProcedures;
