//import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import PromotionBanner from "./pages/PromotionBanner";
import ReviewsSection from "./pages/ReviewsSection";
import WaterQualityBanner from "./pages/WaterQualityBanner";
import Shop from "./pages/Shop";
import Footer from "./pages/Footer";
import SummerCool from "./pages/SummerCool";
import NewTreanding from "./pages/NewTreanding";
import Ourmission from "./pages/Ourmission";
import Magazine from "./pages/Magazine";


function App() {
  return (
    <>
      <Navbar />
      <PromotionBanner />
      <div className="px-20 space-y-7">
        <ReviewsSection />
        <WaterQualityBanner />
        <Shop />
        <SummerCool />
        <NewTreanding/>
      </div>
      <Ourmission />
      <Magazine/>
     <Footer/> 
       
    </>
  );
}

export default App;
