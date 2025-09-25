import whatsapp from "@/assets/images/whatsapp (2).svg";
import lock from "@/assets/images/lock.svg";
import tasks from "@/assets/images/tasks.svg";
import noise from "@/assets/images/noise.svg";
import deposits from "@/assets/images/deposits.svg";
import owner from "@/assets/images/owner.svg";

interface FeaturesProps {
  image?: string;
  title: string;
  desc: string;
  color?: string;
}

const properties: FeaturesProps[] = [
  {
    image: whatsapp,
    title: "WhatsApp self-check-in",
    desc: "OTP, selfie + ID, and deposit hold in a friendly, 2-minute flow.",
    color: "#25D366",
  },
  {
    image: lock,
    title: "Smart Access",
    desc: "Auto-issue/rotate codes for keypads and popular smart locks (Tuya, Yale).",
    color: "#0181D7",
  },
  {
    image: deposits,
    title: "Deposit & Upsells",
    desc: "Pre-authorize, release, or charge. Offer late checkout, cleaning, and add-ons.",
    color: "#BB12C1",
  },
  {
    image: tasks,
    title: "Tasks & Housekeeping",
    desc: "Cleaning auto-dispatches after checkout with photo proof and timestamps.",
    color: "#836A32",
  },
  {
    image: noise,
    title: "Noise and Incidents",
    desc: "Detect parties early, log evidence, and reduce charge back drama.",
    color: "#EB0B0E",
  },
  {
    image: owner,
    title: "Owner Analytics",
    desc: "Arrivals today, SLA performance, revenue, repeat rates—clean and actionable.",
    color: "#F0C118",
  },
];

export const Features = () => {
  return (
    <section className="py-12">
      <div className="max-w-[1680px] mx-auto px-4">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((feature, index) => (
            <li
              key={index}
              className="rounded-2xl border border-gray-200 p-6 bg-white flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-lg"
                style={{ backgroundColor: feature.color }}
              >
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-5 h-5"
                  />
                )}
              </div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
