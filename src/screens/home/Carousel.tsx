export const Carousel = () => {
  return (
    <div className="bg-gray-900 py-10">
      <div className="flex items-center gap-6">
        {/* Title */}
        <p className="text-white text-sm md:text-base">
          Connect What You Already Use
        </p>

        {/* Infinite Scroll Row */}
        <div className="w-full max-w-4xl"></div>
      </div>
    </div>
  );
};
