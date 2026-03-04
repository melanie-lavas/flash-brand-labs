import { Link } from "react-router-dom";
import { FileText, ScrollText, Users, ArrowLeftRight, Globe, ExternalLink, TrendingUp, Clock, CheckCircle } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const tools = [
  {
    href: "/dashboard/procedures",
    icon: FileText,
    title: "Fiches de Procédures",
    description: "Processus standardisés pour chaque service offert.",
    color: "bg-blue-500",
  },
  {
    href: "/dashboard/contrats",
    icon: ScrollText,
    title: "Contrats & Devis",
    description: "Modèles de contrats et devis prêts à imprimer.",
    color: "bg-violet-500",
  },
  {
    href: "/dashboard/suivi-client",
    icon: Users,
    title: "Suivi Client",
    description: "Fiche de suivi pour gérer chaque projet client.",
    color: "bg-emerald-500",
  },
  {
    href: "/dashboard/transfert-site",
    icon: ArrowLeftRight,
    title: "Transfert de Site",
    description: "Procédure de remise de site web au client.",
    color: "bg-amber-500",
  },
];

const stats = [
  { label: "Projets actifs", value: "—", icon: TrendingUp, color: "text-blue-600" },
  { label: "En attente", value: "—", icon: Clock, color: "text-amber-600" },
  { label: "Complétés", value: "—", icon: CheckCircle, color: "text-emerald-600" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-6xl">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-900">Bienvenue 👋</h1>
          <p className="text-sm text-gray-500 mt-0.5">Tous vos outils de gestion au même endroit.</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
                  <stat.icon size={18} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick link */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 mb-8 px-4 py-3 rounded-xl border border-gray-100 bg-white hover:bg-gray-50 transition-colors shadow-sm"
        >
          <Globe size={20} className="text-gray-400" />
          <div className="flex-1">
            <p className="font-medium text-gray-800 text-sm">pixelcreation.ca</p>
            <p className="text-xs text-gray-400">Ouvrir le site public</p>
          </div>
          <ExternalLink size={16} className="text-gray-300" />
        </a>

        {/* Tool cards */}
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Outils</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              to={tool.href}
              className="group flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:border-gray-200 transition-all shadow-sm"
            >
              <div className={`p-2.5 rounded-lg ${tool.color} text-white shadow-sm`}>
                <tool.icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-gray-700 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
