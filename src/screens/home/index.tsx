import { MainLayout as Layout } from "../../layouts/MainLayout";
import { Hero } from "./Hero";
import { PainPointSection } from "./PainPointSection";
import { Processes } from "./Processes";
import { FAQ } from "../../components/utils/FAQ";
import { VideoCard } from "./VideoCard";
import { Testimonial } from "../../components/utils/Testimonial";
import { FAQData } from "@/constants/FAQ";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <PainPointSection />
      <Processes />
      <VideoCard />
      <Testimonial />
      <FAQ data={FAQData} />
    </Layout>
  );
};

export default Home;
