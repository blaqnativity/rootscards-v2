import videoBg from "@/assets/images/bg-image.svg";

export interface VideoCard {
  badgeIcon?: string;
  badgeText: string;
  image: string;
  description: string;
  ctaText: string;
  testimonial?: {
    quote: string;
    highlight: string;
    avatar: string;
    name: string;
    role: string;
  };
}

export const videoCards: VideoCard[] = [
  {
    badgeText: "RootsCard Suite",
    image: videoBg,
    description:
      "We’re helping companies extract their data and turn it into actions applicable today, not in months.",
    ctaText: "Book a demo",
    testimonial: {
      quote:
        "Rootscard helped us save $2.1M in hidden risk and cut analysis time by 50%",
      highlight: "$2.1M",
      avatar: "/avatars/sam-smith.jpg",
      name: "Sam Smith",
      role: "CTO, Microsoft",
    },
  },
  {
    badgeText: "RootsCard Suite",
    image: videoBg,
    description:
      "We’re helping companies extract their data and turn it into actions applicable today, not in months.",
    ctaText: "Book a demo",
    testimonial: {
      quote:
        "We were able to increase customer satisfaction by 70% all the way!",
      highlight: "$2.1M",
      avatar: "/avatars/sam-smith.jpg",
      name: "Sam Smith",
      role: "CTO, Microsoft",
    },
  },
];
