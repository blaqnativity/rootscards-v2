import behavioral from "@/assets/images/behavioral.svg";
import optimization from "@/assets/images/optimize.svg";
import seamless from "@/assets/images/seamless.svg";
import insights from "@/assets/images/insights.svg";
import ai from "@/assets/images/ai.svg";
import db from "@/assets/images/db.svg";
import api from "@/assets/images/api.svg";
import qr from "@/assets/images/qr.svg";
import plg from "@/assets/images/plg.svg";
import rfl from "@/assets/images/rfl.svg";
import rsvp from "@/assets/images/rsvp.svg";

import clb from "@/assets/images/clb.svg";

export interface Processes {
  tagline?: string;
  title?: string;
  description: string;
  image?: string;
  color?: string;
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

export const waitlist: Processes[] = [
  {
    description: "Self-check-in (NFC/QR/WhatsApp) + fast manual fallback.",
    image: seamless,
  },
  {
    description: "Smart RSVPs, plus-ones, custom questions.",
    image: rsvp,
  },
  {
    description: "Live dashboard: arrivals, latecomers, repeat-visitor trends.",
    image: db,
  },
  {
    description: "AI insights: engagement, no-shows, peak hours.",
    image: ai,
  },
  {
    description: "Webhooks & simple APIs. Optional NFC kits.",
    image: api,
  },
  {
    description:
      "Growth loops in product-led growth (PLG) create self-sustaining systems.",
    image: plg,
  },
  {
    description:
      "Acquisition: public RSVP/check-in pages → “Powered by RootsCards” → join with 1 tap.",
    image: seamless,
  },
  {
    description:
      "Collaboration: invite teammates; each invite bumps your place in the queue.",
    image: clb,
  },
  {
    description:
      "Virality: referral link after signup; each referral moves you up.",
    image: rfl,
  },
  {
    description:
      "Expansion: start at one door → add more doors/locations with the same QR.",
    image: qr,
  },
];

interface FeaturesProps {
  image?: string;
  title?: string;
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

// data for waitlist-spaces features section
export const spaces: FeaturesProps[] = [
  {
    color: "#0181D7",
    image: whatsapp,
    desc: "Create your space.",
  },
  {
    color: "#3AAD51",
    image: lock,
    desc: "Pick entry mode: NFC / QR / WhatsApp.",
  },
  {
    color: "#EF314C",
    image: owner,
    desc: "Go live — watch arrivals in real time.",
  },
  {
    color: "#914ACA",
    image: noise,
    desc: "PLG loop",
  },
];

export const spacesTwo: FeaturesProps[] = [
  {
    color: "#EF9931",
    image: tasks,
    desc: "Guests hit your public page → 1-tap join → more spaces discover us.",
  },
  {
    color: "#6B48DC",
    image: deposits,
    desc: "Host loop: staff invites = priority; each teammate adds momentum.",
  },
  {
    color: "#858B1E",
    image: whatsapp,
    desc: "Attendee loop: guests hit your public page → 1-tap join → more spaces discover us.",
  },
];

export const officesScroll: Processes[] = [
  {
    description: "Visitor pre-registration links + walk-in QR.",
  },
  {
    description: "Badge/label options and reason-for-visit.",
  },
  {
    description: "Time-on-premise, department/host mapping, CSV/PDF exports.",
  },
  {
    description: "Cleaner scheduling prompts on checkout.",
  },
  {
    description: "Owner/manager dashboard across multiple properties.",
  },
  {
    description:
      "Growth loops in product-led growth (PLG) create self-sustaining systems.",
  },
  {
    description:
      "Collab loop: invite HR/Facilities/Security — setup spreads, stickiness skyrockets.",
  },
  {
    description: "Expansion loop: start at HQ → clone to branches in minutes.",
  },
];

export const shortletsScroll: Processes[] = [
  {
    description: "Guest pre-arrival link (ID + details) or lobby QR.",
  },
  {
    description: "Check-in timestamps, stay length, unit mapping.",
  },
  {
    description: "Optional deposits/damages notes & photo attachments.",
  },
  {
    description: "Cleaner scheduling prompts on checkout.",
  },
  {
    description: "Owner/manager dashboard across multiple properties.",
  },
  {
    description:
      "Growth loops in product-led growth (PLG) create self-sustaining systems.",
  },
  {
    description:
      "Guest loop: guests see your branded page → share with friends → hosts adopt.",
  },
  {
    description:
      "Portfolio loop: add more units/locations in one click — scale without chaos.",
  },
];
