import { Link } from 'wouter';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/lib/i18n';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@shared/schema';

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

export function ProductCard({ product, showCategory = false }: ProductCardProps) {
  const { language, t } = useI18n();

  return (
    <Card className="group hover-elevate active-elevate-2 h-full flex flex-col overflow-visible" data-testid={`card-product-${product.id}`}>
      <CardHeader className="pb-3">
        {product.featured && (
          <Badge className="w-fit mb-1.5 text-xs" data-testid={`badge-featured-${product.id}`}>
            {language === 'en' ? 'Featured' : 'Unggulan'}
          </Badge>
        )}
        <h3 className="font-semibold text-base leading-tight" data-testid={`text-product-name-${product.id}`}>
          {product.name[language]}
        </h3>
      </CardHeader>
      <CardContent className="flex-1 pt-0">
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3" data-testid={`text-product-description-${product.id}`}>
          {product.description[language]}
        </p>
      </CardContent>
      <CardFooter className="pt-3">
        <Link href={`/products/${product.categoryId}/${product.id}`} className="w-full">
          <Button 
            variant="ghost"
            size="sm"
            className="w-full group/btn justify-between"
            data-testid={`button-view-product-${product.id}`}
          >
            <span className="text-xs">{t('products.viewDetails')}</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
