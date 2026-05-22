import { useEffect } from "react";
import { Switch, Route, useRoute, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/lib/i18n";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Profile from "@/pages/Profile";
import Products from "@/pages/Products";
import ProductCategory from "@/pages/ProductCategory";
import ProductLanding from "@/pages/ProductLanding";
import ProductDetail from "@/pages/ProductDetail";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const LANDING_SLUGS = new Set([
  'soybean-meal-soyameal-indonesia',
  'rice-ddgs-indonesia',
  'rapeseed-meal-canola-meal-indonesia',
  'yellow-maize-feed-corn-indonesia',
  'corn-grits-maize-grits-india',
  'rice-grits-indonesia',
  'corn-flour-india',
  'rice-flour-india',
  'groundnut-kernels-peanuts-india',
  'liquid-glucose-india',
]);

function ProductSlugRouter() {
  const [, params] = useRoute('/products/:slug');
  const slug = params?.slug ?? '';
  if (LANDING_SLUGS.has(slug)) return <ProductLanding />;
  return <ProductCategory />;
}

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
      <Route path="/import-support" component={Services} />
      <Route path="/products" component={Products} />
      <Route path="/products/:categorySlug/:productId" component={ProductDetail} />
      <Route path="/products/:slug" component={ProductSlugRouter} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <TooltipProvider>
          <Layout>
            <ScrollToTop />
            <Router />
          </Layout>
          <Toaster />
        </TooltipProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}

export default App;
