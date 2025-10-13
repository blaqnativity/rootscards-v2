import { Waitlist as Layout } from "@/layouts/Waitlist";
import { Hero } from "../Hero";
import { WaitlistForm } from "./WaitlistForm";
import { VideoCard } from "../VideoCard";
import { officesWaitlist as info } from "@/constants/videoCards";
import { Offer } from "./Offer";
import { SpacesFAQ as data } from "@/constants/FAQ";
import { FAQ } from "../FAQ";

export const OfficesWaitlist = () => {
  return (
    <Layout>
      <Hero
        title="Professional entry without the paperwork."
        subtitle="Visitor & staff check-in with auditable logs — NFC/QR/WhatsApp."
      >
        <WaitlistForm />
      </Hero>
      <VideoCard info={info} />
      <Offer />
      <FAQ data={data} />
    </Layout>
  );
};
