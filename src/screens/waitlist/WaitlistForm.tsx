import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";

export const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    spaceType: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // 🔥 You can connect this to an API or Google Form later
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black/60 rounded-3xl p-8 backdrop-blur-md border border-white/10">
      <h3 className="text-white text-lg font-semibold mb-2">
        Join our Waitlist
      </h3>
      <p className="text-gray-300 text-sm mb-6">
        Be among the first to experience what we’re building.
        <br />
        Founder pricing + priority onboarding.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 md:flex-wrap md:gap-3"
      >
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="flex-1 bg-black/30 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
          />

          <select
            name="spaceType"
            value={formData.spaceType}
            onChange={handleChange}
            className="flex-1 bg-black/30 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
          >
            <option value="">Space type</option>
            <option value="club">Offices</option>
            <option value="event">Apartments</option>
            <option value="lounge">Churches</option>
            <option value="lounge">Event spaces</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            className="flex-1 bg-black/30 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
          />

          <button
            type="submit"
            className="w-fit inline-flex items-center justify-center rounded-full bg-white text-black pl-3 py-1 text-sm font-semibold hover:bg-gray-200 transition whitespace-nowrap"
          >
            Join the waitlist
            <span className="bg-black ml-2 mr-1 p-2 rounded-full">
              <ArrowRight size={18} color="white" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
