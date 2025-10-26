import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="py-12" style={{ backgroundColor: 'var(--night)' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="mb-4" style={{ color: 'var(--mint-cream)' }}>
              N Global Services
            </h4>
            <p style={{ color: 'var(--cadet-gray)' }}>
              {t('footer.company.desc')}
            </p>
          </div>
          
          <div>
            <h4 className="mb-4" style={{ color: 'var(--mint-cream)' }}>
              {t('footer.links')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="transition-colors" style={{ color: 'var(--cadet-gray)' }}>
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors" style={{ color: 'var(--cadet-gray)' }}>
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors" style={{ color: 'var(--cadet-gray)' }}>
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4" style={{ color: 'var(--mint-cream)' }}>
              {t('footer.contact.title')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" style={{ color: 'var(--cadet-gray)' }} />
                <span style={{ color: 'var(--cadet-gray)' }}>info@nglobalservices.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" style={{ color: 'var(--cadet-gray)' }} />
                <span style={{ color: 'var(--cadet-gray)' }}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" style={{ color: 'var(--cadet-gray)' }} />
                <span style={{ color: 'var(--cadet-gray)' }}>Global Services HQ</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center" style={{ borderColor: 'var(--gunmetal)' }}>
          <p style={{ color: 'var(--cadet-gray)' }}>
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
