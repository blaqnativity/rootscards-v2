import { ProcessCard } from "./ProcessCard";
export const Processes = () => {
  return (
    <section className="md:py-20">
      <main className="max-w-[1680px] mx-auto px-8 overflow-hidden">
        <div className="grid gap-10 md:grid-cols-[30%_100%]">
          <div className="flex flex-col justify-start gap-6">
            <span className="headerFive fadeText">how it works</span>
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
