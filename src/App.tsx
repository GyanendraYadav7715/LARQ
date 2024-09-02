//import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import PromotionBanner from "./pages/PromotionBanner";
import ReviewsSection from "./pages/ReviewsSection";
import WaterQualityBanner from "./pages/WaterQualityBanner";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Navbar />
      <PromotionBanner />
      <div className="px-20">
        <ReviewsSection />
        <WaterQualityBanner />
        <Shop />
      </div>
      {/* <Footer/> */}
       
    </>
  );
}

export default App;
