import axios from "axios";

export const submitWaitlist = async (formData: {
  name: string;
  spaceType: string;
  email: string;
}) => {
  const now = new Date();
  const nowTs = now.getTime();
  const nowDate = now.toISOString().split("T")[0];
  const nowFull = now.toISOString();

  const payload = {
    d: {
      identity: formData.email,
      ts: nowTs,
      type: "member",
      evtName: "waitlist",
      reference: `spaces-${formData.email}`,
      evtData: {
        timestamp: nowTs,
        date: nowDate,
        first_seen: nowFull,
        id: formData.email,
        card: "waitlist",
        full_name: formData.name,
        email: formData.email,
        first_name: formData.name.split(" ")[0] || "",
        last_name: formData.name.split(" ")[1] || "",
        installation: formData.spaceType || null,
      },
    },
  };

  // Call your Vercel API endpoint, not the external API
  const res = await axios.post("/api/submit-waitlist", payload);
  return res.data;
};
