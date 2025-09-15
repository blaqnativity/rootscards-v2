import { useNavigate } from "react-router-dom";
import bgImage from "./assets/images/gradientBg.png";
import { ArrowLeft } from "@phosphor-icons/react";
import { MainLayout } from "./layouts/MainLayout";
import Aurora from "./components/reactbits/Aurora";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <main
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="text-white"
      >
        {" "}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#7CFF67", "#B19EEF", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
        <div className="h-screen flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Page Not Found!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl my-8 max-w-xl">
            We couldn't find the page you were looking for
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold py-3 px-6 rounded cursor-pointer flex items-center gap-1"
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
