import behavioral from "../assets/images/behavioral.svg";
import optimization from "../assets/images/optimize.svg";
import seamless from "../assets/images/seamless.svg";
import insights from "../assets/images/insights.svg";

export interface Processes {
  tagline: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export const processesCard: Processes[] = [
  {
    tagline: "Seamless",
    title: "Seamless Arrival",
    description: "Tap NFC, scan QR or Face ID; no clipboards, no lines",
    image: seamless,
    color: "#F0E99C",
  },
  {
    tagline: "Segmentation",
    title: "Behavioral Segmentation",
    description: "Group visitors by frequency, plan, priority or cohort.",
    image: behavioral,
    color: "#CED7F6",
  },
  {
    tagline: "Optimization",
    title: "Real-Time Optimization",
    description: "AI routes people, predicts wait times and triggers updates.",
    image: optimization,
    color: "#A395B2",
  },
  {
    tagline: "Insights",
    title: "Insights That Matter",
    description: "Throughput, dwell time, service SLAs and revenue impact.",
    image: insights,
    color: "#CFE69B",
  },
];

interface FeaturesProps {
  image?: string;
  title: string;
  desc: string;
  color?: string;
}

// images for steps section in shortlets screen
import checkin from "@/assets/images/check-in.svg";
import kyc from "@/assets/images/kyc.svg";
import acecss from "@/assets/images/access.svg";
import checkout from "@/assets/images/checkout.svg";

// features for steps section in shortlets screen
export const cards: FeaturesProps[] = [
  {
    image: checkin,
    title: "Pre-check-in link",
    desc: "Sent 24 hours before arrival via WhatsApp/SMS to ensure a smooth check-in experience.",
  },
  {
    image: kyc,
    title: "KYC & deposit",
    desc: "Phone verify → selfie + ID → deposit pre-auth. Done in under two minutes.",
  },
  {
    image: acecss,
    title: "Access Issued",
    desc: "Time-bound keypad code or smart-lock token released at check-in time.",
  },
  {
    image: checkout,
    title: "Checkout & Cleaning",
    desc: "Guest checks out → cleaner gets task → photo proof → deposit released/adjusted → receipt.",
  },
];

// images for features section in shortlets screen
import whatsapp from "@/assets/images/whatsapp (2).svg";
import lock from "@/assets/images/lock.svg";
import tasks from "@/assets/images/tasks.svg";
import noise from "@/assets/images/noise.svg";
import deposits from "@/assets/images/deposits.svg";
import owner from "@/assets/images/owner.svg";

// features for features section in shortlets screen
export const properties: FeaturesProps[] = [
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
