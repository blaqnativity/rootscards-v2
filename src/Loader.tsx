import { ScaleLoader } from "react-spinners";

export default function Loader({ color = "#ffffff", fullScreen = true }) {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "h-screen" : "h-full"
      }`}
      style={{
        background: "linear-gradient(135deg, #7CFF67, #B19EEF, #5227FF)", // gradient background
      }}
    >
      <ScaleLoader color={color} height={60} width={8} />
    </div>
  );
}
