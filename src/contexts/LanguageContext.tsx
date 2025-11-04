import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Welcome to',
    'hero.company': 'N Global Services',
    'hero.subtitle': 'Empowering your growth through language education, professional web development, and endless opportunities for success.',
    'hero.explore': 'Explore Services',
    'hero.contact': 'Contact Us',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Choose from our comprehensive suite of services designed to empower your personal and professional growth.',
    
    // Language Learning Service
    'service.lang.title': 'Language Learning',
    'service.lang.desc': 'Master French or English with our expert-led courses designed for all proficiency levels.',
    'service.lang.feature1': 'Native-speaking instructors',
    'service.lang.feature2': 'Flexible online and in-person classes',
    'service.lang.feature3': 'Personalized learning paths',
    'service.lang.feature4': 'Cultural immersion programs',
    'service.lang.cta': 'Start Learning Today',
    
    // Web Development Service
    'service.web.title': 'Web Development',
    'service.web.desc': 'Professional website development services tailored to elevate your business\'s online presence.',
    'service.web.feature1': 'Custom responsive design',
    'service.web.feature2': 'E-commerce solutions',
    'service.web.feature3': 'SEO optimization',
    'service.web.feature4': 'Ongoing maintenance & support',
    'service.web.cta': 'Build Your Website',
    
    // Opportunities Service
    'service.opp.title': 'Unlock Opportunities',
    'service.opp.desc': 'Discover pathways to career advancement, networking, and business growth opportunities.',
    'service.opp.feature1': 'Career counseling & guidance',
    'service.opp.feature2': 'International networking events',
    'service.opp.feature3': 'Partnership opportunities',
    'service.opp.feature4': 'Business consulting services',
    'service.opp.cta': 'Explore Opportunities',
    
    // Why Choose Us
    'why.title': 'Why Choose N Global Services?',
    'why.expert.title': 'Expert Team',
    'why.expert.desc': 'Professionals with years of experience in their respective fields',
    'why.global.title': 'Global Reach',
    'why.global.desc': 'Connecting clients worldwide with opportunities and services',
    'why.results.title': 'Proven Results',
    'why.results.desc': 'Track record of success in helping clients achieve their goals',
    
    // Footer
    'footer.company.desc': 'Your trusted partner for language learning, web development, and unlocking new opportunities.',
    'footer.links': 'Quick Links',
    'footer.contact.title': 'Contact Info',
    'footer.rights': '© 2025 N Global Services. All rights reserved.',
    
    // Language Learning Page
    'lang.page.hero.title': 'Language Learning Programs',
    'lang.page.hero.subtitle': 'Master French or English with confidence through our comprehensive language programs',
    'lang.page.french.title': 'French Language Courses',
    'lang.page.french.desc': 'From beginner to advanced, learn French with native speakers and immerse yourself in the language.',
    'lang.page.english.title': 'English Language Courses',
    'lang.page.english.desc': 'Improve your English skills for business, travel, or academic purposes with personalized instruction.',
    'lang.page.levels.title': 'Course Levels',
    'lang.page.beginner': 'Beginner',
    'lang.page.beginner.desc': 'Perfect for those starting their language journey',
    'lang.page.intermediate': 'Intermediate',
    'lang.page.intermediate.desc': 'Build on your existing knowledge and gain fluency',
    'lang.page.advanced': 'Advanced',
    'lang.page.advanced.desc': 'Achieve native-level proficiency and cultural mastery',
    'lang.page.features.title': 'What You\'ll Get',
    'lang.page.feature1': 'Interactive live sessions with native instructors',
    'lang.page.feature2': 'Personalized study plans tailored to your goals',
    'lang.page.feature3': 'Access to exclusive learning materials and resources',
    'lang.page.feature4': 'Regular progress assessments and certifications',
    'lang.page.feature5': 'Flexible scheduling for online and in-person classes',
    'lang.page.feature6': 'Cultural immersion activities and events',
    'lang.page.enroll': 'Enroll Now',
    'lang.page.learn.more': 'Learn More',
    
    // Web Development Page
    'web.page.hero.title': 'Professional Web Development',
    'web.page.hero.subtitle': 'Transform your vision into a stunning, high-performance website',
    'web.page.services.title': 'Our Web Development Services',
    'web.page.design.title': 'Custom Design',
    'web.page.design.desc': 'Beautiful, responsive designs that reflect your brand identity and engage your audience.',
    'web.page.ecommerce.title': 'E-Commerce Solutions',
    'web.page.ecommerce.desc': 'Full-featured online stores with secure payment processing and inventory management.',
    'web.page.seo.title': 'SEO Optimization',
    'web.page.seo.desc': 'Maximize your online visibility with search engine optimization built into every page.',
    'web.page.maintenance.title': 'Maintenance & Support',
    'web.page.maintenance.desc': 'Ongoing technical support and regular updates to keep your site running smoothly.',
    'web.page.process.title': 'Our Development Process',
    'web.page.step1': 'Discovery & Planning',
    'web.page.step1.desc': 'We understand your goals and create a detailed project roadmap',
    'web.page.step2': 'Design & Prototype',
    'web.page.step2.desc': 'Create wireframes and mockups for your approval',
    'web.page.step3': 'Development',
    'web.page.step3.desc': 'Build your website using modern technologies and best practices',
    'web.page.step4': 'Launch & Support',
    'web.page.step4.desc': 'Deploy your site and provide ongoing maintenance',
    'web.page.tech.title': 'Technologies We Use',
    'web.page.quote': 'Get a Quote',
    'web.page.portfolio': 'View Portfolio',
    
    // Opportunities Page
    'opp.page.hero.title': 'Unlock New Opportunities',
    'opp.page.hero.subtitle': 'Accelerate your career and business growth with our expert guidance and global network',
    'opp.page.services.title': 'Opportunity Services',
    'opp.page.career.title': 'Career Counseling',
    'opp.page.career.desc': 'Professional guidance to help you navigate your career path and achieve your professional goals.',
    'opp.page.network.title': 'Networking Events',
    'opp.page.network.desc': 'Connect with professionals and entrepreneurs from around the world at our exclusive events.',
    'opp.page.partner.title': 'Partnership Opportunities',
    'opp.page.partner.desc': 'Discover strategic partnerships to expand your business and reach new markets.',
    'opp.page.consult.title': 'Business Consulting',
    'opp.page.consult.desc': 'Expert advice on business strategy, operations, and growth from experienced consultants.',
    'opp.page.benefits.title': 'Benefits of Our Program',
    'opp.page.benefit1': 'Access to Global Network',
    'opp.page.benefit1.desc': 'Connect with professionals across multiple industries and countries',
    'opp.page.benefit2': 'Expert Mentorship',
    'opp.page.benefit2.desc': 'Learn from successful entrepreneurs and business leaders',
    'opp.page.benefit3': 'Exclusive Resources',
    'opp.page.benefit3.desc': 'Access tools, templates, and guides to accelerate your success',
    'opp.page.benefit4': 'Community Support',
    'opp.page.benefit4.desc': 'Join a supportive community of like-minded professionals',
    'opp.page.apply': 'Apply Now',
    'opp.page.schedule': 'Schedule Consultation',
    
    // Common
    'common.back': 'Back to Home',
    
    // Contact Form Page
    'form.enroll.title': 'Enroll in Language Learning',
    'form.quote.title': 'Request a Web Development Quote',
    'form.apply.title': 'Apply for Opportunities',
    'form.enroll.subtitle': 'Start your language learning journey today',
    'form.quote.subtitle': 'Tell us about your project and we\'ll provide a custom quote',
    'form.apply.subtitle': 'Take the first step towards new opportunities',
    
    // Form Fields
    'form.firstname': 'First Name',
    'form.lastname': 'Last Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone Number',
    'form.language': 'Language to Learn',
    'form.language.french': 'French',
    'form.language.english': 'English',
    'form.level': 'Current Level',
    'form.level.beginner': 'Beginner',
    'form.level.intermediate': 'Intermediate',
    'form.level.advanced': 'Advanced',
    'form.schedule': 'Preferred Schedule',
    'form.schedule.weekday': 'Weekday Mornings',
    'form.schedule.weeknight': 'Weekday Evenings',
    'form.schedule.weekend': 'Weekends',
    'form.schedule.flexible': 'Flexible',
    'form.projecttype': 'Project Type',
    'form.projecttype.business': 'Business Website',
    'form.projecttype.ecommerce': 'E-Commerce Store',
    'form.projecttype.portfolio': 'Portfolio Website',
    'form.projecttype.custom': 'Custom Application',
    'form.budget': 'Estimated Budget',
    'form.budget.small': 'Under $5,000',
    'form.budget.medium': '$5,000 - $15,000',
    'form.budget.large': '$15,000 - $50,000',
    'form.budget.enterprise': '$50,000+',
    'form.timeline': 'Desired Timeline',
    'form.timeline.urgent': 'ASAP (1-2 weeks)',
    'form.timeline.short': '1-2 months',
    'form.timeline.medium': '2-4 months',
    'form.timeline.flexible': 'Flexible',
    'form.interest': 'Area of Interest',
    'form.interest.career': 'Career Counseling',
    'form.interest.network': 'Networking Events',
    'form.interest.partner': 'Partnership Opportunities',
    'form.interest.consult': 'Business Consulting',
    'form.experience': 'Current Experience Level',
    'form.experience.student': 'Student/Entry Level',
    'form.experience.mid': 'Mid-Level Professional',
    'form.experience.senior': 'Senior Professional',
    'form.experience.executive': 'Executive/Entrepreneur',
    'form.message': 'Additional Information',
    'form.submit': 'Submit Application',
    'form.submitting': 'Submitting...',
    'form.success': 'Thank you! We\'ll be in touch soon.',
    'form.error': 'Please fill in all required fields',
    'form.required': 'This field is required',
    'form.email.invalid': 'Please enter a valid email address',
    'form.company': 'Company/Organization (Optional)',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Bienvenue à',
    'hero.company': 'N Global Services',
    'hero.subtitle': 'Favoriser votre croissance grâce à l\'enseignement des langues, au développement web professionnel et à des opportunités infinies de réussite.',
    'hero.explore': 'Explorer les Services',
    'hero.contact': 'Contactez-nous',
    
    // Services Section
    'services.title': 'Nos Services',
    'services.subtitle': 'Choisissez parmi notre gamme complète de services conçus pour favoriser votre croissance personnelle et professionnelle.',
    
    // Language Learning Service
    'service.lang.title': 'Apprentissage des Langues',
    'service.lang.desc': 'Maîtrisez le français ou l\'anglais avec nos cours dirigés par des experts et conçus pour tous les niveaux.',
    'service.lang.feature1': 'Instructeurs de langue maternelle',
    'service.lang.feature2': 'Cours en ligne et en personne flexibles',
    'service.lang.feature3': 'Parcours d\'apprentissage personnalisés',
    'service.lang.feature4': 'Programmes d\'immersion culturelle',
    'service.lang.cta': 'Commencer à Apprendre',
    
    // Web Development Service
    'service.web.title': 'Développement Web',
    'service.web.desc': 'Services de développement de sites web professionnels adaptés pour améliorer la présence en ligne de votre entreprise.',
    'service.web.feature1': 'Design responsive personnalisé',
    'service.web.feature2': 'Solutions e-commerce',
    'service.web.feature3': 'Optimisation SEO',
    'service.web.feature4': 'Maintenance et support continus',
    'service.web.cta': 'Créer Votre Site Web',
    
    // Opportunities Service
    'service.opp.title': 'Débloquer des Opportunités',
    'service.opp.desc': 'Découvrez des voies vers l\'avancement de carrière, le réseautage et les opportunités de croissance d\'entreprise.',
    'service.opp.feature1': 'Conseils et orientation de carrière',
    'service.opp.feature2': 'Événements de réseautage internationaux',
    'service.opp.feature3': 'Opportunités de partenariat',
    'service.opp.feature4': 'Services de conseil aux entreprises',
    'service.opp.cta': 'Explorer les Opportunités',
    
    // Why Choose Us
    'why.title': 'Pourquoi Choisir N Global Services?',
    'why.expert.title': 'Équipe d\'Experts',
    'why.expert.desc': 'Des professionnels avec des années d\'expérience dans leurs domaines respectifs',
    'why.global.title': 'Portée Mondiale',
    'why.global.desc': 'Connecter des clients du monde entier avec des opportunités et des services',
    'why.results.title': 'Résultats Prouvés',
    'why.results.desc': 'Historique de succès dans l\'aide aux clients pour atteindre leurs objectifs',
    
    // Footer
    'footer.company.desc': 'Votre partenaire de confiance pour l\'apprentissage des langues, le développement web et le déblocage de nouvelles opportunités.',
    'footer.links': 'Liens Rapides',
    'footer.contact.title': 'Informations de Contact',
    'footer.rights': '© 2025 N Global Services. Tous droits réservés.',
    
    // Language Learning Page
    'lang.page.hero.title': 'Programmes d\'Apprentissage des Langues',
    'lang.page.hero.subtitle': 'Maîtrisez le français ou l\'anglais en toute confiance grâce à nos programmes linguistiques complets',
    'lang.page.french.title': 'Cours de Langue Française',
    'lang.page.french.desc': 'Du débutant au avancé, apprenez le français avec des locuteurs natifs et immergez-vous dans la langue.',
    'lang.page.english.title': 'Cours de Langue Anglaise',
    'lang.page.english.desc': 'Améliorez vos compétences en anglais pour les affaires, les voyages ou les études avec un enseignement personnalisé.',
    'lang.page.levels.title': 'Niveaux de Cours',
    'lang.page.beginner': 'Débutant',
    'lang.page.beginner.desc': 'Parfait pour ceux qui commencent leur voyage linguistique',
    'lang.page.intermediate': 'Intermédiaire',
    'lang.page.intermediate.desc': 'Développez vos connaissances existantes et gagnez en fluidité',
    'lang.page.advanced': 'Avancé',
    'lang.page.advanced.desc': 'Atteignez la maîtrise de niveau natif et la maîtrise culturelle',
    'lang.page.features.title': 'Ce Que Vous Obtiendrez',
    'lang.page.feature1': 'Sessions en direct interactives avec des instructeurs natifs',
    'lang.page.feature2': 'Plans d\'étude personnalisés adaptés à vos objectifs',
    'lang.page.feature3': 'Accès à des matériaux et ressources d\'apprentissage exclusifs',
    'lang.page.feature4': 'Évaluations régulières des progrès et certifications',
    'lang.page.feature5': 'Horaires flexibles pour les cours en ligne et en personne',
    'lang.page.feature6': 'Activités et événements d\'immersion culturelle',
    'lang.page.enroll': 'S\'inscrire Maintenant',
    'lang.page.learn.more': 'En Savoir Plus',
    
    // Web Development Page
    'web.page.hero.title': 'Développement Web Professionnel',
    'web.page.hero.subtitle': 'Transformez votre vision en un site web magnifique et performant',
    'web.page.services.title': 'Nos Services de Développement Web',
    'web.page.design.title': 'Design Personnalisé',
    'web.page.design.desc': 'Des designs magnifiques et responsives qui reflètent l\'identité de votre marque et engagent votre audience.',
    'web.page.ecommerce.title': 'Solutions E-Commerce',
    'web.page.ecommerce.desc': 'Boutiques en ligne complètes avec traitement sécurisé des paiements et gestion des stocks.',
    'web.page.seo.title': 'Optimisation SEO',
    'web.page.seo.desc': 'Maximisez votre visibilité en ligne avec l\'optimisation pour les moteurs de recherche intégrée à chaque page.',
    'web.page.maintenance.title': 'Maintenance et Support',
    'web.page.maintenance.desc': 'Support technique continu et mises à jour régulières pour maintenir votre site en bon état de fonctionnement.',
    'web.page.process.title': 'Notre Processus de Développement',
    'web.page.step1': 'Découverte et Planification',
    'web.page.step1.desc': 'Nous comprenons vos objectifs et créons une feuille de route détaillée du projet',
    'web.page.step2': 'Design et Prototype',
    'web.page.step2.desc': 'Créer des wireframes et des maquettes pour votre approbation',
    'web.page.step3': 'Développement',
    'web.page.step3.desc': 'Construire votre site web en utilisant des technologies modernes et les meilleures pratiques',
    'web.page.step4': 'Lancement et Support',
    'web.page.step4.desc': 'Déployer votre site et fournir une maintenance continue',
    'web.page.tech.title': 'Technologies Que Nous Utilisons',
    'web.page.quote': 'Demander un Devis',
    'web.page.portfolio': 'Voir le Portfolio',
    
    // Opportunities Page
    'opp.page.hero.title': 'Débloquez de Nouvelles Opportunités',
    'opp.page.hero.subtitle': 'Accélérez votre carrière et la croissance de votre entreprise avec nos conseils d\'experts et notre réseau mondial',
    'opp.page.services.title': 'Services d\'Opportunités',
    'opp.page.career.title': 'Conseil en Carrière',
    'opp.page.career.desc': 'Orientation professionnelle pour vous aider à naviguer dans votre parcours professionnel et atteindre vos objectifs.',
    'opp.page.network.title': 'Événements de Réseautage',
    'opp.page.network.desc': 'Connectez-vous avec des professionnels et des entrepreneurs du monde entier lors de nos événements exclusifs.',
    'opp.page.partner.title': 'Opportunités de Partenariat',
    'opp.page.partner.desc': 'Découvrez des partenariats stratégiques pour développer votre entreprise et atteindre de nouveaux marchés.',
    'opp.page.consult.title': 'Conseil aux Entreprises',
    'opp.page.consult.desc': 'Conseils d\'experts sur la stratégie, les opérations et la croissance de l\'entreprise de consultants expérimentés.',
    'opp.page.benefits.title': 'Avantages de Notre Programme',
    'opp.page.benefit1': 'Accès au Réseau Mondial',
    'opp.page.benefit1.desc': 'Connectez-vous avec des professionnels de plusieurs industries et pays',
    'opp.page.benefit2': 'Mentorat d\'Experts',
    'opp.page.benefit2.desc': 'Apprenez d\'entrepreneurs prospères et de leaders d\'entreprise',
    'opp.page.benefit3': 'Ressources Exclusives',
    'opp.page.benefit3.desc': 'Accédez à des outils, modèles et guides pour accélérer votre succès',
    'opp.page.benefit4': 'Soutien Communautaire',
    'opp.page.benefit4.desc': 'Rejoignez une communauté de soutien de professionnels partageant les mêmes idées',
    'opp.page.apply': 'Postuler Maintenant',
    'opp.page.schedule': 'Planifier une Consultation',
    
    // Common
    'common.back': 'Retour à l\'Accueil',
    
    // Contact Form Page
    'form.enroll.title': 'S\'inscrire à l\'Apprentissage des Langues',
    'form.quote.title': 'Demander un Devis de Développement Web',
    'form.apply.title': 'Postuler pour des Opportunités',
    'form.enroll.subtitle': 'Commencez votre parcours d\'apprentissage des langues aujourd\'hui',
    'form.quote.subtitle': 'Parlez-nous de votre projet et nous vous fournirons un devis personnalisé',
    'form.apply.subtitle': 'Faites le premier pas vers de nouvelles opportunités',
    
    // Form Fields
    'form.firstname': 'Prénom',
    'form.lastname': 'Nom de famille',
    'form.email': 'Adresse e-mail',
    'form.phone': 'Numéro de téléphone',
    'form.language': 'Langue à apprendre',
    'form.language.french': 'Français',
    'form.language.english': 'Anglais',
    'form.level': 'Niveau actuel',
    'form.level.beginner': 'Débutant',
    'form.level.intermediate': 'Intermédiaire',
    'form.level.advanced': 'Avancé',
    'form.schedule': 'Horaire préféré',
    'form.schedule.weekday': 'Matinées en semaine',
    'form.schedule.weeknight': 'Soirées en semaine',
    'form.schedule.weekend': 'Week-ends',
    'form.schedule.flexible': 'Flexible',
    'form.projecttype': 'Type de projet',
    'form.projecttype.business': 'Site Web d\'Entreprise',
    'form.projecttype.ecommerce': 'Boutique E-Commerce',
    'form.projecttype.portfolio': 'Site Web Portfolio',
    'form.projecttype.custom': 'Application Personnalisée',
    'form.budget': 'Budget estimé',
    'form.budget.small': 'Moins de 5 000 $',
    'form.budget.medium': '5 000 $ - 15 000 $',
    'form.budget.large': '15 000 $ - 50 000 $',
    'form.budget.enterprise': '50 000 $+',
    'form.timeline': 'Délai souhaité',
    'form.timeline.urgent': 'Dès que possible (1-2 semaines)',
    'form.timeline.short': '1-2 mois',
    'form.timeline.medium': '2-4 mois',
    'form.timeline.flexible': 'Flexible',
    'form.interest': 'Domaine d\'intérêt',
    'form.interest.career': 'Conseil en Carrière',
    'form.interest.network': 'Événements de Réseautage',
    'form.interest.partner': 'Opportunités de Partenariat',
    'form.interest.consult': 'Conseil aux Entreprises',
    'form.experience': 'Niveau d\'expérience actuel',
    'form.experience.student': 'Étudiant/Niveau d\'entrée',
    'form.experience.mid': 'Professionnel de niveau intermédiaire',
    'form.experience.senior': 'Professionnel senior',
    'form.experience.executive': 'Cadre/Entrepreneur',
    'form.message': 'Informations supplémentaires',
    'form.submit': 'Soumettre la candidature',
    'form.submitting': 'Envoi en cours...',
    'form.success': 'Merci! Nous vous contacterons bientôt.',
    'form.error': 'Veuillez remplir tous les champs obligatoires',
    'form.required': 'Ce champ est obligatoire',
    'form.email.invalid': 'Veuillez saisir une adresse e-mail valide',
    'form.company': 'Entreprise/Organisation (Optionnel)',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
