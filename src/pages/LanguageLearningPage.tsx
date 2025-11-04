import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { ArrowLeft, BookOpen, Globe, Award } from "lucide-react";

interface LanguageLearningPageProps {
  onNavigate: (page: string) => void;
}

export default function LanguageLearningPage({ onNavigate }: LanguageLearningPageProps) {
  const { t } = useLanguage();

  const levels = [
    {
      title: t('lang.page.beginner'),
      desc: t('lang.page.beginner.desc'),
      icon: BookOpen
    },
    {
      title: t('lang.page.intermediate'),
      desc: t('lang.page.intermediate.desc'),
      icon: Globe
    },
    {
      title: t('lang.page.advanced'),
      desc: t('lang.page.advanced.desc'),
      icon: Award
    }
  ];

  const features = [
    t('lang.page.feature1'),
    t('lang.page.feature2'),
    t('lang.page.feature3'),
    t('lang.page.feature4'),
    t('lang.page.feature5'),
    t('lang.page.feature6')
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
              {t('lang.page.hero.title')}
            </h1>
            <p style={{ color: 'var(--cadet-gray)', fontSize: '1.25rem' }}>
              {t('lang.page.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Language Options */}
      <section className="py-16" style={{ backgroundColor: 'var(--mint-cream)' }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2xhc3Nyb29tJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYxNDU0NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="French Language"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(28, 55, 56, 0.7)' }}>
                  <h2 style={{ color: 'var(--mint-cream)', fontSize: '2rem' }}>🇫🇷 Français</h2>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3" style={{ color: 'var(--gunmetal)' }}>
                  {t('lang.page.french.title')}
                </h3>
                <p className="mb-4" style={{ color: 'var(--davys-gray)' }}>
                  {t('lang.page.french.desc')}
                </p>
                <Button 
                  onClick={() => onNavigate('enroll')}
                  className="w-full"
                  style={{ backgroundColor: 'var(--gunmetal)', color: 'var(--mint-cream)' }}
                >
                  {t('lang.page.enroll')}
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2xhc3Nyb29tJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYxNDU0NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="English Language"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(28, 55, 56, 0.7)' }}>
                  <h2 style={{ color: 'var(--mint-cream)', fontSize: '2rem' }}>🇬🇧 English</h2>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3" style={{ color: 'var(--gunmetal)' }}>
                  {t('lang.page.english.title')}
                </h3>
                <p className="mb-4" style={{ color: 'var(--davys-gray)' }}>
                  {t('lang.page.english.desc')}
                </p>
                <Button 
                  onClick={() => onNavigate('enroll')}
                  className="w-full"
                  style={{ backgroundColor: 'var(--gunmetal)', color: 'var(--mint-cream)' }}
                >
                  {t('lang.page.enroll')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-12" style={{ color: 'var(--gunmetal)', fontSize: '2.5rem' }}>
            {t('lang.page.levels.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {levels.map((level, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--cadet-gray)' }}>
                  <level.icon className="h-8 w-8" style={{ color: 'var(--night)' }} />
                </div>
                <h3 className="mb-3" style={{ color: 'var(--gunmetal)' }}>
                  {level.title}
                </h3>
                <p style={{ color: 'var(--davys-gray)' }}>
                  {level.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16" style={{ backgroundColor: 'var(--mint-cream)' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-12" style={{ color: 'var(--gunmetal)', fontSize: '2.5rem' }}>
            {t('lang.page.features.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: 'white' }}>
                <span className="mt-1" style={{ color: 'var(--cadet-gray)', fontSize: '1.5rem' }}>✓</span>
                <p style={{ color: 'var(--davys-gray)' }}>{feature}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => onNavigate('enroll')}
              size="lg"
              className="transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: 'var(--cadet-gray)', 
                color: 'var(--night)',
                padding: '1.5rem 3rem'
              }}
            >
              {t('lang.page.enroll')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
