import { Footer } from "../components/navigation/Footer";
import { MainNav as Navbar } from "../components/navigation/MainNav";
import { navRange1 } from "@/constants/NavRanges";

export const MainLayout = ({ children }: LayoutProps) => {
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
