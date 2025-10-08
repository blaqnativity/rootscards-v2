import bg from "@/assets/images/waitlist.png";
import logo from "/lightLogo.svg";
import Aurora from "../../components/ui/reactbits/Aurora";
import { WaitlistForm } from "./WaitlistForm";
export const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-10 md:py-15 relative h-screen w-full overflow-hidden"
    >
      {/* Aurora full screen background */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Aurora
          colorStops={["#D2180A", "#EAEF9E", "#7725FC"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white gap-10 px-4">
        <div className="bubble">
          <img src={logo} className="bubble-icon w-10 h-10" alt="" />
          <span className="hFour ml-1">Rootscard is launching soon</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center gap-5 max-w-7xl">
          <h1 className="hOne titleFont font-bold relative">
            Kill the queue. Keep the vibe.
          </h1>
          <p className="hFour w-2/3 md:w-lg leading-8 mx-auto">
            Self-check-in and access control that actually scales. NFC, QR, or
            WhatsApp.
          </p>
        </div>
        {/* Waitlist form */}
        <WaitlistForm />
      </div>
    </section>
  );
};
