import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { useI18n } from '@/lib/i18n';
import { 
  CheckCircle2,
  Truck,
  ShieldCheck,
  Globe2,
  FileText,
  DollarSign,
  BarChart3,
  Settings
} from 'lucide-react';
import type { Service } from '@shared/schema';

const serviceIcons: Record<string, any> = {
  default: CheckCircle2,
  shipping: Truck,
  quality: ShieldCheck,
  global: Globe2,
  documentation: FileText,
  finance: DollarSign,
  statistics: BarChart3,
  technical: Settings,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { language } = useI18n();
  const Icon = serviceIcons[service.icon] || serviceIcons.default;

  return (
    <Card className="group hover-elevate active-elevate-2 h-full overflow-visible" data-testid={`card-service-${service.id}`}>
      <CardHeader className="space-y-3 pb-3">
        <div className="h-11 w-11 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <h3 className="font-semibold text-base leading-tight" data-testid={`text-service-title-${service.id}`}>
          {service.title[language]}
        </h3>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-muted-foreground leading-relaxed" data-testid={`text-service-description-${service.id}`}>
          {service.description[language]}
        </p>
      </CardContent>
    </Card>
  );
}
