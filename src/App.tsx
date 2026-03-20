import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import PageLayout from "@/components/PageLayout";
import Index from "./pages/Index.tsx";
import CaseStudiesArchive from "./pages/CaseStudiesArchive.tsx";
import CaseStudyDetail from "./pages/CaseStudyDetail.tsx";
import CaseStudyPlaybook from "./pages/CaseStudyPlaybook.tsx";
import IdeaVaultPage from "./pages/IdeaVaultPage.tsx";
import IdeaDeepDive from "./pages/IdeaDeepDive.tsx";
import ToolDirectoryPage from "./pages/ToolDirectoryPage.tsx";
import ProfitabilityCalculator from "./pages/ProfitabilityCalculator.tsx";
import AuthPage from "./pages/AuthPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/case-studies" element={<CaseStudiesArchive />} />
              <Route path="/case-study/:id" element={<CaseStudyDetail />} />
              <Route path="/case-study/:id/playbook" element={<CaseStudyPlaybook />} />
              <Route path="/idea-vault" element={<IdeaVaultPage />} />
              <Route path="/ideas/:id" element={<IdeaDeepDive />} />
              <Route path="/tools" element={<ToolDirectoryPage />} />
              <Route path="/calculator" element={<ProfitabilityCalculator />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageLayout>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
