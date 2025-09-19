import { testimonials } from "../../constants/testimonials";
import { TestimonialCarousel } from "../ui/aceternity/testimonial-carousel";

export const Testimonial = () => {
  return (
    <section className="py-10 md:py-20 bg-black">
      <TestimonialCarousel items={testimonials} direction="left" speed="slow" />
      <TestimonialCarousel
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
};
