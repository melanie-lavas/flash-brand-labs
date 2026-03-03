import { useState } from "react";
import { motion } from "framer-motion";
import { Printer, Palette, Globe, MapPin, Star, Megaphone, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";

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

  const today = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <DashboardLayout>
      <style>{`
        @media print {
          @page { size: A4; margin: 1cm; }
          body { background: white !important; color: black !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
          .print\\:break-before-page { break-before: page; }
          .print\\:break-before-page:first-child { break-before: auto; }
        }
      `}</style>

      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Contrats & Devis</h1>
            <p className="text-sm text-gray-500">Templates professionnels prêts à personnaliser et imprimer</p>
          </div>
          <Button onClick={() => handlePrint()} className="gap-2 bg-gray-900 text-white hover:bg-gray-800">
            <Printer className="w-5 h-5" />
            Imprimer tout
          </Button>
        </div>

        {/* Templates */}
        <div className="space-y-6 print:space-y-0">
          {contractTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`print:break-before-page ${selectedTemplate && selectedTemplate !== template.id ? 'print:hidden' : ''}`}
            >
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm print:rounded-none print:border-2 print:border-gray-800">
                {/* Header */}
                <div className="bg-gray-50 p-6 print:bg-transparent print:border-b-2 print:border-gray-800">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                        <template.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{template.title}</h2>
                        <p className="text-gray-500">{template.subtitle}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handlePrint(template.id)} className="print:hidden gap-2">
                      <Printer className="w-4 h-4" />
                      Imprimer
                    </Button>
                  </div>
                </div>

                {/* Contract Body */}
                <div className="p-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm text-gray-400 uppercase tracking-wide">Prestataire</h3>
                      <div className="bg-gray-50 p-4 rounded-lg print:bg-transparent print:border print:border-gray-400">
                        <p className="font-semibold text-gray-900">VOTRE ENTREPRISE</p>
                        {["Adresse", "SIRET", "Email", "Tél"].map((f) => (
                          <p key={f} className="text-sm text-gray-500">{f}: _________________________</p>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm text-gray-400 uppercase tracking-wide">Client</h3>
                      <div className="bg-gray-50 p-4 rounded-lg print:bg-transparent print:border print:border-gray-400">
                        <p className="font-semibold text-gray-900">Nom / Société: _________________________</p>
                        {["Adresse", "SIRET", "Email", "Tél"].map((f) => (
                          <p key={f} className="text-sm text-gray-500">{f}: _________________________</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-y border-gray-200 py-4">
                    <div><span className="text-sm text-gray-400">N° Devis: </span><span className="font-mono text-gray-700">DEV-_______-{template.id.toUpperCase().slice(0, 3)}</span></div>
                    <div><span className="text-sm text-gray-400">Date: </span><span className="text-gray-700">{today}</span></div>
                    <div><span className="text-sm text-gray-400">Validité: </span><span className="text-gray-700">30 jours</span></div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm text-gray-400 uppercase tracking-wide mb-3">Prestations</h3>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Description</th>
                            <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Sélection</th>
                            <th className="text-right p-3 font-semibold text-gray-700 border-b border-gray-200">Prix HT</th>
                          </tr>
                        </thead>
                        <tbody>
                          {template.items.map((item, idx) => (
                            <tr key={idx} className="border-b border-gray-100 last:border-b-0">
                              <td className="p-3 text-gray-700">{item.label}</td>
                              <td className="p-3"><div className="w-5 h-5 border-2 border-gray-300 rounded" /></td>
                              <td className="p-3 text-right font-medium text-gray-800">{item.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="w-64 space-y-2">
                      {[["Total HT:", "_________ €"], ["TVA (20%):", "_________ €"]].map(([l, v]) => (
                        <div key={l} className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-500">{l}</span><span className="font-medium text-gray-800">{v}</span>
                        </div>
                      ))}
                      <div className="flex justify-between py-2 font-bold text-lg text-gray-900">
                        <span>Total TTC:</span><span>_________ €</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm text-gray-400 uppercase tracking-wide mb-3">Conditions</h3>
                    <ul className="bg-gray-50 p-4 rounded-lg space-y-1 print:bg-transparent print:border print:border-gray-400">
                      {template.conditions.map((c, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2 text-gray-700">
                          <span className="text-cyan-600">•</span><span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                    {["Le Prestataire", "Le Client"].map((role) => (
                      <div key={role} className="space-y-4">
                        <h3 className="font-semibold text-sm text-gray-400 uppercase tracking-wide">{role}</h3>
                        <p className="text-sm text-gray-700">Date: _____________________</p>
                        <p className="text-sm text-gray-700">{role === "Le Client" ? 'Signature (précédée de "Bon pour accord"):' : "Signature:"}</p>
                        <div className="h-20 border-b border-gray-300" />
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-200">
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
    </DashboardLayout>
  );
};

export default ContractTemplates;
