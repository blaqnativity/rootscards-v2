import axios from "axios";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

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
      console.error("API Error:", error.message);
    } else {
      console.error("API Error:", error);
    }
    return res.status(500).json({ error: "Failed to submit waitlist" });
  }
}
