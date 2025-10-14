import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  console.log("Forwarding payload:", req.body);

  try {
    const response = await axios.post(
      "https://api.therootshive.com/v3/rootscard/addfrontendevent",
      req.body,
      {
        headers: { "Content-Type": "application/json" },
        auth: {
          username: process.env.API_USER!,
          password: process.env.API_PASS!,
        },
      }
    );

    return res.status(200).json(response.data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
      console.log("Received body:", req.body);
    }
    return res.status(500).json({ error: "Failed to submit waitlist" });
  }
}
