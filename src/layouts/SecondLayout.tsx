import { Footer } from "../components/navigation/Footer";
import { SecondaryNav as Navbar } from "../components/navigation/SecondaryNav";
import { navRange2 } from "@/constants/navConstants";

export const SecondLayout = ({ children }: LayoutProps) => {
  return (
    <section>
      <Navbar ranges={navRange2} />
      {children}
      <Footer />
    </section>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};
