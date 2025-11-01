import { type User, type InsertUser, type Content, websiteContent } from "@shared/schema";
import { randomUUID } from "crypto";
import { readFile } from "fs/promises";
import { join } from "path";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getContent(): Promise<Content>;
  updateContent(content: Content): Promise<Content>;
}

export class DbStorage implements IStorage {
  private users: Map<string, User>;
  private contentId: string = "main";

  constructor() {
    this.users = new Map();
    this.initializeContent();
  }

  private async initializeContent() {
    try {
      const existingContent = await db.select().from(websiteContent).where(eq(websiteContent.id, this.contentId));
      
      if (existingContent.length === 0) {
        const contentPath = join(process.cwd(), "server", "content.json");
        const data = await readFile(contentPath, "utf-8");
        const initialContent = JSON.parse(data) as Content;
        
        await db.insert(websiteContent).values({
          id: this.contentId,
          content: initialContent as any,
        });
        console.log("Database initialized with content from content.json");
      }
    } catch (error) {
      console.error("Error initializing content:", error);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getContent(): Promise<Content> {
    try {
      const result = await db.select().from(websiteContent).where(eq(websiteContent.id, this.contentId));
      
      if (result.length === 0) {
        throw new Error("Content not found in database");
      }
      
      return result[0].content as Content;
    } catch (error) {
      console.error("Error fetching content from database:", error);
      throw new Error("Failed to read content from database");
    }
  }

  async updateContent(content: Content): Promise<Content> {
    try {
      await db.update(websiteContent)
        .set({ content: content as any })
        .where(eq(websiteContent.id, this.contentId));
      
      return content;
    } catch (error) {
      console.error("Error updating content in database:", error);
      throw new Error("Failed to update content in database");
    }
  }
}

export const storage = new DbStorage();
