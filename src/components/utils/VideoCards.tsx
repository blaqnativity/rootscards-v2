import { VideoCarousel } from "@/components/ui/aceternity/video-carousels";
import { videoCards } from "@/constants/videoCards";

export const VideoCards = () => {
  return (
    <div className="mt-10">
      <VideoCarousel cards={videoCards} speed={100} />
    </div>
  );
};
