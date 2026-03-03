import logoPixelCreation from "@/assets/logo-pixel-creation.png";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const ClientTracking = () => {
  const handlePrint = () => window.print();

  return (
    <DashboardLayout>
      <style>{`
        @media print {
          @page { size: A4; margin: 1cm; }
          body { background: white !important; color: black !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>

      <div className="p-6">
        <div className="flex justify-between items-center mb-8 print:hidden">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Suivi Client</h1>
            <p className="text-sm text-gray-500">Fiche de suivi pour chaque projet client</p>
          </div>
          <Button onClick={handlePrint} className="gap-2 bg-gray-900 text-white hover:bg-gray-800">
            <Printer size={20} />
            Imprimer la fiche
          </Button>
        </div>

        {/* Fiche de suivi client */}
        <div className="max-w-4xl bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          {/* En-tête avec logo */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-6">
            <img src={logoPixelCreation} alt="Pixel Création" className="w-24 h-24 object-contain" />
            <div className="text-right">
              <h2 className="text-2xl font-bold text-gray-900">Fiche de Suivi Client</h2>
              <p className="text-gray-500">Marketing Digital</p>
            </div>
          </div>

          {/* Informations client */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 bg-gray-100 px-4 py-2 rounded mb-4">Informations Client</h3>
            <div className="grid grid-cols-2 gap-4 px-4">
              <div className="space-y-3">
                {["Nom du client", "Entreprise", "Téléphone"].map((label) => (
                  <div key={label} className="flex items-start gap-2">
                    <span className="font-medium text-gray-700 min-w-32">{label} :</span>
                    <span className="border-b border-gray-300 flex-1 pb-1">____________________________</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {["Email", "Adresse", "Date début"].map((label) => (
                  <div key={label} className="flex items-start gap-2">
                    <span className="font-medium text-gray-700 min-w-32">{label} :</span>
                    <span className="border-b border-gray-300 flex-1 pb-1">____________________________</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service commandé */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 bg-gray-100 px-4 py-2 rounded mb-4">Service Commandé</h3>
            <div className="px-4 grid grid-cols-2 gap-4">
              {[
                ["Création d'identité visuelle (Branding)", "Création de site web", "Optimisation Google Business"],
                ["Collecte d'avis clients", "Marketing digital", "Page de conversion (Landing Page)"]
              ].map((col, ci) => (
                <div key={ci} className="space-y-2">
                  {col.map((s) => (
                    <label key={s} className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-gray-300 rounded inline-block"></span>
                      <span className="text-gray-700">{s}</span>
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Détails du projet */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 bg-gray-100 px-4 py-2 rounded mb-4">Détails du Projet</h3>
            <div className="px-4 space-y-4">
              <div>
                <span className="font-medium text-gray-700">Description du projet :</span>
                <div className="border border-gray-300 rounded p-3 mt-2 min-h-20"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Budget", "Date limite"].map((label) => (
                  <div key={label} className="flex items-start gap-2">
                    <span className="font-medium text-gray-700 min-w-32">{label} :</span>
                    <span className="border-b border-gray-300 flex-1 pb-1">____________________________</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Suivi des étapes */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 bg-gray-100 px-4 py-2 rounded mb-4">Suivi des Étapes</h3>
            <div className="px-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 font-medium text-gray-700">Étape</th>
                    <th className="text-center py-2 font-medium text-gray-700 w-24">Date prévue</th>
                    <th className="text-center py-2 font-medium text-gray-700 w-24">Date réelle</th>
                    <th className="text-center py-2 font-medium text-gray-700 w-20">Statut</th>
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
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 text-gray-700">{step}</td>
                      <td className="py-3 text-center"><span className="border-b border-gray-300 px-2">________</span></td>
                      <td className="py-3 text-center"><span className="border-b border-gray-300 px-2">________</span></td>
                      <td className="py-3 text-center"><span className="w-5 h-5 border-2 border-gray-300 rounded inline-block"></span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Notes */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 bg-gray-100 px-4 py-2 rounded mb-4">Notes et Commentaires</h3>
            <div className="px-4">
              <div className="border border-gray-300 rounded p-3 min-h-32"></div>
            </div>
          </section>

          {/* Pied de page */}
          <div className="border-t border-gray-200 pt-6 mt-8">
            <div className="flex justify-between items-center text-sm text-gray-400">
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
      </div>
    </DashboardLayout>
  );
};

export default ClientTracking;
