import { useState } from "react";

interface PlanFeature {
  text: string;
}

interface Plan {
  id: string;
  name: string;
  price: string;
  period?: string;
  highlight?: string;
  buttonText: string;
  buttonVariant?: "primary" | "secondary";
  features: PlanFeature[];
  popular?: boolean;
}

export const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const plans: Plan[] = [
    {
      id: "starter",
      name: "Starter",
      price: "₦0",
      period: "/month",
      buttonText: "Free trial",
      buttonVariant: "primary",
      features: [
        { text: "Up to 10 stays/month" },
        { text: "WhatsApp check-in" },
        { text: "Email support" },
      ],
    },
    {
      id: "growth",
      name: "Growth",
      price: billing === "monthly" ? "₦15,000" : "₦150,000",
      period: billing === "monthly" ? "/unit/month" : "/unit/year",
      highlight: "Popular 🔥",
      buttonText: "Subscribe",
      buttonVariant: "primary",
      features: [
        { text: "Deposits & upsells" },
        { text: "Tasks & housekeeping" },
        { text: "Analytics" },
        { text: "Priority template approvals" },
      ],
      popular: true,
    },
    {
      id: "pro",
      name: "Pro",
      price: "Let’s talk",
      period: "/month",
      buttonText: "Book a call",
      buttonVariant: "secondary",
      features: [
        { text: "50+ units" },
        { text: "API & webhooks" },
        { text: "Noise sensors" },
        { text: "Concierge workflows" },
        { text: "Priority support" },
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-2">
          Fair, flexible pricing
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Start free. Scale as you add units. Cancel anytime.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-200 p-1 rounded-full flex">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                billing === "monthly" ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                billing === "annual" ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-2 bg-white flex flex-col`}
            >
              <div className="mb-2 bg-[#E6E6E6] p-2 rounded-2xl">
                <span className="text-xs mb-2 bg-white px-2 py-1 rounded-full">
                  {plan.name}
                </span>
                {/* Price */}
                <h3 className="text-2xl font-bold">
                  {plan.price}
                  <span className="text-sm font-normal text-gray-500">
                    {plan.period}
                  </span>
                </h3>
              </div>

              {plan.highlight && (
                <p className="text-sm text-orange-600 mt-1">{plan.highlight}</p>
              )}

              {/* Button */}

              {/* Features */}
              {/* <ul className="mt-6 space-y-2 text-left">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <span className="mr-2">✔️</span> {feature.text}
                  </li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
