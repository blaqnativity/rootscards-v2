import { testimonials } from "../../constants/testimonials";
import { InfiniteMovingCards } from "../ui/aceternity/infinite-moving-cards";

export const Testimonial = () => {
  return (
    <section className="py-10 md:py-20 bg-black">
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
};
