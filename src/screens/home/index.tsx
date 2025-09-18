import { MainLayout } from "../../layouts/MainLayout";
import { Hero } from "./Hero";
import { PainPointSection } from "./PainPointSection";
import { Processes } from "./Processes";
import { FAQ } from "../../components/utils/FAQ";
import { VideoCard } from "./VideoCard";
import { Testimonial } from "../../components/utils/Testimonial";

export const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <PainPointSection />
      <Processes />
      <VideoCard />
      <Testimonial />
      <FAQ />
    </MainLayout>
  );
};
