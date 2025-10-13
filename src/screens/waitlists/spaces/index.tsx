import { Waitlist as Layout } from "@/layouts/Waitlist";
import { Hero } from "../Hero";
import { WaitlistForm } from "./WaitlistForm";
import { VideoCard } from "../VideoCard";
import { spacesWaitlist as info } from "@/constants/videoCards";
import { Features } from "./Features";
import { FAQ } from "../FAQ";
import { SpacesFAQ as data } from "@/constants/FAQ";

export const SpacesWaitlist = () => {
  return (
    <Layout>
      <Hero
        title="The line ends here."
        subtitle="Check-ins that take seconds, not minutes — tap, scan, or WhatsApp."
      >
        <WaitlistForm />
      </Hero>
      <VideoCard info={info} />
      <Features />
      <FAQ data={data} />
    </Layout>
  );
};
