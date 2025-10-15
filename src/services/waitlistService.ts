import axios from "axios";

const formatDateTime = (date: Date): string => {
  const pad = (num: number) => num.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());

  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const submitWaitlist = async (formData: {
  name: string;
  spaceType: string;
  email: string;
}) => {
  const now = new Date();

  const nowTsSeconds = Math.floor(now.getTime() / 1000);

  const nowDate = now.toISOString().split("T")[0];
  const nowFormatted = formatDateTime(now);

  const referenceValue = `spaces-${formData.email}`;

  const payload = {
    d: {
      identity: formData.email,
      ts: nowTsSeconds,
      type: "member",
      evtName: "waitlist",
      reference: referenceValue,
      evtData: {
        id: formData.email,
        Timestamp: nowTsSeconds,
        First_Seen: nowFormatted,
        Date: nowDate,
        Event: "waitlist",
        Name: formData.name,
        Email_Address: formData.email,
        Installation: formData.spaceType || null,
      },
    },
  };

  console.log("Final Payload being sent to /api/submit-waitlist:", payload);

  try {
    const res = await axios.post("/api/submit-waitlist", payload, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("API Response Data Received:", res.data);

    return res.data;
  } catch (error) {
    console.error("Submission failed:", error);
    throw error;
  }
};
