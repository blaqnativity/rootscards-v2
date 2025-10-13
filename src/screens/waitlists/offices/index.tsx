import { Hero } from "../Hero";
import { WaitlistForm } from "./WaitlistForm";

export const OfficesWaitlist = () => {
  return (
    <>
      <Hero
        title="Professional entry without the paperwork."
        subtitle="Visitor & staff check-in with auditable logs — NFC/QR/WhatsApp."
      >
        <WaitlistForm />
      </Hero>
    </>
  );
};
