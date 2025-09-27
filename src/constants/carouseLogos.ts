import cowry from "@/assets/images/cowry.svg";
import slack from "@/assets/images/slack.svg";
import whatsapp from "@/assets/images/whatsapp.svg";
import inter from "@/assets/images/inter.svg";
import hubspot from "@/assets/images/hubspot.svg";
import juliusBerger from "@/assets/images/JuliusBerger.svg";
import tix from "@/assets/images/Tix-Africa.svg";

export type CarouselLogo = {
  src: string;
  alt: string;
};

export const carouselOne: CarouselLogo[] = [
  { src: cowry, alt: "Cowry" },
  { src: slack, alt: "Slack" },
  { src: inter, alt: "Intercom" },
  { src: whatsapp, alt: "WhatsApp" },
  { src: hubspot, alt: "HubSpot" },
  { src: juliusBerger, alt: "Julius Berger" },
  { src: tix, alt: "Tix Africa" },
];

import flutter from "@/assets/images/flutter.svg";
import tuya from "@/assets/images/tuya.svg";
import paystak from "@/assets/images/paystak.svg";
import airbnb from "@/assets/images/airbnb.svg";
import bookings from "@/assets/images/bookings.svg";

export const carouselTwo: CarouselLogo[] = [
  { src: flutter, alt: "flutter" },
  { src: tuya, alt: "tuya" },
  { src: whatsapp, alt: "whatsapp" },
  { src: airbnb, alt: "airbnb" },
  { src: paystak, alt: "PayPal" },
  { src: bookings, alt: "PayPal" },
];
