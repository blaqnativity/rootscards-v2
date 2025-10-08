import axios from "axios";

export const submitWaitlist = async (formData: {
  name: string;
  spaceType: string;
  email: string;
}) => {
  console.log("Received from form:", formData);

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
        last_name: formData.name.split(" ")[1] || "",
        phone_number: "",
        installation: formData.spaceType || null,
      },
    },
  };

  try {
    const response = await axios.post(
      "https://api.therootshive.com/v3/rootscard/addevent",
      payload,
      {
        headers: { "Content-Type": "application/json" },
        auth: {
          username: "sample",
          password: "rootscards",
        },
      }
    );

    console.log("✅ API response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error submitting waitlist:",
      error.response?.data || error.message
    );
    throw error;
  }
};
