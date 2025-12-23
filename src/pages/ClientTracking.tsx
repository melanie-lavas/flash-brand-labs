import logoPixelCreation from "@/assets/logo-pixel-creation.png";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const ClientTracking = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Header avec bouton d'impression */}
      <div className="max-w-4xl mx-auto mb-8 print:hidden">
        <Button onClick={handlePrint} className="flex items-center gap-2">
          <Printer size={20} />
          Imprimer la fiche
        </Button>
      </div>

      {/* Fiche de suivi client */}
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8 print:border-none print:shadow-none print:p-0">
        {/* En-tête avec logo */}
        <div className="flex items-center justify-between border-b border-border pb-6 mb-6">
          <img src={logoPixelCreation} alt="Pixel Création" className="w-24 h-24 object-contain" />
          <div className="text-right">
            <h1 className="text-2xl font-bold text-foreground">Fiche de Suivi Client</h1>
            <p className="text-muted-foreground">Marketing Digital</p>
          </div>
        </div>

        {/* Informations client */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground bg-muted px-4 py-2 rounded mb-4">
            Informations Client
          </h2>
          <div className="grid grid-cols-2 gap-4 px-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="font-medium text-foreground min-w-32">Nom du client :</span>
                <span className="border-b border-border flex-1 pb-1">____________________________</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-foreground min-w-32">Entreprise :</span>
                <span className="border-b border-border flex-1 pb-1">____________________________</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-foreground min-w-32">Téléphone :</span>
                <span className="border-b border-border flex-1 pb-1">____________________________</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="font-medium text-foreground min-w-32">Email :</span>
                <span className="border-b border-border flex-1 pb-1">____________________________</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-foreground min-w-32">Adresse :</span>
                <span className="border-b border-border flex-1 pb-1">____________________________</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-foreground min-w-32">Date début :</span>
                <span className="border-b border-border flex-1 pb-1">____________________________</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service commandé */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground bg-muted px-4 py-2 rounded mb-4">
            Service Commandé
          </h2>
          <div className="px-4 grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-border rounded inline-block"></span>
                <span className="text-foreground">Création d'identité visuelle (Branding)</span>
              </label>
              <label className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-border rounded inline-block"></span>
                <span className="text-foreground">Création de site web</span>
              </label>
              <label className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-border rounded inline-block"></span>
                <span className="text-foreground">Optimisation Google Business</span>
              </label>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-border rounded inline-block"></span>
                <span className="text-foreground">Collecte d'avis clients</span>
              </label>
              <label className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-border rounded inline-block"></span>
                <span className="text-foreground">Marketing digital</span>
              </label>
              <label className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-border rounded inline-block"></span>
                <span className="text-foreground">Page de conversion (Landing Page)</span>
              </label>
            </div>
          </div>
        </section>

        {/* Détails du projet */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground bg-muted px-4 py-2 rounded mb-4">
            Détails du Projet
          </h2>
          <div className="px-4 space-y-4">
            <div>
              <span className="font-medium text-foreground">Description du projet :</span>
              <div className="border border-border rounded p-3 mt-2 min-h-20"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <span className="font-medium text-foreground min-w-32">Budget :</span>
                <span className="border-b border-border flex-1 pb-1">____________________________</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-foreground min-w-32">Date limite :</span>
                <span className="border-b border-border flex-1 pb-1">____________________________</span>
              </div>
            </div>
          </div>
        </section>

        {/* Suivi des étapes */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground bg-muted px-4 py-2 rounded mb-4">
            Suivi des Étapes
          </h2>
          <div className="px-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-medium text-foreground">Étape</th>
                  <th className="text-center py-2 font-medium text-foreground w-24">Date prévue</th>
                  <th className="text-center py-2 font-medium text-foreground w-24">Date réelle</th>
                  <th className="text-center py-2 font-medium text-foreground w-20">Statut</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "1. Premier contact / Consultation",
                  "2. Devis et accord du client",
                  "3. Collecte des informations",
                  "4. Conception / Première version",
                  "5. Révisions et ajustements",
                  "6. Validation finale client",
                  "7. Livraison du projet",
                  "8. Formation / Tutoriel",
                  "9. Suivi post-livraison"
                ].map((step, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-3 text-foreground">{step}</td>
                    <td className="py-3 text-center">
                      <span className="border-b border-border px-2">________</span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="border-b border-border px-2">________</span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="w-5 h-5 border-2 border-border rounded inline-block"></span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Notes et commentaires */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground bg-muted px-4 py-2 rounded mb-4">
            Notes et Commentaires
          </h2>
          <div className="px-4">
            <div className="border border-border rounded p-3 min-h-32"></div>
          </div>
        </section>

        {/* Pied de page */}
        <div className="border-t border-border pt-6 mt-8">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div>
              <p>Pixel Création - Marketing Digital</p>
              <p>info@pixelcreation.ca | (XXX) XXX-XXXX</p>
            </div>
            <div className="text-right">
              <p>Date de création de la fiche : _______________</p>
              <p>Signature : _______________</p>
            </div>
          </div>
        </div>
      </div>

      {/* Styles d'impression */}
      <style>{`
        @media print {
          body {
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:border-none {
            border: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:p-0 {
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ClientTracking;
