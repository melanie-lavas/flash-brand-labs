import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Lazy load pages for performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ServiceProcedures = lazy(() => import("./pages/ServiceProcedures"));
const ContractTemplates = lazy(() => import("./pages/ContractTemplates"));
const ClientTracking = lazy(() => import("./pages/ClientTracking"));
const SiteTransfer = lazy(() => import("./pages/SiteTransfer"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-3 border-gray-200 border-t-gray-800 rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/procedures" element={<ServiceProcedures />} />
              <Route path="/dashboard/contrats" element={<ContractTemplates />} />
              <Route path="/dashboard/suivi-client" element={<ClientTracking />} />
              <Route path="/dashboard/transfert-site" element={<SiteTransfer />} />
              {/* Legacy routes */}
              <Route path="/procedures" element={<ServiceProcedures />} />
              <Route path="/contrats" element={<ContractTemplates />} />
              <Route path="/suivi-client" element={<ClientTracking />} />
              <Route path="/transfert-site" element={<SiteTransfer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
