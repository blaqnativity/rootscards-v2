import { MainLayout } from "../../layouts/MainLayout";
import { Hero } from "./Hero";
import { PainPointSection } from "./PainPointSection";
import { Processes } from "./processes/Processes";
import { FAQ } from "../../components/utils/FAQ";
import { VideoCards } from "./VideoCards";
import { Testimonial } from "../../components/testimonials/Testimonial";

export const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <PainPointSection />
      <Processes />
      <VideoCards />
      <Testimonial />
      <FAQ />
    </MainLayout>
  );
};
