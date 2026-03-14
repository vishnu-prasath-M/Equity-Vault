import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CaseStudiesArchive from "./pages/CaseStudiesArchive.tsx";
import CaseStudyDetail from "./pages/CaseStudyDetail.tsx";
import IdeaVaultPage from "./pages/IdeaVaultPage.tsx";
import ToolDirectoryPage from "./pages/ToolDirectoryPage.tsx";
import ProfitabilityCalculator from "./pages/ProfitabilityCalculator.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-studies" element={<CaseStudiesArchive />} />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
          <Route path="/idea-vault" element={<IdeaVaultPage />} />
          <Route path="/tools" element={<ToolDirectoryPage />} />
          <Route path="/calculator" element={<ProfitabilityCalculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
