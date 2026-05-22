import { z } from 'zod';

// Language Type
export const languageSchema = z.enum(['en', 'id']);
export type Language = z.infer<typeof languageSchema>;

// Bilingual Content Schema
export const bilingualTextSchema = z.object({
  en: z.string(),
  id: z.string(),
});
export type BilingualText = z.infer<typeof bilingualTextSchema>;

// Product Category Schema
export const productCategorySchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: bilingualTextSchema,
  description: bilingualTextSchema,
  icon: z.string(),
  productCount: z.number().int().nonnegative(),
});
export type ProductCategory = z.infer<typeof productCategorySchema>;

// Product Schema
export const productSchema = z.object({
  id: z.string(),
  categoryId: z.string(),
  name: bilingualTextSchema,
  description: bilingualTextSchema,
  specifications: bilingualTextSchema.optional(),
  benefits: bilingualTextSchema.optional(),
  applications: bilingualTextSchema.optional(),
  featured: z.boolean().optional(),
});
export type Product = z.infer<typeof productSchema>;

// Service Schema
export const serviceSchema = z.object({
  id: z.string(),
  icon: z.string(),
  title: bilingualTextSchema,
  description: bilingualTextSchema,
});
export type Service = z.infer<typeof serviceSchema>;

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
export type ContactForm = z.infer<typeof contactFormSchema>;

// Validation helpers for static data
export const validateProduct = (data: unknown): Product => {
  return productSchema.parse(data);
};

export const validateProductCategory = (data: unknown): ProductCategory => {
  return productCategorySchema.parse(data);
};

export const validateService = (data: unknown): Service => {
  return serviceSchema.parse(data);
};
