import { useState } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LanguageLearningPage from "./pages/LanguageLearningPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import OpportunitiesPage from "./pages/OpportunitiesPage";
import ContactFormPage from "./pages/ContactFormPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'language-learning':
        return <LanguageLearningPage onNavigate={handleNavigate} />;
      case 'web-development':
        return <WebDevelopmentPage onNavigate={handleNavigate} />;
      case 'opportunities':
        return <OpportunitiesPage onNavigate={handleNavigate} />;
      case 'enroll':
        return <ContactFormPage onNavigate={handleNavigate} formType="enroll" />;
      case 'quote':
        return <ContactFormPage onNavigate={handleNavigate} formType="quote" />;
      case 'apply':
        return <ContactFormPage onNavigate={handleNavigate} formType="apply" />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
        {renderPage()}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
