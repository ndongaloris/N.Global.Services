import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { ArrowLeft, UserCheck, Users, Handshake, Briefcase, Network, Lightbulb, Target, MessageCircle } from "lucide-react";

interface OpportunitiesPageProps {
  onNavigate: (page: string) => void;
}

export default function OpportunitiesPage({ onNavigate }: OpportunitiesPageProps) {
  const { t } = useLanguage();

  const services = [
    {
      title: t('opp.page.career.title'),
      desc: t('opp.page.career.desc'),
      icon: UserCheck
    },
    {
      title: t('opp.page.network.title'),
      desc: t('opp.page.network.desc'),
      icon: Users
    },
    {
      title: t('opp.page.partner.title'),
      desc: t('opp.page.partner.desc'),
      icon: Handshake
    },
    {
      title: t('opp.page.consult.title'),
      desc: t('opp.page.consult.desc'),
      icon: Briefcase
    }
  ];

  const benefits = [
    {
      title: t('opp.page.benefit1'),
      desc: t('opp.page.benefit1.desc'),
      icon: Network
    },
    {
      title: t('opp.page.benefit2'),
      desc: t('opp.page.benefit2.desc'),
      icon: Lightbulb
    },
    {
      title: t('opp.page.benefit3'),
      desc: t('opp.page.benefit3.desc'),
      icon: Target
    },
    {
      title: t('opp.page.benefit4'),
      desc: t('opp.page.benefit4.desc'),
      icon: MessageCircle
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundColor: 'var(--gunmetal)' }}>
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-6"
            style={{ color: 'var(--mint-cream)' }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> {t('common.back')}
          </Button>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6" style={{ color: 'var(--mint-cream)', fontSize: '3rem' }}>
              {t('opp.page.hero.title')}
            </h1>
            <p style={{ color: 'var(--cadet-gray)', fontSize: '1.25rem' }}>
              {t('opp.page.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--mint-cream)' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-12" style={{ color: 'var(--gunmetal)', fontSize: '2.5rem' }}>
            {t('opp.page.services.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--cadet-gray)' }}>
                    <service.icon className="h-8 w-8" style={{ color: 'var(--night)' }} />
                  </div>
                  <h3 className="mb-3" style={{ color: 'var(--gunmetal)' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: 'var(--davys-gray)' }}>
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1698047681820-f26b00b6c639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2V8ZW58MXx8fHwxNzYxMzg4MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Business Opportunities"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--mint-cream)' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-12" style={{ color: 'var(--gunmetal)', fontSize: '2.5rem' }}>
            {t('opp.page.benefits.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg" style={{ backgroundColor: 'white' }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--cadet-gray)' }}>
                    <benefit.icon className="h-6 w-6" style={{ color: 'var(--night)' }} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2" style={{ color: 'var(--gunmetal)' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: 'var(--davys-gray)' }}>
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16" style={{ backgroundColor: 'var(--gunmetal)' }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <h2 style={{ color: 'var(--cadet-gray)', fontSize: '3rem', marginBottom: '0.5rem' }}>500+</h2>
              <p style={{ color: 'var(--mint-cream)' }}>Clients Connected</p>
            </div>
            <div>
              <h2 style={{ color: 'var(--cadet-gray)', fontSize: '3rem', marginBottom: '0.5rem' }}>50+</h2>
              <p style={{ color: 'var(--mint-cream)' }}>Countries Reached</p>
            </div>
            <div>
              <h2 style={{ color: 'var(--cadet-gray)', fontSize: '3rem', marginBottom: '0.5rem' }}>95%</h2>
              <p style={{ color: 'var(--mint-cream)' }}>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--mint-cream)' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6" style={{ color: 'var(--gunmetal)', fontSize: '2.5rem' }}>
            Ready to Unlock Your Potential?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--davys-gray)', fontSize: '1.125rem' }}>
            Join our network and discover opportunities that align with your goals
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => onNavigate('apply')}
              size="lg"
              className="transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--gunmetal)',
                color: 'var(--mint-cream)',
                padding: '1.5rem 3rem'
              }}
            >
              {t('opp.page.apply')}
            </Button>
            <a 
            href="https://calendly.com/nglobalservices-hq/30min"
            target="_blank"
            >
              <Button
                // onClick={() => onNavigate('apply')}
                size="lg"
                variant="outline"
                className="transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: 'var(--gunmetal)',
                  color: 'var(--gunmetal)',
                  padding: '1.5rem 3rem'
                }}
              >
                {t('opp.page.schedule')}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
