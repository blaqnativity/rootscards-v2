import { Footer } from "../components/navigation/Footer";
import { SecondaryNav as Navbar } from "@/components/navigation/SecondaryNav";

export const SecondLayout = ({ children }: LayoutProps) => {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};
