import tap from "../assets/wq-banner-background_d.webp"
import Button from "../components/button";
const WaterQualityBanner = () => {
  return (
    <section className="rounded-xl flex w-full h-[60vh]  mb-6 overflow-hidden ">
      <div className=" w-1/2 h-full bg-gradient-to-r from-[#183c5cfb] via-[#183c5cee] to-[#183c5cea] py-16 px-12 text-white">
        <h2 className="text-3xl font-semibold mb-6">
          What's in your tap water?
        </h2>
        <p className="mb-6 text-2xl tracking-wider text-gray-300">
          Legal limits are designed to keep us safe, but contaminants still slip
          through the cracks. Find out what's lurking in your water.
        </p>
        <div className="flex gap-4  ">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Enter ZIP"
              className="bg-white text-gray-800 rounded-full px-4 py-2 outline-none shadow-sm focus:ring-2 focus:ring-blue-600"
            />
            <Button title="Analyze" />
          </div>

          <p className="text-sm text-gray-300 mt-4">
            Our database pulls data from multiple data sources such as EWG and
            EPA to give users the most comprehensive view of their water
            quality.
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <img src={tap} alt="Water Analysis" className="object-cover h-full " />
      </div>
    </section>
  );
};

export default WaterQualityBanner;
