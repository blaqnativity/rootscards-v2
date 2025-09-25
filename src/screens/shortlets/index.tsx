import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Steps } from "./Steps";
import { Testimonial } from "../../components/utils/Testimonial";

export const Shortlets = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Steps />
      <Testimonial />
    </MainLayout>
  );
};
