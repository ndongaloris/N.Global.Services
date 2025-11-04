import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { ArrowLeft, Palette, ShoppingCart, Search, Wrench } from "lucide-react";

interface WebDevelopmentPageProps {
  onNavigate: (page: string) => void;
}

export default function WebDevelopmentPage({ onNavigate }: WebDevelopmentPageProps) {
  const { t } = useLanguage();

  const services = [
    {
      title: t('web.page.design.title'),
      desc: t('web.page.design.desc'),
      icon: Palette
    },
    {
      title: t('web.page.ecommerce.title'),
      desc: t('web.page.ecommerce.desc'),
      icon: ShoppingCart
    },
    {
      title: t('web.page.seo.title'),
      desc: t('web.page.seo.desc'),
      icon: Search
    },
    {
      title: t('web.page.maintenance.title'),
      desc: t('web.page.maintenance.desc'),
      icon: Wrench
    }
  ];

  const process = [
    {
      number: '01',
      title: t('web.page.step1'),
      desc: t('web.page.step1.desc')
    },
    {
      number: '02',
      title: t('web.page.step2'),
      desc: t('web.page.step2.desc')
    },
    {
      number: '03',
      title: t('web.page.step3'),
      desc: t('web.page.step3.desc')
    },
    {
      number: '04',
      title: t('web.page.step4'),
      desc: t('web.page.step4.desc')
    }
  ];

  const technologies = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'];

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
              {t('web.page.hero.title')}
            </h1>
            <p style={{ color: 'var(--cadet-gray)', fontSize: '1.25rem' }}>
              {t('web.page.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16" style={{ backgroundColor: 'var(--mint-cream)' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-12" style={{ color: 'var(--gunmetal)', fontSize: '2.5rem' }}>
            {t('web.page.services.title')}
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

      {/* Development Process */}
      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-12" style={{ color: 'var(--gunmetal)', fontSize: '2.5rem' }}>
            {t('web.page.process.title')}
          </h2>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--cadet-gray)' }}>
                    <span style={{ color: 'var(--night)', fontSize: '1.25rem', fontWeight: 'bold' }}>
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="mb-2" style={{ color: 'var(--gunmetal)' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--davys-gray)' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16" style={{ backgroundColor: 'var(--mint-cream)' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-12" style={{ color: 'var(--gunmetal)', fontSize: '2.5rem' }}>
            {t('web.page.tech.title')}
          </h2>

          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full"
                style={{ backgroundColor: 'white', border: '2px solid var(--cadet-gray)' }}
              >
                <span style={{ color: 'var(--gunmetal)' }}>{tech}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxNDE3MjUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Web Development"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--gunmetal)' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6" style={{ color: 'var(--mint-cream)', fontSize: '2.5rem' }}>
            Ready to Build Your Website?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--cadet-gray)', fontSize: '1.125rem' }}>
            Let's bring your vision to life with a custom website that drives results
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => onNavigate('quote')}
              size="lg"
              className="transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--cadet-gray)',
                color: 'var(--night)',
                padding: '1.5rem 3rem'
              }}
            >
              {t('web.page.quote')}
            </Button>
            <a 
              href="https://portfolio-website-mekq.vercel.app/"
              target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: 'var(--mint-cream)',
                  color: 'var(--dark)',
                  padding: '1.5rem 3rem'
                }}
              >
                {t('web.page.portfolio')}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
