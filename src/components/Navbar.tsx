import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "./ui/button";

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 py-4 shadow-md" style={{ backgroundColor: 'var(--mint-cream)' }}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          onClick={() => onNavigate('home')} 
          className="cursor-pointer"
        >
          <h3 style={{ color: 'var(--gunmetal)' }}>N Global Services</h3>
        </div>
        
        <div className="flex items-center gap-6">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('home')}
            style={{ color: currentPage === 'home' ? 'var(--gunmetal)' : 'var(--davys-gray)' }}
          >
            {t('nav.home')}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => {
              if (currentPage === 'home') {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                onNavigate('home');
              }
            }}
            style={{ color: 'var(--davys-gray)' }}
          >
            {t('nav.services')}
          </Button>
          
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
