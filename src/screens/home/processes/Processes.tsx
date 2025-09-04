import { ProcessCard } from "./ProcessCard";
export const Processes = () => {
  return (
    <section className="md:py-30">
      <main className="w-full mx-auto px-4 overflow-hidden">
        <div className="ml-30 grid gap-10 md:grid-cols-[30%_100%]">
          <div className="flex flex-col justify-start gap-6">
            <span className="headerFive">how it works</span>
            <h2 className="headerTwo">Check-In. Route. Optimize. Report.</h2>
            <span className="fadeText">
              RootsCards turns messy arrivals into streamlined experiences. From
              the moment someone checks in, AI handles the flow of segmenting,
              routing, and optimizing in real time — while giving your team the
              insights to act with confidence.
            </span>
          </div>
          <div>
            <ProcessCard />
          </div>
        </div>
      </main>
    </section>
  );
};
