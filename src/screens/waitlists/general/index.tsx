import { Hero } from "../Hero";
import { WaitlistForm } from "./WaitlistForm";
import { VideoCard } from "./VideoCard";
import { SubFooter as Footer } from "@/components/navigation/SubFooter";
import { Offer } from "./Offer";

export const GeneralWaitlist = () => {
  return (
    <>
      <Hero>
        <WaitlistForm />
      </Hero>
      <VideoCard />
      <Offer />
      <Footer />
    </>
  );
};
