import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import ServiceProcedures from "./pages/ServiceProcedures";
import ContractTemplates from "./pages/ContractTemplates";
import ClientTracking from "./pages/ClientTracking";
import SiteTransfer from "./pages/SiteTransfer";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/procedures" element={<ServiceProcedures />} />
            <Route path="/dashboard/contrats" element={<ContractTemplates />} />
            <Route path="/dashboard/suivi-client" element={<ClientTracking />} />
            <Route path="/dashboard/transfert-site" element={<SiteTransfer />} />
            {/* Legacy routes redirect */}
            <Route path="/procedures" element={<ServiceProcedures />} />
            <Route path="/contrats" element={<ContractTemplates />} />
            <Route path="/suivi-client" element={<ClientTracking />} />
            <Route path="/transfert-site" element={<SiteTransfer />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
