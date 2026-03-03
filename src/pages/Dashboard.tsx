import { Link } from "react-router-dom";
import { FileText, ScrollText, Users, ArrowLeftRight, Globe, ExternalLink } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const tools = [
  {
    href: "/dashboard/procedures",
    icon: FileText,
    title: "Fiches de Procédures",
    description: "Processus standardisés pour chaque service offert.",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    href: "/dashboard/contrats",
    icon: ScrollText,
    title: "Contrats & Devis",
    description: "Modèles de contrats et devis prêts à imprimer.",
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    href: "/dashboard/suivi-client",
    icon: Users,
    title: "Suivi Client",
    description: "Fiche de suivi pour gérer chaque projet client.",
    color: "bg-green-50 text-green-600 border-green-200",
  },
  {
    href: "/dashboard/transfert-site",
    icon: ArrowLeftRight,
    title: "Transfert de Site",
    description: "Procédure de remise de site web au client.",
    color: "bg-orange-50 text-orange-600 border-orange-200",
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="text-gray-500 mt-1">Tous vos outils de gestion au même endroit.</p>
        </div>

        {/* Quick link to main site */}
        <a
          href="/"
          className="flex items-center gap-3 mb-8 px-5 py-4 rounded-xl border border-cyan-200 bg-cyan-50 hover:bg-cyan-100 transition-colors"
        >
          <Globe size={24} className="text-cyan-600" />
          <div className="flex-1">
            <p className="font-semibold text-cyan-800">Mon site web</p>
            <p className="text-sm text-cyan-600">Voir la page principale de Pixel Création</p>
          </div>
          <ExternalLink size={18} className="text-cyan-400" />
        </a>

        {/* Tool cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              to={tool.href}
              className="group flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md hover:border-gray-300 transition-all"
            >
              <div className={`p-3 rounded-lg border ${tool.color}`}>
                <tool.icon size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-cyan-700 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
