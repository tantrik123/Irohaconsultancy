import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <html lang="en" />
        <title>Iroha Consultancy - Study Abroad in Japan, Australia, USA | Kathmandu, Nepal</title>
        <meta name="description" content="Iroha Consultancy helps students from Nepal study abroad in Japan, Australia, and USA. Official registration, visa support, language classes, and university admission guidance since 2017." />
        <meta name="keywords" content="study abroad, Japan, Australia, USA, Nepal, visa consultancy, university admission, language classes, JLPT, IELTS" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Iroha Consultancy - Your Gateway to International Education" />
        <meta property="og:description" content="Study abroad consultancy in Kathmandu helping students pursue education in Japan, Australia, and USA with comprehensive visa and admission support." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://irohaconsultancy.com" />
      </Helmet>
      <Toaster />
      <Sonner />
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
