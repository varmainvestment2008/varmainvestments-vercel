import { type User, type InsertUser, type Content } from "@shared/schema";
import { randomUUID } from "crypto";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getContent(): Promise<Content>;
  updateContent(content: Content): Promise<Content>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contentPath: string;

  constructor() {
    this.users = new Map();
    this.contentPath = join(process.cwd(), "server", "content.json");
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
      const data = await readFile(this.contentPath, "utf-8");
      return JSON.parse(data) as Content;
    } catch (error) {
      throw new Error("Failed to read content file");
    }
  }

  async updateContent(content: Content): Promise<Content> {
    try {
      await writeFile(this.contentPath, JSON.stringify(content, null, 2), "utf-8");
      return content;
    } catch (error) {
      throw new Error("Failed to update content file");
    }
  }
}

export const storage = new MemStorage();
