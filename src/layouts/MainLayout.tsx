import { Footer } from "../components/navigation/Footer";
import { MainNav as Navbar } from "../components/navigation/MainNav";

export const MainLayout = ({ children }: LayoutProps) => {
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
