import rootscards from "../../assets/images/rootscards.svg";
import dashboard from "../../assets/images/dashboard.svg";
import glasBg from "../../assets/images/glasBg.svg";
import noiseBg from "../../assets/images/noiseBg.svg";

export const FeatureCards = () => {
  return (
    <section className="md:py-30 bg-white max-w-[1680px] px-4 mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Card 1 */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h3 className="headerFive">your smart card, instantly connected</h3>

          {/* Description */}
          <p className="headerFour">
            Your NFC-powered RootsCard instantly lets you check in, make
            transactions, share your portfolio, and manage your digital identity
            wherever you go.
          </p>

          {/* Image with background */}
          <div
            className="mt-4 h-[500px] rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              backgroundImage: `url(${glasBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img src={rootscards} alt="RootsCard" className="h-[300px]" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h3 className="headerFive">your smart card + helpdesk</h3>

          {/* Description */}
          <p className="headerFour">
            One seamless contact intelligence suite that gives deep insight into
            user behavior, card interactions, and engagement — offering a
            unified view across physical and digital touchpoints.
          </p>

          {/* Image with background */}
          <div
            className="relative mt-4 h-[500px] rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              backgroundImage: `url(${noiseBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              src={dashboard}
              alt="Dashboard"
              className="absolute bottom-0 w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
