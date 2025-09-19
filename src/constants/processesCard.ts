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
