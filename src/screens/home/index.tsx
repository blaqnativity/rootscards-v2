import { MainLayout } from "../../layouts/MainLayout";
import { FeatureCards } from "./FeatureCards";
import { Hero } from "./Hero";
import { PainPointSection } from "./PainPointSection";

export const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <FeatureCards />
      <PainPointSection />
    </MainLayout>
  );
};
