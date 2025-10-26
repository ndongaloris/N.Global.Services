import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  imageUrl: string;
  ctaText: string;
  page: string;
  onNavigate: (page: string) => void;
}

export default function ServiceCard({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  imageUrl,
  ctaText,
  page,
  onNavigate
}: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0" style={{ backgroundColor: 'white' }}>
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(to bottom, transparent, var(--gunmetal))' }}></div>
        <div className="absolute bottom-4 left-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--cadet-gray)' }}>
          <Icon className="h-8 w-8" style={{ color: 'var(--night)' }} />
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="mb-3" style={{ color: 'var(--gunmetal)' }}>
          {title}
        </h3>
        <p className="mb-4" style={{ color: 'var(--davys-gray)' }}>
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1" style={{ color: 'var(--cadet-gray)' }}>✓</span>
              <span style={{ color: 'var(--davys-gray)' }}>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          onClick={() => onNavigate(page)}
          className="w-full transition-all duration-300 hover:scale-105"
          style={{ 
            backgroundColor: 'var(--gunmetal)', 
            color: 'var(--mint-cream)' 
          }}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
}
