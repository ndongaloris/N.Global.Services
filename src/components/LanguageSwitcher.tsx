import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4" style={{ color: 'var(--cadet-gray)' }} />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'underline' : ''}
        style={{ 
          color: language === 'en' ? 'var(--cadet-gray)' : 'var(--davys-gray)',
          padding: '0.25rem 0.5rem'
        }}
      >
        EN
      </Button>
      <span style={{ color: 'var(--davys-gray)' }}>|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('fr')}
        className={language === 'fr' ? 'underline' : ''}
        style={{ 
          color: language === 'fr' ? 'var(--cadet-gray)' : 'var(--davys-gray)',
          padding: '0.25rem 0.5rem'
        }}
      >
        FR
      </Button>
    </div>
  );
}
