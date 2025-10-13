import { Hero } from "../Hero";
import { WaitlistForm } from "./WaitlistForm";

export const SpacesWaitlist = () => {
  return (
    <>
      <Hero
        title="The line ends here."
        subtitle="Check-ins that take seconds, not minutes — tap, scan, or WhatsApp."
      >
        <WaitlistForm />
      </Hero>
    </>
  );
};
