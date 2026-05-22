import { Link } from 'wouter';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/lib/i18n';
import { 
  Sprout, 
  Droplet, 
  Coffee, 
  Flame, 
  Wheat, 
  Package, 
  Zap,
  Armchair,
  Box
} from 'lucide-react';
import type { ProductCategory } from '@shared/schema';

const categoryIcons: Record<string, any> = {
  'oil-seeds': Sprout,
  'oils': Droplet,
  'pulses': Coffee,
  'spices': Flame,
  'grains': Wheat,
  'extraction': Package,
  'fertilizer': Zap,
  'furniture': Armchair,
  'general': Box,
};

interface CategoryCardProps {
  category: ProductCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { language, t } = useI18n();
  const Icon = categoryIcons[category.slug] || Box;

  return (
    <Link href={`/products/${category.slug}`}>
      <Card className="group hover-elevate active-elevate-2 h-full cursor-pointer overflow-visible" data-testid={`card-category-${category.slug}`}>
        <CardHeader className="space-y-3 pb-3">
          <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1.5" data-testid={`text-category-name-${category.slug}`}>
              {category.name[language]}
            </h3>
            <Badge variant="secondary" className="text-xs" data-testid={`badge-product-count-${category.slug}`}>
              {category.productCount} {t('common.products')}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2" data-testid={`text-category-description-${category.slug}`}>
            {category.description[language]}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
