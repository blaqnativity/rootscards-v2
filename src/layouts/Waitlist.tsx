import { SubFooter as Footer } from "@/components/navigation/SubFooter";

export const Waitlist = ({ children }: LayoutProps) => {
  return (
    <section>
      {children}
      <Footer />
    </section>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};
