import { Hero } from "./Hero";
import { VideoCard } from "./VideoCard";
import { SubFooter as Footer } from "@/components/navigation/SubFooter";
import { Offer } from "./Offer";

export const Waitlist = () => {
  return (
    <>
      <Hero />
      <VideoCard />
      <Offer />
      <Footer />
    </>
  );
};

export default Waitlist;
