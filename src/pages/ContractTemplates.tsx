import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Printer, Download, ArrowLeft, Palette, Globe, MapPin, Star, Megaphone, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const contractTemplates = [
  {
    id: "branding",
    icon: Palette,
    title: "Création de marque",
    subtitle: "Contrat de création d'identité visuelle",
    items: [
      { label: "Création du logo principal", price: "À partir de 500€" },
      { label: "Déclinaisons du logo (horizontal, vertical, monochrome)", price: "Inclus" },
      { label: "Charte graphique complète", price: "300€" },
      { label: "Palette de couleurs et typographies", price: "Inclus" },
      { label: "Kit réseaux sociaux", price: "150€" },
      { label: "Cartes de visite (design)", price: "100€" },
      { label: "Papeterie complète", price: "200€" },
    ],
    conditions: [
      "Acompte de 50% à la signature",
      "3 propositions de concepts incluses",
      "2 révisions majeures incluses",
      "Révisions mineures illimitées",
      "Livraison des fichiers sources (AI, PSD, PDF)",
      "Délai de livraison: 2-3 semaines",
    ],
  },
  {
    id: "website",
    icon: Globe,
    title: "Site web complet",
    subtitle: "Contrat de création de site internet",
    items: [
      { label: "Site vitrine (1-5 pages)", price: "À partir de 800€" },
      { label: "Site vitrine (6-10 pages)", price: "À partir de 1500€" },
      { label: "Site e-commerce", price: "À partir de 2500€" },
      { label: "Blog intégré", price: "200€" },
      { label: "Formulaire de contact avancé", price: "100€" },
      { label: "Intégration calendrier de réservation", price: "300€" },
      { label: "Optimisation SEO de base", price: "Inclus" },
      { label: "Formation à l'utilisation", price: "150€" },
    ],
    conditions: [
      "Acompte de 40% à la signature",
      "Design responsive (mobile, tablette, desktop)",
      "Hébergement 1ère année inclus",
      "Certificat SSL inclus",
      "2 révisions majeures incluses",
      "Délai de livraison: 3-6 semaines",
      "Maintenance: 50€/mois (optionnel)",
    ],
  },
  {
    id: "google-business",
    icon: MapPin,
    title: "Fiche Google Business",
    subtitle: "Contrat d'optimisation Google My Business",
    items: [
      { label: "Création de la fiche", price: "150€" },
      { label: "Optimisation complète", price: "200€" },
      { label: "Ajout de photos professionnelles (10)", price: "100€" },
      { label: "Rédaction de la description optimisée", price: "Inclus" },
      { label: "Configuration des horaires et services", price: "Inclus" },
      { label: "Création de posts Google (5)", price: "75€" },
      { label: "Suivi mensuel", price: "50€/mois" },
    ],
    conditions: [
      "Paiement intégral à la livraison",
      "Accès propriétaire au compte Google requis",
      "Vérification de l'adresse obligatoire",
      "Délai de livraison: 1 semaine",
      "Rapport de performance inclus (1er mois)",
    ],
  },
  {
    id: "reviews",
    icon: Star,
    title: "Gestion des avis",
    subtitle: "Contrat de gestion de réputation en ligne",
    items: [
      { label: "Audit de réputation actuelle", price: "100€" },
      { label: "Stratégie de collecte d'avis", price: "150€" },
      { label: "Templates de réponses personnalisés", price: "100€" },
      { label: "Formation équipe", price: "200€" },
      { label: "Gestion mensuelle des avis", price: "150€/mois" },
      { label: "Cartes/QR codes de demande d'avis (100)", price: "75€" },
      { label: "Rapport mensuel de réputation", price: "Inclus avec gestion" },
    ],
    conditions: [
      "Acompte de 50% pour l'audit et stratégie",
      "Engagement minimum de 3 mois pour la gestion",
      "Réponses aux avis sous 24-48h",
      "Alertes en temps réel pour avis négatifs",
      "Délai de mise en place: 1 semaine",
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing digital",
    subtitle: "Contrat de services marketing",
    items: [
      { label: "Audit marketing complet", price: "300€" },
      { label: "Stratégie marketing personnalisée", price: "400€" },
      { label: "Gestion publicités Facebook/Instagram", price: "300€/mois + budget pub" },
      { label: "Gestion publicités Google Ads", price: "350€/mois + budget pub" },
      { label: "SEO - Optimisation mensuelle", price: "400€/mois" },
      { label: "Community management", price: "500€/mois" },
      { label: "Email marketing (newsletter)", price: "200€/mois" },
    ],
    conditions: [
      "Acompte de 50% pour audit et stratégie",
      "Budget publicitaire minimum recommandé: 300€/mois",
      "Engagement minimum de 3 mois",
      "Rapports de performance mensuels",
      "Réunion de suivi mensuelle incluse",
      "Délai de mise en place: 2 semaines",
    ],
  },
  {
    id: "landing",
    icon: Layout,
    title: "Landing pages",
    subtitle: "Contrat de création de page de vente",
    items: [
      { label: "Landing page simple", price: "400€" },
      { label: "Landing page optimisée conversion", price: "600€" },
      { label: "A/B testing (2 versions)", price: "200€" },
      { label: "Intégration formulaire capture", price: "Inclus" },
      { label: "Intégration outils analytics", price: "Inclus" },
      { label: "Copywriting persuasif", price: "150€" },
      { label: "Optimisation mobile", price: "Inclus" },
    ],
    conditions: [
      "Acompte de 50% à la signature",
      "Design responsive inclus",
      "1 révision majeure incluse",
      "Révisions mineures illimitées",
      "Délai de livraison: 1-2 semaines",
      "Hébergement 1ère année inclus",
    ],
  },
];

const ContractTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handlePrint = (templateId?: string) => {
    if (templateId) {
      setSelectedTemplate(templateId);
      setTimeout(() => window.print(), 100);
    } else {
      setSelectedTemplate(null);
      setTimeout(() => window.print(), 100);
    }
  };

  const today = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Hidden on print */}
      <div className="print:hidden bg-gradient-to-b from-secondary/30 to-background py-8">
        <div className="container px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Modèles de <span className="gradient-text">Contrats & Devis</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Templates professionnels prêts à personnaliser et imprimer
            </p>
            <Button onClick={() => handlePrint()} size="lg" className="gap-2">
              <Printer className="w-5 h-5" />
              Imprimer tous les modèles
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Templates */}
      <div className="container px-4 py-8 print:py-0">
        <div className="space-y-8 print:space-y-0">
          {contractTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`print:break-before-page ${selectedTemplate && selectedTemplate !== template.id ? 'print:hidden' : ''}`}
            >
              {/* Template Card */}
              <div className="bg-card border border-border rounded-xl overflow-hidden print:rounded-none print:border-2 print:border-foreground">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 print:bg-transparent print:border-b-2 print:border-foreground">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center print:bg-transparent print:border print:border-foreground">
                        <template.icon className="w-6 h-6 text-primary print:text-foreground" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">{template.title}</h2>
                        <p className="text-muted-foreground print:text-foreground">{template.subtitle}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handlePrint(template.id)}
                      className="print:hidden gap-2"
                    >
                      <Printer className="w-4 h-4" />
                      Imprimer
                    </Button>
                  </div>
                </div>

                {/* Contract Body */}
                <div className="p-6 space-y-6">
                  {/* Company Info Section */}
                  <div className="grid md:grid-cols-2 gap-6 print:gap-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide print:text-foreground">
                        Prestataire
                      </h3>
                      <div className="bg-secondary/30 p-4 rounded-lg print:bg-transparent print:border print:border-foreground print:rounded-none">
                        <p className="font-semibold">VOTRE ENTREPRISE</p>
                        <p className="text-sm text-muted-foreground print:text-foreground">Adresse: _________________________</p>
                        <p className="text-sm text-muted-foreground print:text-foreground">SIRET: _________________________</p>
                        <p className="text-sm text-muted-foreground print:text-foreground">Email: _________________________</p>
                        <p className="text-sm text-muted-foreground print:text-foreground">Tél: _________________________</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide print:text-foreground">
                        Client
                      </h3>
                      <div className="bg-secondary/30 p-4 rounded-lg print:bg-transparent print:border print:border-foreground print:rounded-none">
                        <p className="font-semibold">Nom / Société: _________________________</p>
                        <p className="text-sm text-muted-foreground print:text-foreground">Adresse: _________________________</p>
                        <p className="text-sm text-muted-foreground print:text-foreground">SIRET: _________________________</p>
                        <p className="text-sm text-muted-foreground print:text-foreground">Email: _________________________</p>
                        <p className="text-sm text-muted-foreground print:text-foreground">Tél: _________________________</p>
                      </div>
                    </div>
                  </div>

                  {/* Quote Number and Date */}
                  <div className="flex justify-between items-center border-y border-border py-4 print:border-foreground">
                    <div>
                      <span className="text-sm text-muted-foreground print:text-foreground">N° Devis: </span>
                      <span className="font-mono">DEV-_______-{template.id.toUpperCase().slice(0, 3)}</span>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground print:text-foreground">Date: </span>
                      <span>{today}</span>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground print:text-foreground">Validité: </span>
                      <span>30 jours</span>
                    </div>
                  </div>

                  {/* Services Table */}
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3 print:text-foreground">
                      Prestations
                    </h3>
                    <div className="border border-border rounded-lg overflow-hidden print:border-foreground print:rounded-none">
                      <table className="w-full">
                        <thead className="bg-secondary/50 print:bg-transparent">
                          <tr>
                            <th className="text-left p-3 font-semibold border-b border-border print:border-foreground">
                              Description
                            </th>
                            <th className="text-left p-3 font-semibold border-b border-border print:border-foreground">
                              Sélection
                            </th>
                            <th className="text-right p-3 font-semibold border-b border-border print:border-foreground">
                              Prix HT
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {template.items.map((item, idx) => (
                            <tr key={idx} className="border-b border-border last:border-b-0 print:border-foreground">
                              <td className="p-3">{item.label}</td>
                              <td className="p-3">
                                <div className="w-5 h-5 border-2 border-border rounded print:border-foreground" />
                              </td>
                              <td className="p-3 text-right font-medium">{item.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Totals */}
                  <div className="flex justify-end">
                    <div className="w-64 space-y-2">
                      <div className="flex justify-between py-2 border-b border-border print:border-foreground">
                        <span className="text-muted-foreground print:text-foreground">Total HT:</span>
                        <span className="font-medium">_________ €</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border print:border-foreground">
                        <span className="text-muted-foreground print:text-foreground">TVA (20%):</span>
                        <span className="font-medium">_________ €</span>
                      </div>
                      <div className="flex justify-between py-2 font-bold text-lg">
                        <span>Total TTC:</span>
                        <span>_________ €</span>
                      </div>
                    </div>
                  </div>

                  {/* Conditions */}
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3 print:text-foreground">
                      Conditions
                    </h3>
                    <ul className="bg-secondary/30 p-4 rounded-lg space-y-1 print:bg-transparent print:border print:border-foreground print:rounded-none">
                      {template.conditions.map((condition, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <span className="text-primary print:text-foreground">•</span>
                          <span>{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Signatures */}
                  <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border print:border-foreground">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide print:text-foreground">
                        Le Prestataire
                      </h3>
                      <p className="text-sm">Date: _____________________</p>
                      <p className="text-sm">Signature:</p>
                      <div className="h-20 border-b border-border print:border-foreground" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide print:text-foreground">
                        Le Client
                      </h3>
                      <p className="text-sm">Date: _____________________</p>
                      <p className="text-sm">Signature (précédée de "Bon pour accord"):</p>
                      <div className="h-20 border-b border-border print:border-foreground" />
                    </div>
                  </div>

                  {/* Legal Mentions */}
                  <div className="text-xs text-muted-foreground mt-6 pt-4 border-t border-border print:text-foreground print:border-foreground">
                    <p>Ce devis est valable 30 jours à compter de sa date d'émission. Tout devis signé vaut engagement ferme. 
                    En cas d'annulation par le client après signature, l'acompte versé reste acquis au prestataire. 
                    Le solde est dû à la livraison sauf mention contraire. Tout retard de paiement entraînera des pénalités 
                    de retard au taux de 3 fois le taux d'intérêt légal en vigueur.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:break-before-page {
            break-before: page;
          }
          .print\\:break-before-page:first-child {
            break-before: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default ContractTemplates;
