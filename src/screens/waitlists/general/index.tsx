import { Waitlist as Layout } from "@/layouts/WaitList";
import { Hero } from "../Hero";
import { WaitlistForm } from "./WaitlistForm";
import { VideoCard } from "./VideoCard";
import { Offer } from "./Offer";

export const GeneralWaitlist = () => {
  return (
    <Layout>
      <Hero>
        <WaitlistForm />
      </Hero>
      <VideoCard />
      <Offer />
    </Layout>
  );
};
