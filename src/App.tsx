import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Expeditions from "./pages/Expeditions";
import Trekking from "./pages/Trekking";
import JeepSafaris from "./pages/JeepSafaris";
import CulturalTours from "./pages/CulturalTours";
import K2Expedition from "./pages/expeditions/K2Expedition";
import NangaParbaExpedition from "./pages/expeditions/NangaParbaExpedition";
import SpantikPeakExpedition from "./pages/expeditions/SpantikPeakExpedition";
import K2BaseCampTrek from "./pages/trekking/K2BaseCampTrek";
import KarakoramHighwayHunzaDiscovery from "./pages/jeep-safaris/KarakoramHighwayHunzaDiscovery";
import SkarduDeosaiPlainsSafari from "./pages/jeep-safaris/SkarduDeosaiPlainsSafari";
import FairMeadowsNangaParbaThrill from "./pages/jeep-safaris/FairMeadowsNangaParbaThrill";

import WhatsAppButton from "./components/WhatsAppButton"; // floating button component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expeditions" element={<Expeditions />} />
          <Route path="/trekking" element={<Trekking />} />
          <Route path="/jeep-safaris" element={<JeepSafaris />} />
          <Route path="/cultural-tours" element={<CulturalTours />} />
          <Route path="/expeditions/k2-expedition" element={<K2Expedition />} />
          <Route path="/expeditions/nanga-parbat-expedition" element={<NangaParbaExpedition />} />
          <Route path="/expeditions/spantik-peak-expedition" element={<SpantikPeakExpedition />} />
          <Route path="/trekking/k2-base-camp-trek" element={<K2BaseCampTrek />} />
          <Route path="/jeep-safaris/karakoram-highway-hunza-discovery" element={<KarakoramHighwayHunzaDiscovery />} />
          <Route path="/jeep-safaris/skardu-deosai-plains-safari" element={<SkarduDeosaiPlainsSafari />} />
          <Route path="/jeep-safaris/fairy-meadows-nanga-parbat-thrill-ride" element={<FairMeadowsNangaParbaThrill />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Floating WhatsApp Button appears on all pages */}
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
