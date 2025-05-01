import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for affiliate program subscription
  app.post('/api/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
      
      // Here you would typically save this to a database
      // For now we'll just return a success response
      
      return res.status(200).json({ 
        success: true, 
        message: 'Email subscription successful' 
      });
    } catch (error) {
      console.error('Subscription error:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Server error during subscription' 
      });
    }
  });

  // Setup contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'Name, email and message are required' 
        });
      }
      
      // Process contact form submission
      // This would typically involve sending an email or saving to a database
      
      return res.status(200).json({ 
        success: true, 
        message: 'Your message has been sent' 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Server error processing your request' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
