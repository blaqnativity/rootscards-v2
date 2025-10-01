import { Footer } from "../components/navigation/Footer";
import { SecondaryNav as Navbar } from "../components/navigation/SecondaryNav";
import { navRange1 } from "@/constants/navConstants";

export const SecondLayout = ({ children }: LayoutProps) => {
  return (
    <section>
      <Navbar ranges={navRange1} />
      {children}
      <Footer />
    </section>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};
