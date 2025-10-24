import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Content Management Types
export const trustIndicatorSchema = z.object({
  text: z.string(),
  icon: z.string(),
});

export const serviceSchema = z.object({
  title: z.string(),
  description: z.string(),
  features: z.array(z.string()),
  icon: z.string(),
});

export const statSchema = z.object({
  number: z.string(),
  label: z.string(),
  description: z.string(),
});

export const testimonialSchema = z.object({
  name: z.string(),
  investment: z.string(),
  quote: z.string(),
  initials: z.string(),
});

export const contentSchema = z.object({
  hero: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    trustIndicators: z.array(trustIndicatorSchema),
  }),
  services: z.array(serviceSchema),
  stats: z.array(statSchema),
  testimonials: z.array(testimonialSchema),
  contact: z.object({
    address: z.object({
      line1: z.string(),
      line2: z.string(),
      line3: z.string(),
    }),
    phone: z.object({
      primary: z.string(),
      secondary: z.string(),
      hours: z.string(),
    }),
    email: z.object({
      primary: z.string(),
      secondary: z.string(),
      note: z.string(),
    }),
    businessHours: z.array(z.string()),
  }),
  footer: z.object({
    companyName: z.string(),
    owner: z.string(),
    establishedYear: z.string(),
    tagline: z.string(),
    registration: z.string(),
    copyright: z.string(),
  }),
});

export type Content = z.infer<typeof contentSchema>;
