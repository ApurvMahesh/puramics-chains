import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      await storage.createContactMessage(data);
      res.json({ message: "Message sent successfully" });
    } catch (err: any) {
      if (err.errors) {
        res.status(400).json({ message: fromZodError(err).message });
      } else {
        res.status(500).json({ message: err.message });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
