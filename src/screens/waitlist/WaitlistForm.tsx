import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { waitlistSchema } from "@/services/validation/waitlistSchema";
import { submitWaitlist } from "@/services/waitlistService";
import { ArrowRight, CaretDownIcon } from "@phosphor-icons/react";
import { toast } from "react-toastify";

export const WaitlistForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(waitlistSchema),
    defaultValues: {
      name: "",
      spaceType: "",
      email: "",
    },
  });

  type WaitlistFormData = {
    name: string;
    spaceType: string;
    email: string;
  };

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      const res = await submitWaitlist(data);
      console.log("Submitted:", res);
      toast.success("🎉 You’ve successfully joined the waitlist!");
      reset();
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black/60 rounded-3xl p-8 backdrop-blur-md border border-white/10">
      <h3 className="text-white text-lg font-semibold mb-2">
        Join our Waitlist
      </h3>
      <p className="text-gray-300 text-sm mb-6">
        Be among the first to experience what we’re building.
        <br />
        Founder pricing + priority onboarding.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 md:flex-wrap md:gap-3"
      >
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="w-full bg-black/30 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="relative flex-1">
            <select
              {...register("spaceType")}
              className="w-full bg-black/30 border border-white/10 rounded-full px-5 pr-10 py-3 text-sm text-white 
               appearance-none focus:outline-none focus:border-white/30"
            >
              <option value="">Space type</option>
              <option value="office">Offices</option>
              <option value="apartment">Apartments</option>
              <option value="church">Churches</option>
              <option value="event-space">Event spaces</option>
            </select>
            <CaretDownIcon
              size={16}
              color="white"
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            {errors.spaceType && (
              <p className="text-red-400 text-xs mt-1">
                {errors.spaceType.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-3">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Your email address"
              {...register("email")}
              className="w-full bg-black/30 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-fit cursor-pointer inline-flex items-center justify-center rounded-full ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-200"
            } text-black pl-3 py-1 text-sm font-semibold transition whitespace-nowrap`}
          >
            {/* Text */}
            <span>{isSubmitting ? "Processing" : "Join the waitlist"}</span>

            {/* Icon stays visible always */}
            <span
              className={`bg-black ml-2 mr-1 p-2 rounded-full transition ${
                isSubmitting ? "opacity-50" : "opacity-100"
              }`}
            >
              <ArrowRight size={18} color="white" />
            </span>
          </button>
        </div>
        {errors.email && (
          <p className="text-red-400 text-xs">{errors.email.message}</p>
        )}
      </form>
    </div>
  );
};
