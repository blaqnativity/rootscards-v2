import Lottie from "lottie-react";
import successAnimation from "@/assets/animations/line.json";

export const Line = () => {
  return (
    <div>
      <Lottie
        animationData={successAnimation}
        loop={true}
        autoplay={true}
        className="w-60 md:w-90 h-30 md:h-auto"
      />
    </div>
  );
};
