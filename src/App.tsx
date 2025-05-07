
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import LostItems from "./pages/LostItems";
import Donations from "./pages/Donations";
import HelpRequests from "./pages/HelpRequests";
import Rewards from "./pages/Rewards";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
          <Route path="/lost-items" element={<MainLayout><LostItems /></MainLayout>} />
          <Route path="/donations" element={<MainLayout><Donations /></MainLayout>} />
          <Route path="/help-requests" element={<MainLayout><HelpRequests /></MainLayout>} />
          <Route path="/rewards" element={<MainLayout><Rewards /></MainLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
