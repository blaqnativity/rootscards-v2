import { testimonials } from "../../constants/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonial = () => {
  return (
    <section className="py-10 md:py-20 bg-black">
      <div className="overflow-x-auto flex gap-6 snap-x snap-mandatory">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </div>
    </section>
  );
};
