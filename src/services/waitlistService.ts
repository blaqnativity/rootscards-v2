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
        phone: "",
        first_name: formData.name.split(" ")[0] || "",
        last_name: formData.name.split(" ").slice(1).join(" ") || "",
        installation: formData.spaceType || null,
      },
    },
  };

  // ------------------------------------------------------------------
  // ✅ CODE INJECTED HERE: Log the payload being SENT to the server
  console.log("Payload being sent to /api/submit-waitlist:", payload);
  // ------------------------------------------------------------------

  try {
    const res = await axios.post("/api/submit-waitlist", payload, {
      headers: { "Content-Type": "application/json" },
    });

    // ------------------------------------------------------------------
    // ✅ CODE INJECTED HERE: Log the response data received from the server
    console.log("API Response Data Received:", res.data);
    // ------------------------------------------------------------------

    return res.data;
  } catch (error) {
    console.error("Submission failed:", error);
    // Re-throw the error so the UI component can handle it (e.g., show a message)
    throw error;
  }
};
