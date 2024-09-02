import Button from "../components/button";
import limited from "../assets/limited_drop_promo-phase_3_d.webp";
const SummerCool = () => {
  return (
    <section className="rounded-xl flex w-full h-[60vh] relative mb-6 overflow-hidden bg-[url('./assets/homeshow.webp')] ">
      <div className="w-full h-full absolute top-0 left-0 bg-[url('./assets/bottles_pattern.webp')] z-0"></div>
      <div className=" w-1/2 h-full  py-16 px-12 text-[#183c5cfb] z-10">
        <h2 className="text-3xl font-semibold mb-6">Summer of color</h2>
        <p className="mb-6 text-xl tracking-wider text-gray-300">
          Welcome to Summer of Color. We're celebrating Summer in a big way with
          new colors monthly—in extremely limited quantities guaranteed to sell
          out. Stay tuned for you next favorite.
        </p>
        <Button title="Check it out" />
      </div>
      <div className="w-1/2 h-full z-10">
        <img
          src={limited}
          alt="Water Analysis"
          className="object-cover h-full "
        />
      </div>
    </section>
  );
};

export default SummerCool;
