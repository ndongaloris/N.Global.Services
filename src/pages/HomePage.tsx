import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { Languages, Globe, TrendingUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('service.lang.title'),
      description: t('service.lang.desc'),
      features: [
        t('service.lang.feature1'),
        t('service.lang.feature2'),
        t('service.lang.feature3'),
        t('service.lang.feature4')
      ],
      icon: Languages,
      imageUrl: "https://images.unsplash.com/photo-1761251948108-f89666f5b4ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MTQ1NDE1NXww&ixlib=rb-4.1.0&q=80&w=1080",
      ctaText: t('service.lang.cta'),
      page: 'language-learning'
    },
    {
      title: t('service.web.title'),
      description: t('service.web.desc'),
      features: [
        t('service.web.feature1'),
        t('service.web.feature2'),
        t('service.web.feature3'),
        t('service.web.feature4')
      ],
      icon: Globe,
      imageUrl: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjE0NDkxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ctaText: t('service.web.cta'),
      page: 'web-development'
    },
    {
      title: t('service.opp.title'),
      description: t('service.opp.desc'),
      features: [
        t('service.opp.feature1'),
        t('service.opp.feature2'),
        t('service.opp.feature3'),
        t('service.opp.feature4')
      ],
      icon: TrendingUp,
      imageUrl: "https://images.unsplash.com/photo-1758518729240-7162d07427b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9wcG9ydHVuaXR5JTIwZ3Jvd3RofGVufDF8fHx8MTc2MTQ1NDE1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      ctaText: t('service.opp.cta'),
      page: 'opportunities'
    }
  ];

  return (
    <div>
      <Hero />
      
      <section id="services" className="py-20" style={{ backgroundColor: 'var(--mint-cream)' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{ color: 'var(--gunmetal)', fontSize: '2.5rem' }}>
              {t('services.title')}
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--davys-gray)', fontSize: '1.125rem' }}>
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20" style={{ backgroundColor: 'var(--gunmetal)' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6" style={{ color: 'var(--mint-cream)', fontSize: '2.5rem' }}>
            {t('why.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--cadet-gray)' }}>
                <span style={{ fontSize: '2rem' }}>🎯</span>
              </div>
              <h3 className="mb-3" style={{ color: 'var(--mint-cream)' }}>
                {t('why.expert.title')}
              </h3>
              <p style={{ color: 'var(--cadet-gray)' }}>
                {t('why.expert.desc')}
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--cadet-gray)' }}>
                <span style={{ fontSize: '2rem' }}>🌍</span>
              </div>
              <h3 className="mb-3" style={{ color: 'var(--mint-cream)' }}>
                {t('why.global.title')}
              </h3>
              <p style={{ color: 'var(--cadet-gray)' }}>
                {t('why.global.desc')}
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--cadet-gray)' }}>
                <span style={{ fontSize: '2rem' }}>💼</span>
              </div>
              <h3 className="mb-3" style={{ color: 'var(--mint-cream)' }}>
                {t('why.results.title')}
              </h3>
              <p style={{ color: 'var(--cadet-gray)' }}>
                {t('why.results.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
