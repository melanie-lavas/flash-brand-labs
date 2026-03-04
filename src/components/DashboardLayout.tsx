import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, FileText, ScrollText, Users, ArrowLeftRight, 
  Globe, Menu, ChevronLeft, Search, Bell, Settings
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

  const currentPage = sidebarLinks.find(l => l.href === location.pathname);

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900 print:block print:bg-white">
      {/* Sidebar */}
      <aside
        className={`print:hidden fixed top-0 left-0 h-screen flex flex-col border-r border-gray-200 bg-white z-30 transition-all duration-300 shadow-sm ${
          collapsed ? "w-[68px]" : "w-60"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-3 py-4 border-b border-gray-100">
          <img src={logoPixelCreation} alt="Pixel Création" className="w-9 h-9 object-contain shrink-0" />
          {!collapsed && (
            <span className="font-bold text-sm text-gray-800 truncate tracking-tight">Pixel Création</span>
          )}
        </div>

        {/* Nav links */}
        <nav className="flex-1 py-4 space-y-0.5 px-2 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                title={link.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <link.icon size={18} className="shrink-0" />
                {!collapsed && <span className="truncate">{link.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom links */}
        <div className="border-t border-gray-100 p-2 space-y-0.5">
          <a
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            title="Voir mon site web"
          >
            <Globe size={18} className="shrink-0" />
            {!collapsed && <span>Voir mon site</span>}
          </a>
        </div>
      </aside>

      {/* Main area */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${collapsed ? "ml-[68px]" : "ml-60"} print:ml-0`}>
        {/* Top bar */}
        <header className="print:hidden sticky top-0 z-20 h-14 flex items-center justify-between px-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
            >
              {collapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
            </button>
            {currentPage && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-800">{currentPage.label}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors">
              <Search size={18} />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors">
              <Settings size={18} />
            </button>
            <div className="ml-2 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">
              PC
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
