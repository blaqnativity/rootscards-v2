import axios from "axios";

// Helper function to format the Date object into 'YYYY-MM-DD HH:MM:SS'
const formatDateTime = (date: Date): string => {
  // Pad function ensures single digits are prefixed with a '0' (e.g., 9 -> 09)
  const pad = (num: number) => num.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // Months are 0-indexed (0=Jan)
  const day = pad(date.getDate());

  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  // Result: 2025-10-15 09:12:34
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const submitWaitlist = async (formData: {
  name: string;
  spaceType: string;
  email: string;
}) => {
  const now = new Date();
  const nowTs = now.getTime();
  const nowDate = now.toISOString().split("T")[0];

  // Use the custom formatter for the exact required format
  const nowFormatted = formatDateTime(now);

  const payload = {
    d: {
      identity: formData.email,
      ts: nowTs,
      type: "member",
      evtName: "waitlist",
      // If you are still seeing the "duplicate reference" error, consider adding ${nowTs} here:
      // reference: `spaces-${formData.email}-${nowTs}`,
      reference: `spaces-${formData.email}`,
      evtData: {
        timestamp: nowTs,
        date: nowDate,
        first_seen: nowFormatted,
        id: formData.email,
        card: "waitlist",
        full_name: formData.name,
        email: formData.email,
        phone: "",
        first_name: formData.name.split(" ")[0] || "",
        last_name: formData.name.split(" ").slice(1).join(" ") || "",
        installation: formData.spaceType || null,
      },
    },
  };

  // Log the payload being SENT to the server (for debugging)
  console.log("Payload being sent to /api/submit-waitlist:", payload);

  try {
    const res = await axios.post("/api/submit-waitlist", payload, {
      headers: { "Content-Type": "application/json" },
    });

    // Log the response data received from the server (for debugging)
    console.log("API Response Data Received:", res.data);

    return res.data;
  } catch (error) {
    console.error("Submission failed:", error);
    // Re-throw the error so the UI component can handle it (e.g., show a message)
    throw error;
  }
};
