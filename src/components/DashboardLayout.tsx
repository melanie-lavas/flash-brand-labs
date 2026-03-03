import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, FileText, ScrollText, Users, ArrowLeftRight, 
  Globe, Menu, X, ChevronLeft 
} from "lucide-react";
import logoPixelCreation from "@/assets/logo-pixel-creation.png";

const sidebarLinks = [
  { href: "/dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/dashboard/procedures", label: "Procédures", icon: FileText },
  { href: "/dashboard/contrats", label: "Contrats & Devis", icon: ScrollText },
  { href: "/dashboard/suivi-client", label: "Suivi Client", icon: Users },
  { href: "/dashboard/transfert-site", label: "Transfert de site", icon: ArrowLeftRight },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-white text-gray-900 print:block">
      {/* Sidebar */}
      <aside
        className={`print:hidden sticky top-0 h-screen flex flex-col border-r border-gray-200 bg-gray-50 transition-all duration-300 ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-3 py-4 border-b border-gray-200">
          <img src={logoPixelCreation} alt="Pixel Création" className="w-10 h-10 object-contain shrink-0" />
          {!collapsed && (
            <span className="font-bold text-sm text-gray-800 truncate">Pixel Création</span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto p-1 rounded hover:bg-gray-200 text-gray-500"
          >
            {collapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 py-3 space-y-1 px-2">
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                title={link.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-cyan-50 text-cyan-700 border border-cyan-200"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <link.icon size={20} className="shrink-0" />
                {!collapsed && <span className="truncate">{link.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer link to main site */}
        <div className="border-t border-gray-200 p-2">
          <a
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            title="Voir mon site web"
          >
            <Globe size={20} className="shrink-0" />
            {!collapsed && <span>Voir mon site web</span>}
          </a>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
