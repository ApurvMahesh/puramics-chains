import { type ContactMessage, type InsertContact, contactMessages } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContactMessage(message: InsertContact): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContact): Promise<ContactMessage> {
    console.log("contact", contactMessages);
    const [contactMessage] = await db
      .insert(contactMessages)
      .values(message)
      .execute();
    return contactMessage;
  }
}

export const storage = new DatabaseStorage();