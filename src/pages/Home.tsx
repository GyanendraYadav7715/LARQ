import Navbar from "./Navbar";
import PromotionBanner from "./PromotionBanner";
import ReviewsSection from "./ReviewsSection";
import WaterQualityBanner from "./WaterQualityBanner";
import Shop from "./Shop";
import Footer from "./Footer";
import SummerCool from "./SummerCool";
import NewTreanding from "./NewTreanding";
import Ourmission from "./Ourmission";
import Magazine from "./Magazine";

const Home = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <PromotionBanner />
      <div className="px-20 space-y-7">
        <ReviewsSection />
        <WaterQualityBanner />
        <Shop />
        <SummerCool />
        <NewTreanding />
      </div>
      <Ourmission />
      <Magazine />
      <Footer />{" "}
    </div>
  );
};

export default Home;
