import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--gunmetal)' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'var(--cadet-gray)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--cadet-gray)' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6" style={{ color: 'var(--mint-cream)', fontSize: '3.5rem', lineHeight: '1.1' }}>
            {t('hero.title')} <span style={{ color: 'var(--cadet-gray)' }}>{t('hero.company')}</span>
          </h1>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--mint-cream)', fontSize: '1.25rem', opacity: 0.9 }}>
            {t('hero.subtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToServices}
              className="transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: 'var(--cadet-gray)', 
                color: 'var(--night)',
                padding: '1.5rem 2rem'
              }}
            >
              {t('hero.explore')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-all duration-300 hover:scale-105"
              style={{ 
                borderColor: 'var(--mint-cream)', 
                color: 'var(--mint-cream)',
                padding: '1.5rem 2rem'
              }}
            >
              {t('hero.contact')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
