import Bottole from "../assets/BNWLL100A.webp";
import Button from "../components/button";
const PromotionBanner = () => {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-white bg-[url('./assets/homeshow.webp')]">
      <div className="absolute bottom-0 left-0 mx-12 mb-20 max-w-4xl px-6   space-y-12">
        <div className="space-y-4 ">
          <h3 className="text-xl capitalize tracking-wider ml-1">
            Drink brilliantly
          </h3>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold  ">
            Get 10% off sitewide
          </h1>
        </div>
        <p className="text-lg md:text-xl lg:text-2xl  max-w-xl font-medium">
          This weekend only, enjoy 10% off during our End of Summer sale.
          Hydrated? Yes, we are.
        </p>

        <Button title="Shop now" />
      </div>
      <div className="absolute bottom-0 right-0 mx-12 mb-20">
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <img src={Bottole} alt="LARQ Bottle Swig Top" className="h-44" />
          <div className="ml-4 text-left">
            <p className="text-gray-700 font-semibold">LARQ Bottle Swig Top</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
