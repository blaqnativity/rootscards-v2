import { useNavigate } from "react-router-dom";
import bgImage from "./assets/images/gradientBg.png";
import { ArrowLeft } from "@phosphor-icons/react";
import { MainLayout } from "./layouts/MainLayout";
import Aurora from "./components/ui/reactbits/Aurora";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <main
        className="relative flex flex-col items-center justify-center min-h-screen text-white px-4 text-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Aurora background overlay */}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#7CFF67", "#B19EEF", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Page Not Found!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl my-8 max-w-xl mx-auto">
            We couldn’t find the page you were looking for.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate(-1)}
              className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold py-3 px-6 rounded flex items-center gap-1"
            >
              <ArrowLeft size={18} />
              Return
            </button>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};
