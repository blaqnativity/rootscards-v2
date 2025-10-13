import { Waitlist as Layout } from "@/layouts/WaitList";
import { Hero } from "../Hero";
import { WaitlistForm } from "./WaitlistForm";
import { VideoCard } from "../VideoCard";
import { shortletsWaitlist as info } from "@/constants/videoCards";
import { Offer } from "./Offer";
import { ShortletsWaitlist as data } from "@/constants/FAQ";
import { FAQ } from "../FAQ";
export const ShortletsWaitlist = () => {
  return (
    <Layout>
      <Hero
        title="Faster check-ins. Cleaner records. Fewer headaches."
        subtitle="Guest self-check-in + digital register for shortlets."
      >
        <WaitlistForm />
      </Hero>
      <VideoCard info={info} />
      <Offer />
      <FAQ data={data} />
    </Layout>
  );
};
