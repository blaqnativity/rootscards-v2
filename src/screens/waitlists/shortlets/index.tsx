import { Hero } from "../Hero";
import { WaitlistForm } from "./WaitlistForm";
export const ShortletsWaitlist = () => {
  return (
    <>
      <Hero
        title="Faster check-ins. Cleaner records. Fewer headaches."
        subtitle="Guest self-check-in + digital register for shortlets."
      >
        <WaitlistForm />
      </Hero>
    </>
  );
};
