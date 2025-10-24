import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contentSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Content Management API
  
  // Get all website content
  app.get("/api/content", async (req, res) => {
    try {
      const content = await storage.getContent();
      res.json(content);
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ error: "Failed to fetch content" });
    }
  });

  // Update website content
  app.put("/api/content", async (req, res) => {
    try {
      // Validate the content using Zod schema
      const validatedContent = contentSchema.parse(req.body);
      const updatedContent = await storage.updateContent(validatedContent);
      res.json(updatedContent);
    } catch (error) {
      console.error("Error updating content:", error);
      res.status(400).json({ error: "Invalid content format" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
