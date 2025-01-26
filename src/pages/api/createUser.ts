// filepath: /Users/premmann/Next/docker/docker-app-001/src/pages/api/createUser.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          createdAt: new Date(), // Insert current date
        },
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Error creating user" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}