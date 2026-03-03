import { Helmet } from "react-helmet-async";
import { Palette, Globe, MapPin, Star, Megaphone, Layout, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";

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
  const handlePrint = () => window.print();

  return (
    <DashboardLayout>
      <Helmet>
        <title>Fiches de Procédures | Pixel Création</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <style>{`
        @media print {
          @page { size: A4; margin: 1cm; }
          body { background: white !important; color: black !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print-card { break-inside: avoid; page-break-inside: avoid; border: 2px solid #333 !important; background: white !important; margin-bottom: 20px; }
          .print-card * { color: black !important; }
          .print-hide { display: none !important; }
        }
      `}</style>

      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Fiches de Procédures</h1>
            <p className="text-sm text-gray-500">Processus standardisés pour chaque service</p>
          </div>
          <Button onClick={handlePrint} className="gap-2 bg-gray-900 text-white hover:bg-gray-800">
            <Printer className="w-4 h-4" />
            Imprimer tout
          </Button>
        </div>

        {/* Cards */}
        <div className="grid gap-6">
          {serviceProcedures.map((service) => (
            <div key={service.title} className="print-card bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{service.title}</h2>
                  <p className="text-xs text-gray-500">Procédure standardisée</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm">📋 Étapes du processus</h3>
                  <div className="space-y-2">
                    {service.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500 shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">{step.step.replace(/^\d+\.\s*/, '')}</span>
                          <p className="text-gray-500 text-xs">{step.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm">✓ Checklist de validation</h3>
                  <div className="space-y-2">
                    {service.checklist.map((item, idx) => (
                      <label key={idx} className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 rounded border-2 border-gray-300" />
                        <span className="text-gray-700">{item}</span>
                      </label>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Notes:</h4>
                    <div className="h-16 border border-dashed border-gray-300 rounded-md"></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center text-xs text-gray-400">
                <span>Pixel Création - melanielavas@outlook.com</span>
                <span>Date: ____/____/________</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ServiceProcedures;
